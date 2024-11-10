import "../css/Navbar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AddProject from "./AddProject";
import logo from "../assets/images/logo.png";
import avatarDropdown from "../assets/images/Dropdown/avatar.png";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import axios from "axios";

function Navbar(props) {
  const { showAlert, mode } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser, userLoggedIn, setUserLoggedIn } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false); // State to keep track of whether page has been scrolled
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  // State to control the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsSidebarOpen((prev) => !prev);
    document.body.classList.toggle("no-scroll", !isSidebarOpen);
  };

  const style = { color: "white", fontSize: "1.5em" };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        // Adjust for your breakpoint
        setIsSidebarOpen(false);
        document.body.classList.remove("no-scroll");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        setIsScrolled(true);
        navbar.classList.add("sticky");
      } else {
        setIsScrolled(false);
        navbar.classList.remove("sticky");
      }
    }

    if (window.pageYOffset >= sticky) {
      setIsScrolled(true);
      navbar.classList.add("sticky");
    }

    return () => {
      window.onscroll = null; // Cleanup function
    };
  }, []);

  const renderUploadButton = () => {
    if (location.pathname === "/myprofile") {
      return <AddProject mode={mode} showAlert={showAlert} />;
    }
    return null;
  };

  const handleLogout = async () => {
    try {
      doSignOut();
      localStorage.removeItem("token");
      setUserLoggedIn(false)
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  // };

  // User Profile Image
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

  const [profileImage, setProfileImage] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `${VITE_SERVER_PORT}/api/auth/getuser`,
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        setProfileImage(response.data.image);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Sticky Navbar */}
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg ${
          isSidebarOpen ? "sticky" : ""
        } navbar-${mode === "dark" ? "dark" : "light"}`}
        style={{
          backgroundColor: mode === "dark" ? "black" : "white",
          borderBottom: "1px solid white",
          position: "fixed", // Fixed positioning
          top: 0,
          width: "100%",
          zIndex: 1000, // Ensure navbar appears above other content
        }}
      >
        {/* Hamburger icon */}
        <div
          className={`w-full gap-[1rem] visible navbar-collapse rnav ${
            isOpen ? "show" : ""
          }`}
          style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
        >
          <Link
            className="navbar-brand flex justify-center items-center fs-2 fw-bold font-monospace"
            to="/"
          >
            <img
              className="w-[3.5rem] mx-1 md:mx-3 rounded-full transition-transform transform rotate-0 hover:rotate-180 duration-1000 ease-in-out"
              src={logo}
              alt="logo"
            />
            <div
              className={`logoTitle md:block hidden ${
                props.mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              {props.title}
            </div>
          </Link>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              isOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 fw-medium menu2">
              <li className="nav-item fs-6 fw-medium">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  {props.home}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  {props.about}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${
                    location.pathname === "/community" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/community"
                >
                  {props.community}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${
                    location.pathname === "/discussion" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/discussion"
                >
                  {props.discussion}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/blog"
                >
                  {props.blog}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contributors" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/contributors"
                >
                  {props.contributors}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Links */}
          <form className="flex fs-4 fw-medium justify-center items-center">
            {localStorage.getItem("token") || userLoggedIn ? (
              <>
                <ul className="navbar-nav">
                  <div className="Navbar-Btn-Group">
                    {/* Add Project */}
                    <li>{renderUploadButton()}</li>

                    {/* User Profile */}
                    <li
                      className="nav-item dropdown mx-2"
                      style={{
                        background: props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      <a
                        className="nav-link profile-img"
                        href="#"
                        id="navbarScrollingDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={
                            currentUser?.photoURL ||
                            profileImage ||
                            avatarDropdown
                          }
                          className="avatar img-circle"
                          alt="avatar"
                        />
                      </a>
                      {/* User DropDown Option */}
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarScrollingDropdown"
                        style={{
                          backgroundColor:
                            props.mode === "dark" ? "black" : "white",
                          borderBottom:
                            props.mode === "dark"
                              ? "1px solid white"
                              : "1px solid black",
                          outline:
                            props.mode === "dark"
                              ? "2px solid white"
                              : "2px solid black",
                        }}
                      >
                        <li>
                          <Link
                            to="/myprofile"
                            style={{
                              color: props.mode === "dark" ? "white" : "black",
                            }}
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/editprofile"
                            style={{
                              color: props.mode === "dark" ? "white" : "black",
                            }}
                          >
                            Edit Profile
                          </Link>
                        </li>
                        <li>
                          <hr
                            className="dropdown-divider"
                            style={{
                              backgroundColor:
                                props.mode === "dark" ? "black" : "white",
                              borderBottom:
                                props.mode === "dark"
                                  ? "1px solid white"
                                  : "1px solid black",
                              outline:
                                props.mode === "dark"
                                  ? "2px solid black"
                                  : "2px solid white",
                            }}
                          />
                        </li>
                        <li>
                          <Link
                            role="button"
                            to="/login"
                            onClick={handleLogout}
                            style={{
                              color: props.mode === "dark" ? "white" : "black",
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </>
            ) : (
              // Login and Signup Button
              <div
                className="flex justify-between items-center space-x-2 collapse"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem", // add some space between the buttons
                  flexWrap: "nowrap", // prevent wrapping
                }}
              >
                <Link
                  role="button"
                  to="/login"
                  className="btn loginbtn mx-2  h-10 "
                  style={{
                    height: "45px",
                    color: props.mode === "dark" ? "white" : "white",
                  }}
                >
                  Login
                </Link>
                <Link
                  role="button"
                  to="/signup"
                  className="btn loginbtn mx-2  h-10 "
                  style={{
                    height: "45px",
                    color: props.mode === "dark" ? "white" : "white",
                  }}
                >
                  Signup
                </Link>
                <div className="darkThemeBtn flex justify-content-center">
                  <input
                    id="darkmode-toggle"
                    type="checkbox"
                    checked={props.mode === "dark"}
                    onChange={props.toggleMode}
                  />
                  <label htmlFor="darkmode-toggle">
                    <FaSun className="sun" style={style} />
                    <FaMoon
                      className="moon"
                      style={{
                        color: props.mode === "dark" ? "yellow" : "gray",
                        fontSize: "1.5rem",
                      }}
                    />
                  </label>
                  <span className="fake-body"></span>
                </div>
              </div>
            )}
            {/* Sidebar Toggle Button */}
            {/* Toggle Dark Mode */}

            
            
                <div className="mobile-dark-theme">

                <div className="darkThemeBtn flex justify-content-center">
                  <input
                    id="darkmode-toggle"
                    type="checkbox"
                    checked={props.mode === "dark"}
                    onChange={props.toggleMode}
                  />
                  <label htmlFor="darkmode-toggle">
                    <FaSun className="sun" style={style} />
                    <FaMoon
                      className="moon"
                      style={{
                        color: props.mode === "dark" ? "yellow" : "gray",
                        fontSize: "1.5rem",
                      }}
                    />
                  </label>
                  <span className="fake-body"></span>
                </div>
                </div>
              
              <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 6.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            
          </form>
        </div>

        {/* Sidebar for Smaller devices */}
        <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
        >
          <ul className="sidebar-links">
            <li>
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                style={{ color: `${props}` }}
              >
                {props.home}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)}>
                {props.about}
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={() => setIsSidebarOpen(false)}>
                {props.community}
              </Link>
            </li>
            <li>
              <Link to="/discussion" onClick={() => setIsSidebarOpen(false)}>
                {props.discussion}
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsSidebarOpen(false)}>
                {props.blog}
              </Link>
            </li>
            <li>
              <Link to="/myprofile" onClick={() => setIsSidebarOpen(false)}>
                {props.profile}
              </Link>
            </li>

            {localStorage.getItem("token") ? (
              <>
                {/* Add Project */}
                <li>{renderUploadButton()}</li>

                {/* User Profile */}

                {/* User DropDown Option */}

                <li>
                  <Link
                    to="/myprofile"
                    style={{
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/editprofile"
                    style={{
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                  >
                    Edit Profile
                  </Link>
                </li>

                <li>
                  <Link
                    role="button"
                    to="/login"
                    onClick={handleLogout}
                    style={{
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    role="button"
                    to="/login"
                    className=""
                    style={{
                      height: "45px",
                      color: props.mode === "dark" ? "white" : "white",
                    }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    role="button"
                    to="/signup"
                    className=""
                    style={{
                      height: "45px",
                      color: props.mode === "dark" ? "white" : "white",
                    }}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(true)}
          style={{ display: isOpen ? "block" : "none" }}
        >
          Menu
        </button>
      </nav>
    </div>
  );
}

// Props Validation
Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  community: PropTypes.string,
  discussion: PropTypes.string,
  blog: PropTypes.string,
  about: PropTypes.string,
  profile: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default Navbar;
