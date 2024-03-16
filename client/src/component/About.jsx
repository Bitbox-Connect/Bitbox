import img1 from '../assets/images/Anuj.jpg';
import img2 from '../assets/images/jitendra.jpeg';
import img3 from '../assets/images/harshit.jpeg';
import aboutImg from '../assets/images/Vector Gif/About.gif'
import aboutImg1 from '../assets/images/Vector Gif/R.gif'
import aboutImg2 from '../assets/images/Vector Gif/tenor.gif'
import aboutImg3 from '../assets/images/Vector Gif/Happy.gif'


import './About.css';

export default function About() {
  return (
    <div className='about-sec-container'>
      <h1 className='Heading-Page text-center'>About Us</h1>
      <div className="about">
        <h2 className='mb-4 mt-2 text-center'>Kaiyuan</h2>
        <div className='intro'>
          Kaiyuan is like a friendly community where people working on projects can come together. If you’re stuck or need advice, you can ask for help. And if you know something, you can share your knowledge with others. It’s all about supporting each other and building a helpful community.
          🌟<br /> <br />Welcome to our open-source platform, where innovation knows no bounds and collaboration is key. Dive into our repository of code, where creativity flourishes and solutions come to life. Join our vibrant community of developers, enthusiasts, and visionaries, as we build the future together, one line at a time
        </div>
      </div>
      <section className='container-page'>
        <section>
          <h2>Website Record</h2>
          <div className="container-bx">
            <div className="visitors">
              <h3>All Projects</h3>
              <div className="about-gif">
                <img src={aboutImg} alt="about-image" />
              </div>
              <h3><b>150+</b></h3>
            </div>
            <div className="visitors">
              <h3>Pull Requests</h3>
              <div className="about-gif">
                <img src={aboutImg1} alt="about-image" />
              </div>
              <h3><b>570+</b></h3>
            </div>
            <div className="visitors">
              <h3>Happy User</h3>
              <div className="about-gif">
                <img src={aboutImg3} alt="about-image" />
              </div>
              <h3><b>50+</b></h3>
            </div>
            <div className="visitors">
              <h3>No. of User</h3>
              <div className="about-gif">
                <img src={aboutImg2} alt="about-image" />
              </div>
              <h3><b>850+</b></h3>
            </div>
          </div>
        </section>
        <section>

          <h2>Our Contributer</h2>
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
        </section>
        <div className="info">
          <p className='fs-4'>&quot;Open source is a shared vision of building a community of similar -minded individuals. Together, we collaborate, innovate, and shape the future of technology with transparency and inclusivity at its core  write in more effective way&quot;</p>
        </div>
      </section>
    </div>
  );
}