import { Link } from 'react-router-dom';
import './css/Footer.css';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
function Footer() {
  return (
    <footer>
      <div className='footer-container'>
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
        <div className="new_Details m-4">
          <h3 className='fs-2 fw-bold'>About Bitbox</h3>
          <div className='Detail'>
            <ul className='fs-5'>
              <li><Link to="/contactus">Contact us</Link></li>
              <li><Link to='/codeofconduct'>Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        <div className="Legal m-4">
          <div>
            <h3 className='fs-2 fw-bold'>Legal</h3>
            <ul className='fs-5'>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/termofuse">Terms of use</Link></li>
            </ul>
          </div>
        </div>
        <div className="social m-4">
          <div className='fs-5'>
            <h3 className='fw-bold fs-2'>Follow us on</h3>
            <ul>
              <li><Link to="/"><FaLinkedin color="#0077b5" fontSize="2rem" />Linkedin</Link></li>
              <li><Link to="/"><FaTwitter color="#1da1f2" fontSize="2rem" />Twiiter</Link></li>
              <li><Link to="/"><FaGithub color="#211F1F" fontSize="2rem" />GitHub</Link></li>
              <li><Link to="/"><FaFacebookSquare color="#3b5998" fontSize="2rem" />Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <h4 className='copy-content'>© 2024 Bitbox.&nbsp; Made with 🤍 by Bitbox India.&nbsp; All rights reserved.</h4>
      </div>

    </footer>
  )
}

export default Footer;
