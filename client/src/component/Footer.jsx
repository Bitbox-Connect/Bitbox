import '../css/Footer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import VisitorCounter from './Footers/VisitorCount';

const Footer = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false); // Flag to handle message color
    const [stars, setStars] = useState(0);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setMessage(""); // Reset message

        if (!email || !name) {
            setIsError(true);
            setMessage("Please enter valid details.");
            clearMessageAndResetEmail();
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/profile/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsError(false);
                setEmail('');
                setName('')
                setMessage("Thank you for subscribing!");
            } else {
                setIsError(true);
                setMessage(data.message || "Subscription failed, please try again.");
            }

            clearMessageAndResetEmail();
        } catch (error) {
            console.error("Error subscribing:", error);
            setIsError(true);
            setMessage("An error occurred, please try again later.");
            clearMessageAndResetEmail();
        }
    };

    const clearMessageAndResetEmail = () => {
        setTimeout(() => {
            setMessage("");
            setEmail("");
            setName("")
        }, 7000);
    };
    useEffect(() => {
        // Configure the chatbot settings
        window.embeddedChatbotConfig = {
            chatbotId: "GzK_h2kRkJ8e-jLXJVgmy",
            domain: "www.chatbase.co"
        };

        // Create the script element
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;
        script.setAttribute("chatbotId", "GzK_h2kRkJ8e-jLXJVgmy");
        script.setAttribute("domain", "www.chatbase.co");

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const fetchGitHubStars = async () => {
            const response = await fetch('https://api.github.com/repos/Bitbox-Connect/Bitbox');
            const data = await response.json();
            setStars(data.stargazers_count);
        };
        fetchGitHubStars();
    }, []);


    return (
        <>
            {/* Divider line */}
            <hr style={{ border: '3px solid #0D92F4' }} />

            {/* Footer container with dynamic background color */}
            <div className="Footer" style={{ backgroundColor: props.mode === 'dark' ? '#0B192C' : 'white' }}>
                <div className="container">
                    <div className='mb-4' data-aos="fade-up" data-aos-duration='1500'>
                        <h4 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="text-3xl font-semibold text-center mb-4">Subscribe to our Newsletter</h4>
                        <form
                            className="flex flex-col items-center gap-4 md:flex-row md:justify-center justify-center"
                            onSubmit={handleSubscribe}
                        >
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-xs focus:outline-none text-black"

                            />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-xs focus:outline-none text-black mb-0"

                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-md w-full max-w-[120px] hover:bg-blue-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                        {message && (
                            <p className={`text-2xl mt-4 ${isError ? 'text-red-500' : 'text-green-500'} text-center`}>
                                {message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center items-center mb-4" data-aos='fade-up' data-aos-duration='1500'>
                        <a
                            href="https://github.com/Anuj3553/Bitbox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.57v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.82 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.5.12-3.14 0 0 1.01-.32 3.3 1.23a11.51 11.51 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.84.12 3.14.76.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.66-5.47 5.96.43.37.82 1.1.82 2.23v3.31c0 .31.22.69.83.57A12 12 0 0012 0"></path>
                            </svg>
                            <span>Star us ⭐ {stars !== null ? stars : '...'}</span>
                        </a>

                        <div className="flex flex-col items-center text-gray-800 ml-4">

                            <a href="https://github.com/Anuj3553/Bitbox" target="_blank" rel="noopener noreferrer">
                                <VisitorCounter />
                            </a>

                        </div>
                    </div>

                    <div className="row">
                        {/* Left section with branding and social icons */}
                        <div className="col-md-6 col-lg-5 col-12 ft-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
                            <h3 style={{ fontFamily: "medium", fontSize: "2.5rem" }}>
                                BIT<span className='code' style={{ color: "#0D92F4" }}>BOX</span>
                            </h3>
                            <p>
                                Empowering Developers,<br />
                                Where Projects Find Solutions Together
                            </p>
                            <div className="footer-icons">
                                {/* Social media icons with links */}
                                <a href="https://github.com/bitboxcommunity" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub color="#211F1F" fontSize="2rem" />
                                </a>
                                <a href="https://twitter.com/BITBOX688152" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaXTwitter color="#1da1f2" fontSize="2rem" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCXUTdcw27jaH_go9iyUjJnA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <FaYoutube color="red" fontSize="2rem" />
                                </a>
                                <a href="https://www.linkedin.com/in/bit-box-community" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin color="#0077b5" fontSize="2rem" />
                                </a>
                            </div>
                        </div>

                        {/* Middle section with About links */}
                        <div className="col-md-6 col-lg-3 col-12 ft-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1800">
                            <h5 className='foot'>About</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to="/contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/codeofconduct'>Code of Conduct</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contributors'>Our contributors</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right section with Legal links */}
                        <div className="col-md-7 col-lg-4 col-13 ft-3" data-aos="fade-up" data-aos-delay='500' data-aos-duration="1800">
                            <h5 className='foot'>Legals</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to="/feedback">Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/privacypolicy">Privacy Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/termofuse">Terms of use</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Last footer section with copyright info */}
            <div className='Last-footer'>
                <p className='copy-content' data-aos="fade-up" data-aos-offset="30">
                    © 2024 Bitbox.&nbsp; Made with 🤍 by Bitbox India.&nbsp; All rights reserved.
                </p>
            </div>
        </>
    );
}

// Prop types for validation
Footer.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default Footer;
