import "./css/About.css";
import PropTypes from 'prop-types';
// import { useEffect } from "react";
import img1 from "../assets/images/Anuj.png";
import img2 from "../assets/images/Jitendra.png";
import img3 from "../assets/images/Harshit.png";
import AboutImgHero from "../assets/images/Others/heroimg.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div>
      {/* About Hero Section */}
      <div className="about-content">
        <section className="about-main-section">
          <div className="about-content-left">
            <h2 className="Heading-Page">About Us</h2>
            <div className="about-section-desc fs-4">
              Bitbox is like a friendly community where people working on
              projects can come together. If you’re stuck or need advice, you
              can ask for help. And if you know something, you can share your
              knowledge with others. It’s all about supporting each other and
              building a helpful community. 🌟
              <br /> <br />
              Welcome to our open-source platform, where innovation knows no
              bounds and collaboration is key. Dive into our repository of
              code, where creativity flourishes and solutions come to life.
              Join our vibrant community of developers, enthusiasts, and
              visionaries, as we build the future together, one line at a time
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
      {/* Website Record Section */}

      {/* Team Section */}
      <div className="Team-Sec">
        <div className="team-container">
          <div className="team-content">
            <h2 className="Heading-Page">
              Our Team
            </h2>
            <div className="team-grid container ">
              {/* card 1 */}
              <div className="team-card">
                <div className="team-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                  Anuj Verma is a tech-savvy person who loves working with AI and building websites. He's gained experience through internships and projects, showing that he's ready to do great things in the tech world.
                </div>
                <div className="team-avatar">
                  <img src={img1} />
                </div>
                <div className="team-details">
                  <h3 className="team-name" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    Anuj Verma
                  </h3>
                  <p className="team-desc" style={{ color: props.mode === 'dark' ? 'white' : '#777' }}>
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://github.com/Anuj3553" className="text-decoration-none d-block px-1" target="blank"><i className="fab fa-github"></i></a></li>
                    <li className="list-inline-item"><a href="" className="text-decoration-none d-block px-1" target="blank-1"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/anuj.verma_official/?next=%2F" className="text-decoration-none d-block px-1" target="blank-2"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://linkedin.com/in/anuj-verma-67493125a/" className="text-decoration-none d-block px-1" target="blank-3"><i className="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* card 2 */}
              <div className="team-card">
                <div className="team-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                Jitendra Kumar: Tech enthusiast skilled in web development and database management, showcasing expertise in projects like weather app and algorithm analyzer, poised for impactful contributions in the tech industry.
                </div>
                <div className="team-avatar">
                  <img src={img2} />
                </div>
                <div className="team-details">
                  <h3 className="team-name" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    Jitendra Kumar
                  </h3>
                  <p className="team-desc" style={{ color: props.mode === 'dark' ? 'white' : '#777' }}>
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://github.com/technical-jitendra" className="text-decoration-none d-block px-1" target="blank"><i className="fab fa-github"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1" target="blank-1"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/jitendra_technical_?igsh=MTR1cXEzeDNjejJxag==" className="text-decoration-none d-block px-1" target="blank-2"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/technicaljitendra" className="text-decoration-none d-block px-1" target="blank-3"><i className="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* card 3  */}
              <div className="team-card">
                <div className="team-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                  Harshit Singh: Entry-level software engineer skilled in C, C++, Python, HTML, CSS, and JavaScript. Eager to leverage abilities in problem-solving and project development for organizational growth.
                </div>
                <div className="team-avatar">
                  <img src={img3} />
                </div>
                <div className="team-details">
                  <h3 className="team-name" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    Harshit Singh
                  </h3>
                  <p className="team-desc" style={{ color: props.mode === 'dark' ? 'white' : '#777' }}>
                    BTech CSE AIML <br /> 3rd Year
                  </p>
                </div>
                <div className="team-links">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://github.com/harshit7492" className="text-decoration-none d-block px-1" target="blank-3"><i className="fab fa-github"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/HarshitSin56914" className="text-decoration-none d-block px-1" target="blank-2"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/thakurharshit9462/" className="text-decoration-none d-block px-1" target="blank-1"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/harshit-singh8" className="text-decoration-none d-block px-1" target="blank"><i className="fab fa-linkedin"></i></a></li>
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
            <h2 className="Heading-Page">
              Visitors
            </h2>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="counter">
                    <div className="counter-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span className="counter-value" style={{ color: props.mode === 'dark' ? 'white' : '#555' }}>876K+</span>
                    <h3>VisitorCount</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter blue">
                    <div className="counter-icon" style={{ color: props.mode === 'dark' ? 'white' : '#4accdb' }}>
                      {/* <i className="fa fa-youtube"></i> */}
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </div>
                    <span className="counter-value" style={{ color: props.mode === 'dark' ? 'white' : '#555' }}>876K+</span>
                    <h3 style={{ color: props.mode === 'dark' ? 'white' : '#4accdb' }}>Registrations</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter">
                    <div className="counter-icon">
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <span className="counter-value" style={{ color: props.mode === 'dark' ? 'white' : '#555' }}>876K+</span>
                    <h3>Participants</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter blue">
                    <div className="counter-icon" style={{ color: props.mode === 'dark' ? 'white' : '#4accdb' }}>
                      {/* <i className="fa fa-rocket"></i> */}
                      <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <span className="counter-value" style={{ color: props.mode === 'dark' ? 'white' : '#555' }}>828K+</span>
                    <h3 style={{ color: props.mode === 'dark' ? 'white' : '#4accdb' }}>Total Projects</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="accordion-container">

        <div className="faq-section">
          <div className="container">
            <h2 className="Heading-Page mb-3">Frequent Asked Questions</h2>
            <section>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      Will a beginner, with absolutely no knowledge of github, gain
                      anything fruitful?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body fs-5" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      Yeah, definitely. The organization is meant to assist the
                      beginners grow in the field of development. We’ll have distinct
                      projects appropriate both for beginners as well as the accolades
                      and thereby we’ll make sure that each and every participant gets
                      to learn something new from the projects he or she is
                      contributing for.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      Are there any charges for registration?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body fs-5" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      No, there are no fees associated with participation. It is completely free of charge.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      Is there a specific age requirement for participation?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body fs-5" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      No, there are no age restrictions for joining GSSoC. All age groups are welcome to participate.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      What are the project requirements?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body fs-5" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      Projects are not bound by specific conditions. Mentors can propose ideas in their areas of expertise without restriction.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseive" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      As a beginner, where should we begin to contribute effectively to projects?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body fs-5" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                      You can kickstart your journey by accessing the resources available on our official website. We offer links to GitHub and other development tools to ensure that everyone can contribute effectively to the projects.
                    </div>
                  </div>
                </div>
              </div>
            </section>
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