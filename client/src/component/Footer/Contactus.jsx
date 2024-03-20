import '../css/main.css';
import { Link } from 'react-router-dom';
import { SiLinktree } from "react-icons/si";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaReddit, FaDiscord, FaTelegram, FaFacebook } from 'react-icons/fa';

const Contactus = () => {
  return (
    <>
      <div className="container">
        <h1 className="Heading-Page text-dark text-center font-weight-bold">Contact Us</h1>
        <header className="navbar header justify-content-center ">
          <div className="bind text-center d-flex">
            <img className="image-bx" src="https://th.bing.com/th/id/OIG4.9082tuIPKO0B2s2GNXrK?pid=ImgGn" alt="img" />
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
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Mail</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
              <h4 className="Tree-bx bg-light rounded p-2"><a href="https://www.linkedin.com/in/harshit-singh-90986b205/" className="dot1"><i className='bx bxl-linkedin' style={{ color: '#11118f' }}></i></a><a href="https://www.linkedin.com/in/harshit-singh-90986b205/">Insta</a><a href="#" className="dot"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a></h4>
            </ul>
            <div className="end">
              <div className="bx-end d-flex justify-content-center">
                <h4 className="bx-enditem">
                  <ul className='d-flex gap-5'>
                    <li><Link to="/"><FaLinkedin color="#0077b5" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaTwitter color="#1da1f2" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaGithub color="#211F1F" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaInstagram color="#c13584" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaFacebookSquare color="#3b5998" fontSize="2rem" /></Link></li>
                    <li><Link to="/"><FaYoutube color="red" fontSize="2rem" /></Link></li>
                  </ul>
                </h4>
              </div>
            </div>
            {/* <h1 className='name'>Linktree <SiLinktree color="orange" fontSize="5rem" /></h1> */}
          </div>
        </div>
        <section className='Contact-Us-Card-Sec'>
          <div className="main container">
            <div className="card">
              {/* <div className="instagram">I</div> */}
              <FaLinkedin color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              <FaInstagram color="#0077b5" fontSize="5rem" />
              <div className="twitter">I</div>

            </div>
            <div className="card">
              {/* <div className="dribble">I</div> */}

              <FaTwitter color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              {/* <div className="codepen">I</div> */}

              <FaYoutube color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              {/* <div className="uiverse">I</div> */}

              <FaReddit color="#0077b5" fontSize="5rem" />

            </div>
            <div className="card">
              {/* <div className="discord">I</div> */}

              <FaDiscord color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              <div className="github">I</div>

              <FaGithub color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              {/* <div className="telegram">I</div> */}

              <FaTelegram color="#0077b5" fontSize="5rem" />
            </div>
            <div className="card">
              {/* <div className="reddit">I</div> */}

              <FaFacebook color="#0077b5" fontSize="5rem" />
            </div>
            <h2 className='text'>Social Media  </h2>
            <div className="main_back"></div>
            <h1 className='name'>Linktree <SiLinktree color="orange" fontSize="5rem" /></h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contactus;
