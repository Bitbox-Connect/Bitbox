import './main.css';
import { Link } from 'react-router-dom';
import { SiLinktree } from "react-icons/si";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaTwitter,FaYoutube } from 'react-icons/fa';

const Contactus = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="Heading-Page text-dark text-center font-weight-bold">Contact Us</h1>
        <header className="navbar header justify-content-center ">
          <div className="bind text-center">
            <img className="image-bx" src="1658093029050.jpg" alt="img" />
            <h2> @Open-Source </h2>
          </div>
          <div className="share">
            <a href="#" className="share-btn"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a>
          </div>
        </header>
        <div className="cnt1">
          <div className="soft">
            <pre> <h4 className='text-center'>Software Developer | Web Developer | Content Creator </h4> </pre>
          </div>
        </div>
        <div className="box">
          <div className="list">
            <ul>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">YouTube</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">GitHib</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Discord</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Telegram</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Snapchat</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Insta</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
            </ul>
            <div className="end">
              <div className="bx-end d-flex justify-content-center">
                <h4 className="bx-enditem">
                  <ul className='d-flex gap-5'>
                    <li><Link to="/"><FaLinkedin color="#0077b5" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaTwitter color="#1da1f2" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaGithub color="#211F1F" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaInstagram color="#c13584" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaFacebookSquare color="#3b5998" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaYoutube color="red" size={30} /></Link></li>
                  </ul>
                </h4>
              </div>
            </div>
            <h1 className='name'>Linktree <SiLinktree color="orange" fontSize="5rem"/></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
