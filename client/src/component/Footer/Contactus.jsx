import './main.css';
import { Link } from 'react-router-dom';
import { SiLinktree } from "react-icons/si";
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaTwitter,FaYoutube } from 'react-icons/fa';

const Contactus = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
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
                    <li><Link to="/"><FaTwitter color="#1da1f2" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaGithub color="#211F1F" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaInstagram color="#c13584" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaFacebookSquare color="#3b5998" fontSize="2rem"/></Link></li>
                    <li><Link to="/"><FaYoutube color="red" fontSize="2rem" /></Link></li>
                  </ul>
                </h4>
              </div>
            </div>
            <h1 className='name'>Linktree <SiLinktree color="orange" fontSize="5rem"/></h1>
          </div>
        </div>  
      </div>
    </div>
    {/* <div class="main">
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
    <path d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z" fill="url(#paint0_linear_501_142)"></path>
    <path d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z" fill="url(#paint1_linear_501_142)"></path>
    <path d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z" fill="url(#paint2_linear_501_142)"></path>
    <defs>
    <linearGradient id="paint0_linear_501_142" x1="0" y1="0" x2="96.1684" y2="87.6201" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BF66FF"></stop>
    <stop offset="0.510417" stop-color="#6248FF"></stop>
    <stop offset="1" stop-color="#00DDEB"></stop>
    </linearGradient>
    <linearGradient id="paint1_linear_501_142" x1="0" y1="0" x2="96.1684" y2="87.6201" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BF66FF"></stop>
    <stop offset="0.510417" stop-color="#6248FF"></stop>
    <stop offset="1" stop-color="#00DDEB"></stop>
    </linearGradient>
    <linearGradient id="paint2_linear_501_142" x1="0" y1="0" x2="96.1684" y2="87.6201" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BF66FF"></stop>
    <stop offset="0.510417" stop-color="#6248FF"></stop>
    <stop offset="1" stop-color="#00DDEB"></stop>
    </linearGradient>
    </defs>
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <div class="card">
  <FaLinkedin color="#0077b5" fontSize="2rem" />
  </div>
  <h2 className='text'>Social Media  </h2>
  <div class="main_back"></div>
</div> */}
    </>
  );
}

export default Contactus;
