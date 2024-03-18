import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <div className='Container'>
        <div className='About_us'>
          <div className='About_note'>
            <Link to="/">
              <h1>Kaiyuan <span className='code'>Code</span></h1>
            </Link>
            <p className='project-info fs-5'>"is for university students to work on open-source projects, 
            pairing them with mentors to gain practical coding experience, 
            contribute to real-world projects, and foster collaboration within 
            the open-source community."</p>
            <Link to="/" className='fs-5'>Explore more</Link>
          </div>
        </div>
        <div className="new_Details m-4">
          <h3 className='fs-2 fw-bold'>About Kaiyuan</h3>
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
              <li><Link to="/asoc">ASOC</Link></li>
              <li><Link to="/upliftproject">Uplift project</Link></li>
            </ul>
          </div>
        </div>
        <div className="social m-4">
          <div className='fs-5'>
            <h3 className='fw-bold fs-2'>Follow us on</h3>
            <ul>
                    <li><Link to="/"><FaLinkedin color="#0077b5" fontSize="2rem" />Linkedin</Link></li>
                    <li><Link to="/"><FaTwitter color="#1da1f2" fontSize="2rem"/>Twiiter</Link></li>
                    <li><Link to="/"><FaGithub color="#211F1F" fontSize="2rem"/>GitHub</Link></li>
                    {/* <li><Link to="/"><FaInstagram color="#c13584" fontSize="2rem"/></Link></li> */}
                    <li><Link to="/"><FaFacebookSquare color="#3b5998" fontSize="2rem"/>Facebook</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <h4 className='copy-content'>© 2024 Open Source. Made with ❤️ by Jitendra, Harshit & Anuj.&nbsp; All rights reserved.</h4>
      </div>

    </footer>
  )
}

export default Footer;
