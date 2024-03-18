import './About.css';
import img1 from '../assets/images/Anuj.jpg';
import img2 from '../assets/images/jitendra.jpeg';
import img3 from '../assets/images/harshit.jpeg';
import aboutImg from '../assets/images/Vector Gif/About.gif'
import aboutImg1 from '../assets/images/Vector Gif/R.gif'
import aboutImg2 from '../assets/images/Vector Gif/tenor.gif'
import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/5Wvz1ugKqCUUG9YH/scene.splinecode');
  }, []);
  return (
    <div className='About-Sec-Container'>
      <div className="about">
        <div className='About-Page1'>
          <div className="left-page">
            <h1>About us</h1>
            Kaiyuan is like a friendly community where people working on projects can come together. If you’re stuck or need advice, you can ask for help. And if you know something, you can share your knowledge with others. It’s all about supporting each other and building a helpful community.
            🌟<br /> <br />Welcome to our open-source platform, where innovation knows no bounds and collaboration is key. Dive into our repository of code, where creativity flourishes and solutions come to life. Join our vibrant community of developers, enthusiasts, and visionaries, as we build the future together, one line at a time
          </div>
          <div className="right-page" data-engine="three.js r149">
            {/* Implement by iFrame */}
            {/* <iframe className='spline3dimage' src='https://my.spline.design/miniroomcopy-ace55f908c5728b8a08a8f6348f8f7b3/' width='100%' height='100%'></iframe> */}
            {/* Implement by canvas tag -- Note -> use data-engine="three.js r149"*/}
            <canvas id='canvas3d'></canvas>
          </div>
        </div>
      </div>

      {/* Website Record Section */}
      <div className='Website-Record-Sec'>
        <div className='container-page'>
          <h2 className='Heading-Page'>Website Record</h2>
          <div className="container-bx">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No of Projects</p>
                  <p>Hover Me</p>
                  <h3 className='title'>570+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of Pull Request</p>
                  <p>Hover Me</p>
                  <h3><b>850+</b></h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg1} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Pull Request</p>
                  <p>Hover Me</p>
                  <h3 className='title'>850+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Hello</p>
                  <div className="about-gif">
                    <img src={aboutImg3} alt="about-image" />
                  </div>
                  <p>Like me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of User</p>
                  <p>Hover Me</p>
                  <h3 className='title'>870+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Happy User</p>
                  <div className="about-gif">
                    <img src={aboutImg2} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='Contributer-Section'>
        <h2 className='Heading-Page'>Our Contributer</h2>
        <div className="team">
          <div className="team-box ">
            <img src={img1} alt="OWNER" />
            <div className="teamember"><b>Anuj Verma</b></div>
          </div>
          <div className="team-box hover01">
            <img src={img3} alt="OWNER" />
            <div className="teamember"><b>Harshit Singh</b></div>
          </div>
          <div className="team-box">
            <img src={img2} alt="OWNER" />
            <div className="teamember"><b>Jitendra Kumar</b></div>
          </div>
        </div>
      </div>
      {/* <div className="info">
          <p className='fs-4'>&quot;Open source is a shared vision of building a community of similar -minded individuals. Together, we collaborate, innovate, and shape the future of technology with transparency and inclusivity at its core  write in more effective way&quot;</p>
        </div> */}
    </div>
  );
}
