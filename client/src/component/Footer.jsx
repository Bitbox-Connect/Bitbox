import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';
function Footer(props) {
  return (
    <footer>
      <div className='footer-container' style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', borderTop: props.mode === 'dark' ? '1px solid white' : '1px solid black', borderBottom: props.mode === 'dark' ? '1px solid white' : '1px solid black' }}>
        <div className='footer-about'>
          <div className='footer-note'>
            <Link to="/">
              <div className='footer-logo'>
                <img className='mx-3' style={{ width: "5.5rem" }} src={logo} alt="logo" />
              </div>
              <h2 style={{ fontFamily: "medium", fontSize: "2.5rem" }}>BIT<span className='code'>BOX</span></h2>
            </Link>
            <div className='project-info text-center fs-5'>Where Projects Find Solution Together</div>
            <div className='text-center fs-6'>
              <Link to="/community">Explore more..</Link>
            </div>
          </div>
        </div>
        <div className="new_Details">
          <h3 className='fs-2 fw-bold'>About Bitbox</h3>
          <div className='Detail'>
            <ul className='fs-5'>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to='/codeofconduct'>Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        <div className="Legal">
          <div>
            <h3 className='fs-2 fw-bold'>Legal</h3>
            <ul className='fs-5'>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termofuse">Terms of use</Link></li>
            </ul>
          </div>
        </div>
        <div className="social">
          <div className='fs-5'>
            <h3 className='fw-bold fs-2'>Follow us on</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/bit-box-community" target='blank'><FaLinkedin color="#0077b5" fontSize="2rem" />Linkedin</a></li>
              <li><a href="https://twitter.com/BITBOX688152" target='_blank-1'><FaTwitter color="#1da1f2" fontSize="2rem" />Twitter</a></li>
              <li><a href="https://github.com/bitboxcommunity" target='_blank-2'><FaGithub color="#211F1F" fontSize="2rem" />GitHub</a></li>
              {/* <li><a href="https://www.facebook.com/bit-box-community" target='blank-3'><FaFacebookSquare color="#3b5998" fontSize="2rem" />Facebook</a></li> */}
              <li><a href="https://www.youtube.com/channel/UCXUTdcw27jaH_go9iyUjJnA" target='_blank-3'><FaYoutube color="red" fontSize="2rem" />Youtube</a></li>
            </ul >
          </div >
        </div >
      </div >

    <div className="copy-right">
      <h4 className='copy-content'>© 2024 Bitbox.&nbsp; Made with 🤍 by Bitbox India.&nbsp; All rights reserved.</h4>
    </div>

    </footer >
  )
}

Footer.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default Footer;
