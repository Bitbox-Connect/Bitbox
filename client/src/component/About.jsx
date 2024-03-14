import img1 from '../assets/images/Anuj.jpeg';
import img2 from '../assets/images/jitendra.jpeg';
import img3 from '../assets/images/harshit.jpeg';
import './About.css';

export default function About() {
  return (
    <div className='container'>
      <h1 className='text-center'>About Us</h1>
      <div className="about">
        <h2 className='mb-4 mt-2'>Kaiyuan</h2>
        <div className='intro'>
          Kaiyuan is like a friendly community where people working on projects can come together. If you’re stuck or need advice, you can ask for help. And if you know something, you can share your knowledge with others. It’s all about supporting each other and building a helpful community.
          🌟<br /> <br />Welcome to our open-source platform, where innovation knows no bounds and collaboration is key. Dive into our repository of code, where creativity flourishes and solutions come to life. Join our vibrant community of developers, enthusiasts, and visionaries, as we build the future together, one line at a time
        </div>
      </div>

      <div className="visitors">
        <h2>website Record</h2>

        <h3>Happy User</h3>
        <h3>No of User</h3>
        <h3>No of Projects</h3>
        <h3>No of Pull Requests</h3>
      </div>

      <div className="team">
        <div className="team-box">
          <img src={img1} alt="OWNER" />
          <div className="teamember"><b>Anuj Verma</b></div>
        </div>

        <div className="team-box">
          <img src={img3} alt="OWNER" />
          <div className="teamember"><b>Harshit Singh</b></div>
        </div>
        <div className="team-box">
          <img src={img2} alt="OWNER" />
          <div className="teamember"><b>Jitendra Kumar</b></div>
        </div>

      </div>
      <div className="info"><p>lsfxsfsxc  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium facere quis enim numquam minima, sint unde maiores minus suscipit nulla aut at cupiditate natus porro sapiente. Obcaecati earum sapiente vitae!</p></div>
    </div>
  );
}