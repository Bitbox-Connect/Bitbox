import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './css/Discussion.css';
import { io } from 'socket.io-client';
// AUDIO
import recieveMsg from '../assets/music/recieveMsg.mp3';
import userJoin from '../assets/music/userJoin.mp3';
import userLeft from '../assets/music/userLeft.mp3';
import InputModal from './InputModal';

// Create a Socket
const socket = io("http://localhost:5000", { transports: ["websocket"] });

const Discussion = (props) => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [userName, setUserName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true); // Open modal initially

    // Cache audio objects for better performance
    const audioCache = {
        recieveMsg: new Audio(recieveMsg),
        userJoin: new Audio(userJoin),
        userLeft: new Audio(userLeft),
    };

    useEffect(() => {
        // Event listeners for socket events
        socket.on('user-joined', name => {
            setMessages(prevMessages => [...prevMessages, { content: `${name} joined the chat`, position: 'center1' }]);
            playAudio('userJoin');
        });

        socket.on('receive', data => {
            setMessages(prevMessages => [...prevMessages, { content: `${data.name}: ${data.message}`, position: 'left' }]);
            playAudio('recieveMsg');
        });

        socket.on('left', name => {
            setMessages(prevMessages => [...prevMessages, { content: `${name} left the chat`, position: 'center2' }]);
            playAudio('userLeft');
        });

        // Clean up socket listeners when component unmounts
        return () => {
            socket.off('user-joined');
            socket.off('receive');
            socket.off('left');
        };
    }, []);

    // Function to handle audio playback
    const playAudio = (audioType) => {
        if (audioCache[audioType]) {
            audioCache[audioType].currentTime = 0; // Reset to start
            audioCache[audioType].play(); // Play the audio
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = messageInput.trim();
        if (message) {
            setMessages(prevMessages => [...prevMessages, { content: `You: ${message}`, position: 'right' }]);
            socket.emit('send', message);
            setMessageInput(''); // Clear the input field only after sending the message
        } else {
            // Optionally handle empty message submission (e.g., show alert)
            console.warn('Cannot send an empty message'); // Replace with user feedback as needed
        }
    };

    const handleJoin = (name) => {
        setUserName(name);
        socket.emit('new-user-joined', name); // Notify the server that a user has joined
        setIsModalOpen(false); // Close the modal after joining
    };

    return (
        <div className='discussion-main-container mt-20'>
            <InputModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleJoin}
                mode={props.mode} 
            />
            <div className='discussion-container-section'>
                <div className="discussion-container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {userName && <div className="welcome-center fs-3 mt-3">{`Welcome ${userName} to the Bitbox Community`}</div>}
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.position}`}>{message.content}</div>
                    ))}
                </div>
                <div className="discussion-send">
                    <form id="discussion-send-container" onSubmit={handleSubmit}>
                        <input style={{ color: props.mode === 'dark' ? 'black' : '' }}
                            type="text"
                            name="messageInput"
                            id="messageInp"
                            placeholder="Type a message"
                            value={messageInput}
                            onChange={e => setMessageInput(e.target.value)}
                        />
                        <button className="discussion-btn" type="submit" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Props Validation
Discussion.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    community: PropTypes.string,
    discussion: PropTypes.string,
    myProjects: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string,
    toggleMode: PropTypes.func,
    showAlert: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

Discussion.defaultProps = {
    title: 'Discussion',
    mode: 'light',
};

export default Discussion;
