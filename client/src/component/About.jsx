import "./css/About.css";
import PropTypes from "prop-types";
import img1 from "../assets/images/Anuj.png";
import img2 from "../assets/images/Jitendra.png";
import img3 from "../assets/images/Harshit.png";
import AboutImgHero from "../assets/images/Others/heroimg.png";
import "@fortawesome/fontawesome-free/css/all.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About(props) {
  return (
    <div
      style={{
        background: props.mode === "dark" ? "#121212" : "#ffffff",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      {/* About Hero Section */}
      <div className="about-content">
        <section className="about-main-section">
          <div className="about-content-left">
            <h2 className="Heading-Page"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
            
            >About Us</h2>
            <div
              className="about-section-desc fs-4" /*Fixed this about section for light mode and also for all
              the text down in the about section (by anothercode-nik) */
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            > 
              Bitbox is like a friendly community where people working on
              projects can come together. If you’re stuck or need advice, you
              can ask for help. And if you know something, you can share your
              knowledge with others. It’s all about supporting each other and
              building a helpful community. 🌟
              <br /> <br />
              Welcome to our open-source platform, where innovation knows no
              bounds and collaboration is key. Dive into our repository of code,
              where creativity flourishes and solutions come to life. Join our
              vibrant community of developers, enthusiasts, and visionaries, as
              we build the future together, one line at a time.
            </div>
          </div>
          <div className="about-right-page" data-engine="three.js r149">
            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                  <img src={AboutImgHero} id="propmpt" alt="aboutVectorImg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <div className="Team-Sec">
        <div className="team-container">
          <div className="team-content">
            <h2 className="Heading-Page"
            style={{
              color: props.mode === "dark" ? "white" : "black",/*fixed this dark mode issue*/ 
            }}>Our Team</h2>
            <div className="team-grid container">
              {/* Team Member Cards */}
              {[
                {
                  name: "Anuj Verma",
                  description:
                    "Anuj Verma is a tech-savvy person who loves working with AI and building websites. He’s gained experience through internships and projects, showing that he’s ready to do great things in the tech world.",
                  img: img1,
                  github: "https://github.com/Anuj3553",
                  twitter: "",
                  instagram:
                    "https://www.instagram.com/anuj.verma_official/?next=%2F" ,
                  linkedin: "https://linkedin.com/in/anuj-verma-67493125a/",
                },
                {
                  name: "Jitendra Kumar",
                  description:
                    "Tech enthusiast skilled in web development and database management, showcasing expertise in projects like weather app and algorithm analyzer, poised for impactful contributions in the tech industry.",
                  img: img2,
                  github: "https://github.com/technical-jitendra",
                  twitter: "#",
                  instagram:
                    "https://www.instagram.com/jitendra_technical_?igsh=MTR1cXEzeDNjejJxag==",
                  linkedin: "https://www.linkedin.com/in/technicaljitendra",
                },
                {
                  name: "Harshit Singh",
                  description:
                    "Entry-level software engineer skilled in C, C++, Python, HTML, CSS, and JavaScript. Eager to leverage abilities in problem-solving and project development for organizational growth.",
                  img: img3,
                  github: "https://github.com/harshit7492",
                  twitter: "https://twitter.com/HarshitSin56914",
                  instagram: "https://www.instagram.com/thakurharshit9462/",
                  linkedin: "https://www.linkedin.com/in/harshit-singh8",
                },
              ].map((member, index) => (
                <div className="team-card" key={index}>
                  <div
                    className="team-text"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    {member.description}
                  </div>
                  <div className="team-avatar">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="team-details">
                    <h3
                      className="team-name"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="team-desc"
                      style={{
                        color: props.mode === "dark" ? "white" : "#777",
                      }}
                    >
                      BTech CSE AIML <br /> 3rd Year
                    </p>
                  </div>
                  <div className="team-links">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a
                          href={member.github}
                          className="text-decoration-none d-block px-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={member.twitter}
                          className="text-decoration-none d-block px-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={member.instagram}
                          className="text-decoration-none d-block px-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={member.linkedin}
                          className="text-decoration-none d-block px-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visitors Section */}
      <div className="Team-Sec">
        <div className="visitors-container">
          <div className="visitors-content">
            <h2 className="Heading-Page"
            style={{
              color: props.mode === "dark" ? "white" : "black", /*fixed this dark mode issue*/ 
            }}>Visitors</h2>
            <div className="container">
              <div className="row">
                {[
                  { value: "876K+", label: "VisitorCount", icon: faUser },
                  { value: "876K+", label: "Registrations", icon: faCoffee },
                  { value: "876K+", label: "Participants", icon: faUser },
                  { value: "828K+", label: "Total Projects", icon: faCoffee },
                ].map((visitor, index) => (
                  <div className="col-md-3 col-sm-6" key={index}>
                    <div
                      className="counter"
                      style={{
                        color: props.mode === "dark" ? "white" : "#555",
                      }}
                    >
                      <div
                        className="counter-icon"
                        style={{
                          color: props.mode === "dark" ? "white" : "#4accdb",
                        }}
                      >
                        <FontAwesomeIcon icon={visitor.icon} />
                      </div>
                      <span
                        className="counter-value"
                        style={{
                          color: props.mode === "dark" ? "white" : "#555",
                        }}
                      >
                        {visitor.value}
                      </span>
                      <h3
                        style={{
                          color: props.mode === "dark" ? "white" : "#4accdb",
                        }}
                      >
                        {visitor.label}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
About.propTypes = {
  mode: PropTypes.string.isRequired, /*fixed the prop validation issue*/ 
};
