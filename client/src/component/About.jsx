import "../css/About.css";
import PropTypes from "prop-types";
// import { useEffect } from "react";
import img1 from "../assets/images/Anuj.png";
import img2 from "../assets/images/Jitendra.png";
import img3 from "../assets/images/Harshit.png";
import AboutImgHero from "../assets/images/Others/heroimg.png";
import "@fortawesome/fontawesome-free/css/all.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {Contri} from './Contributers'
// import { Link } from "react-router-dom";

export default function About(props) {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var bootstrap;
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  popoverList; // Necessary code, but suppressed the warning for unused variable

  // const [visitorsCount, setVisitorsCount] = useState(100000); // Initial count of visitors

  // useEffect(() => {
  //   // Increment visitors count when component mounts (new user visits)
  //   setVisitorsCount(prevCount => prevCount + 1);
  // }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div className="mt-14">
      {/* About Main Section */}
      <div
        className="about-content container mx-auto px-4 py-16 h-auto min-h-[100vh]"
        style={{
          background: props.mode === "dark" ? "#121212" : "#ffffff",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <section className="about-main-section flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Section */}
          <div
            className="about-content-left lg:w-1/2 space-y-6"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
              About Us
            </h2>
            <p className="about-section-desc w-full lg:w-4/5 mx-auto text-sm lg:text-base leading-relaxed fs-4">
              Bitbox is like a friendly community where people working on
              projects can come together. If you’re stuck or need advice, you
              can ask for help. And if you know something, you can share your
              knowledge with others. It’s all about supporting each other and
              building a helpful community. 🌟
              <br />
              <br />
              Welcome to our open-source platform, where innovation knows no
              bounds and collaboration is key. Dive into our repository of code,
              where creativity flourishes and solutions come to life. Join our
              vibrant community of developers, enthusiasts, and visionaries as
              we build the future together, one line at a time.
            </p>
          </div>

          {/* Right Section */}
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
                <div id="card" data-aos="fade-left" data-aos-duration="1300">
                  <img src={AboutImgHero} id="propmpt" alt="aboutVectorImg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Team Section */}
      <div className="Team-Sec">
        <div className="px-[2.5rem] m-0 text-center">
          <div className="team-content">
            <h2 data-aos="zoom-in" data-aos-duration="1400">
              <div className="text-5xl">
                Our{" "}
                <span className="!bg-gradient-to-r from-cyan-500 to-blue-500 !bg-clip-text !text-transparent ">
                  Team
                </span>
              </div>
            </h2>
            <div className="team-grid container ">
              {/* card 1 */}
              <div
                className="team-card"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-delay="100"
              >
                <div
                  className="team-text"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  <b>Anuj Verma</b> is a tech-savvy person who loves working
                  with AI and building websites. He&apos;s gained experience
                  through internships and projects, showing that he&apos;s ready
                  to do great things in the tech world.
                </div>
                <div className="team-avatar">
                  <img src={img1} />
                </div>
                <div className="team-details">
                  <h3
                    className="team-name"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    <b>Anuj Verma</b>
                  </h3>
                  <p
                    className="team-desc"
                    style={{ color: props.mode === "dark" ? "white" : "#777" }}
                  >
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/Anuj3553"
                        className="text-decoration-none d-block px-1"
                        target="blank"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href=""
                        className="text-decoration-none d-block px-1"
                        target="blank-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/anuj.verma_official/?next=%2F"
                        className="text-decoration-none d-block px-1"
                        target="blank-2"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://linkedin.com/in/anuj-verma-67493125a/"
                        className="text-decoration-none d-block px-1"
                        target="blank-3"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* card 2 */}
              <div
                className="team-card"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-delay="300"
              >
                <div
                  className="team-text"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  <b>Jitendra Kumar</b>: Tech enthusiast skilled in web
                  development and database management, showcasing expertise in
                  projects like weather app and algorithm analyzer, poised for
                  impactful contributions in the tech industry.
                </div>
                <div className="team-avatar">
                  <img src={img2} />
                </div>
                <div className="team-details">
                  <h3
                    className="team-name"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    <b>Jitendra Kumar</b>
                  </h3>
                  <p
                    className="team-desc"
                    style={{ color: props.mode === "dark" ? "white" : "#777" }}
                  >
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/technical-jitendra"
                        className="text-decoration-none d-block px-1"
                        target="blank"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="text-decoration-none d-block px-1"
                        target="blank-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/jitendra_technical_?igsh=MTR1cXEzeDNjejJxag=="
                        className="text-decoration-none d-block px-1"
                        target="blank-2"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/technicaljitendra"
                        className="text-decoration-none d-block px-1"
                        target="blank-3"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* card 3  */}
              <div
                className="team-card"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-delay="500"
              >
                <div
                  className="team-text"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  <b>Harshit Singh</b>: Entry-level software engineer skilled in
                  C, C++, Python, HTML, CSS, and JavaScript. Eager to leverage
                  abilities in problem-solving and project development for
                  organizational growth.
                </div>
                <div className="team-avatar">
                  <img src={img3} />
                </div>
                <div className="team-details">
                  <h3
                    className="team-name"
                    style={{ color: props.mode === "dark" ? "white" : "black" }}
                  >
                    <b>Harshit Singh</b>
                  </h3>
                  <p
                    className="team-desc"
                    style={{ color: props.mode === "dark" ? "white" : "#777" }}
                  >
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/harshit7492"
                        className="text-decoration-none d-block px-1"
                        target="blank-3"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/HarshitSin56914"
                        className="text-decoration-none d-block px-1"
                        target="blank-2"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/thakurharshit9462/"
                        className="text-decoration-none d-block px-1"
                        target="blank-1"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/harshit-singh8"
                        className="text-decoration-none d-block px-1"
                        target="blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No of Visitors */}

      <div className="Team-Sec">
        <div className="visitors-container">
          <div className="visitors-content">
            <h2 className="Heading-Page" data-aos="zoom-in">
              Visitors
            </h2>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-3 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  data-aos-delay="100"
                >
                  <div className="counter">
                    <div className="counter-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span
                      className="counter-value"
                      style={{
                        color: props.mode === "dark" ? "white" : "#555",
                      }}
                    >
                      876K+
                    </span>
                    <h3>VisitorCount</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  data-aos-delay="300"
                >
                  <div className="counter blue">
                    <div
                      className="counter-icon"
                      style={{
                        color: props.mode === "dark" ? "white" : "#4accdb",
                      }}
                    >
                      {/* <i className="fa fa-youtube"></i> */}
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </div>
                    <span
                      className="counter-value"
                      style={{
                        color: props.mode === "dark" ? "white" : "#555",
                      }}
                    >
                      876K+
                    </span>
                    <h3
                      style={{
                        color: props.mode === "dark" ? "white" : "#4accdb",
                      }}
                    >
                      Registrations
                    </h3>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  data-aos-delay="500"
                >
                  <div className="counter">
                    <div className="counter-icon">
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <span
                      className="counter-value"
                      style={{
                        color: props.mode === "dark" ? "white" : "#555",
                      }}
                    >
                      876K+
                    </span>
                    <h3>Participants</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  data-aos-delay="700"
                >
                  <div className="counter blue">
                    <div
                      className="counter-icon"
                      style={{
                        color: props.mode === "dark" ? "white" : "#4accdb",
                      }}
                    >
                      {/* <i className="fa fa-rocket"></i> */}
                      <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <span
                      className="counter-value"
                      style={{
                        color: props.mode === "dark" ? "white" : "#555",
                      }}
                    >
                      828K+
                    </span>
                    <h3
                      style={{
                        color: props.mode === "dark" ? "white" : "#4accdb",
                      }}
                    >
                      Total Projects
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="accordion-container">
        <div className="faq-container max-w-4xl mx-auto px-6 py-10">
          <h2
            className={`faq-heading text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 ${props.mode}===dark? text-black`}
          >
            <span
              className={`${
                props.mode === "dark"
                  ? "text-black"
                  : "highlight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
              }`}
            >
              Frequently Asked Questions
            </span>
          </h2>
          <div
            className={`faq-list divide-y divide-gray-300 dark:divide-gray-700 ${props.mode}===dark? text-black`}
          >
            {[
              {
                question:
                  "Will a beginner, with absolutely no knowledge of GitHub, gain anything fruitful?",
                answer:
                  "Absolutely! This program is designed to guide beginners, with projects and support for all experience levels.",
              },
              {
                question: "Are there any charges for registration?",
                answer:
                  "No, participating in this program is entirely free with no hidden costs.",
              },
              {
                question:
                  "Is there a specific age requirement for participation?",
                answer:
                  "There are no age restrictions! People of all ages are welcome to join and contribute.",
              },
              {
                question: "What are the project requirements?",
                answer:
                  "Projects are open-ended, allowing mentors to share ideas in their fields of expertise without restrictions.",
              },
              {
                question:
                  "As a beginner, where should we begin to contribute effectively to projects?",
                answer:
                  "The resources on our website, including GitHub links and tutorials, will help you contribute effectively.",
              },
            ].map((item, index) => (
              <div key={index} className="faq-item py-4">
                <button
                  onClick={() =>
                    document
                      .getElementById(`answer${index}`)
                      .classList.toggle("hidden")
                  }
                  className={`question-btn w-full text-left text-lg font-semibold text-gray-900 dark:text-black flex justify-between items-center focus:outline-none ${props.mode}===dark? text-black`}
                >
                  <span className={`${props.mode}==="dark" ? text-black`}>
                    {item.question}
                  </span>
                  <i
                    className={`fa fa-chevron-down transition-transform duration-300 ${props.mode}==="dark" ? text-black`}
                  ></i>
                </button>
                <p
                  id={`answer${index}`}
                  className={`faq-answer hidden mt-2 text-grey-700 dark:text-black transition-all ${props.mode}===dark ? text-black`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Info */}
      {/* <div className="info">
          <p className='fs-4'>&quot;Open source is a shared vision of building a community of similar -minded individuals. Together, we collaborate, innovate, and shape the future of technology with transparency and inclusivity at its core  write in more effective way&quot;</p>
        </div> */}
    </div>
  );
}

// Props Validation
About.propTypes = {
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
};
