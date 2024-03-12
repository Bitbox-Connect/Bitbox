import './Contactus.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faDiscord, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons from the brands category

const Contactus = () => {
  return (
    <>
      <div className="containers">
        <div className="container">
          <h1 className=" text-warning text-center font-weight-bold">Contact Us</h1>
          <header className="navbar">
            <div className="bind">
              <img className="image-bx" src="1658093029050.jpg" alt="img" />
              <h2> @Open-Source </h2>
            </div>
            <div className="share">
              <a href="#" className="share-btn"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a>
            </div>
          </header>
          <div className="cnt">
            <div className="image-bx"><img src="1658093029050.jpg" className="image21" alt="img" /></div>
            <div className="soft">
              <pre> <h4>Software Developer | Web Developer
                |Content Creator </h4> </pre>
            </div>
          </div>
          <div className="box">
            <div className="list">
              <ul>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
                <h4 className="bx-item"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Linkedin</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>

              </ul>
              <div className="end">
                <div className="bx-end">
                  <h4 className="bx-enditem">
                    <ul>
                      <li><Link to="/"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                      <li><Link to="/"><FontAwesomeIcon icon={faDiscord} /> </Link></li>
                      <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /> </Link></li>
                      <li><Link to="/"><FontAwesomeIcon icon={faInstagram} /> </Link></li>
                      <li><Link to="/"><FontAwesomeIcon icon={faFacebook} /> </Link></li>
                    </ul>
                    {/* <a href="#"><i className='bx bxl-linkedin' style={{ color: '#3811e7' }} ></i></a> */}

                  </h4>
                </div>
              </div>
              <h1>linktree</h1>
              <footer>Copy righted</footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Contactus
