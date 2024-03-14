import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faDiscord, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons from the brands category
function Footer() {
  return (
    <footer>
      <div className='Container'>
        <div className='About_us'>
          <div className='About_note'>
            <Link to="/">
              <h1>Kaiyuan <span className='code'>Code</span></h1>
            </Link>
            <p className='project-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quae, magnam odit dignissimos necessitatibus
              saepe harum quod tempore minus.</p>
            <Link to="/">Explore more</Link>
          </div>
        </div>
        <div className="new_Details">
          <h3>About Kaiyuan</h3>
          <div className='Detail'>
            <ul>
              <li><Link to="/contactus">Contact us</Link></li>
              <li><Link to='/codeofconduct'>Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        <div className="Legal">
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/asoc">ASOC</Link></li>
              <li><Link to="/upliftproject">Uplift project</Link></li>
            </ul>
          </div>
        </div>
        <div className="social">
          <div>
            <h4>Follow us on</h4>
            <ul>
              <li><Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</Link></li>
              <li><Link to="/"><FontAwesomeIcon icon={faDiscord} /> Discord</Link></li>
              <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
              <li><Link to="/"><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
              <li><Link to="/"><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <h4 className='copy-content'>© 2024 Open Source. Made with ❤️ by Jitendra, Harshit & Anuj. All rights reserved.</h4>
      </div>

    </footer>
  )
}

export default Footer;
