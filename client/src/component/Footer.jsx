import '../component/css/Footer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
const Footer = (props) => {
    return (
        <>
            <hr style={{ border: '3px solid #0D92F4' }} />
            <div className="Footer" style={{ backgroundColor: props.mode === 'dark' ? '#0B192C' : 'white' }}>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3 style={{ fontFamily: "medium", fontSize: "2.5rem" }}>BIT<span className='code' style={{ Color: "#0D92F4" }}>BOX</span></h3>
                            <p>Empowering Developers,<br />
                                Where Projects Find solution together</p>
                            <div className="footer-icons">
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
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>About</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to="/contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/codeofconduct'>Code of Conduct</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7 col-lg-4 col-13 ft-3">
                            <h5>Legals</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link to="/feedback">Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/privacypolicy">Privacy Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <li><Link to="/termofuse">Terms of use</Link></li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p className='copy-content'>© 2024 Bitbox.&nbsp; Made with 🤍 by Bitbox India.&nbsp; All rights reserved.</p>
            </div>
        </>
    )
}


Footer.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default Footer