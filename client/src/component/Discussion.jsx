import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './css/Discussion.css';
import { io } from 'socket.io-client';
// AUDIO
import recieveMsg from '../assets/music/recieveMsg.mp3';
import userJoin from '../assets/music/userJoin.mp3';
import userLeft from '../assets/music/userLeft.mp3';

// Create a Socket
const socket = io("http://localhost:5000", { transports: ["websocket"] });

const Discussion = (props) => {
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [messageInput, setMessageInput] = useState(''); // State to store user input message
    const [userName, setUserName] = useState(null); // State to store user's name
    console.log(userName)

    useEffect(() => {
        // Ask new user for his/her name and let the server know
        const name = prompt("Enter your name to join");
        if (name) {
            setUserName(name); // Set the user's name in state
            socket.emit('new-user-joined', name); // Emit 'new-user-joined' event to the server
        }

        // Event listener for a new user joining the chat
        socket.on('user-joined', name => {
            // Update messages state with the new user's joining message
            setMessages(prevMessages => [...prevMessages, { content: `${name} joined the chat`, position: 'center1' }]);
            // Play audio when a user joins
            playAudio(userJoin);
        });

        // Event listener for receiving a message from the server
        socket.on('receive', data => {
            // Update messages state with the received message
            setMessages(prevMessages => [...prevMessages, { content: `${data.name}: ${data.message}`, position: 'left' }]);
            // Play audio when receiving a message
            playAudio(recieveMsg);
        });

        // Event listener for a user leaving the chat
        socket.on('left', name => {
            // Update messages state with the user's leaving message
            setMessages(prevMessages => [...prevMessages, { content: `${name} left the chat`, position: 'center2' }]);
            // Play audio when a user leaves
            playAudio(userLeft);
        });

        // Clean up socket listeners when component unmounts
        return () => {
            socket.off('user-joined');
            socket.off('receive');
            socket.off('left');
        };

    }, []);

    // Function to handle audio playback
    const playAudio = (audio) => {
        const audioElement = new Audio(audio); // Create new Audio object
        audioElement.play(); // Play the audio
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = messageInput.trim();
        if (message !== '') {
            // Append your own message immediately to avoid waiting for the server
            setMessages(prevMessages => [...prevMessages, { content: `You: ${message}`, position: 'right' }]);
            socket.emit('send', message); // Emit 'send' event to the server
            setMessageInput(''); // Clear the message input field
        }
    };

    return (
        <div className='discussion-main-container'>
            <div className='discussion-container-section'>
                {/* Container for displaying chat messages */}
                <div className="discussion-container" style={{ color: props.mode === 'dark' ? 'black' : ''}}>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.position}`}>{message.content}</div>
                    ))}
                </div>

                {/* Form for sending messages */}
                <div className="discussion-send">
                    <form id="discussion-send-container" onSubmit={handleSubmit}>
                        <input style={{ color: props.mode === 'dark' ? 'black' : ''}}
                            type="text"
                            name="messageImp"
                            id="messageInp"
                            placeholder="Type a message"
                            value={messageInput}
                            onChange={e => setMessageInput(e.target.value)}
                        />
                        <button className="discussion-btn" type="submit" style={{ color: props.mode === 'dark' ? 'black' : ''}}>Send</button>
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

export default Discussion;
