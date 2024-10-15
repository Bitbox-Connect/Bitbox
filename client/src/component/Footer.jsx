import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

function Footer(props) {
  return (
    <footer>
      <div className={`wrapper ${props.mode === 'dark' ? 'dark-mode' : ''}`}>
        <div className='footer-container'
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : 'white',
            borderTop: props.mode === 'dark' ? '1px solid white' : '1px solid black',
            borderBottom: props.mode === 'dark' ? '1px solid white' : '1px solid black'
          }}>
          <div className='footer-about'>
            <div className='footer-note'>
              <Link to="/">
                <div className='footer-logo'>
                  <img className='mx-3' style={{ width: "5.5rem" }} src={logo} alt="logo" />
                </div>
                <h2 style={{ fontFamily: "medium", fontSize: "2.5rem" }}>BIT<span className='code'>BOX</span></h2>
              </Link>
              <div className='project-info text-center fs-5'
                style={{ color: props.mode === "dark" ? "white" : "black" }}>
                Where Projects Find Solution Together
              </div>
              <div className='text-center fs-6'>
                <Link to="/community">Explore more..</Link>
              </div>
            </div>
          </div>

          <div className="new_Details">
            <h3 className='fs-2 fw-bold'
              style={{ color: props.mode === "dark" ? "white" : "black" }}>
              About Bitbox
            </h3>
            <div className='Detail'>
              <ul className='fs-5'>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to='/codeofconduct'>Code of Conduct</Link></li>
              </ul>
            </div>
          </div>

          <div className="Legal">
            <h3 className='fs-2 fw-bold'
              style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Legal
            </h3>
            <ul className='fs-5'>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termofuse">Terms of use</Link></li>
            </ul>
          </div>

          <div className="social">
            <h3 className='fw-bold fs-2'
              style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Follow us on
            </h3>
            <ul>
      <li>
        <a href="https://www.linkedin.com/in/bit-box-community" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="FaLinkedin" fontSize="2rem" /> Linkedin
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BITBOX688152" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="FaTwitter" fontSize="2rem" /> Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/bitboxcommunity" target="_blank" rel="noopener noreferrer">
          <FaGithub className="FaGithub" fontSize="2rem" /> GitHub
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCXUTdcw27jaH_go9iyUjJnA" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="FaYoutube" fontSize="2rem" /> YouTube
        </a>
      </li>
    </ul>
          </div>
        </div>

        <div className="copy-right">
          <h4 className='copy-content'>© 2024 Bitbox.&nbsp; Made with 🤍 by Bitbox India.&nbsp; All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string.isRequired,
};

export default Footer;
