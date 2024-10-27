import "../css/Navbar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import AddProject from "./AddProject";
import logo from "../assets/images/logo.png";
import avatarDropdown from "../assets/images/Dropdown/avatar.png";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

function Navbar(props) {
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";
  const { showAlert, mode } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = useAuth()
  const { userLoggedIn } = useAuth();
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false); // State to keep track of whether page has been scrolled
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const style = { color: "white", fontSize: "1.5em" };

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
      doSignOut()
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Avatar Profile Image
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(`${VITE_SERVER_PORT}/getAvatarImage`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setImage(res.data[res.data.length - 1].image); // Fetch the last uploaded image
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Sticky Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "sticky" : ""
          } navbar-${props.mode === "dark" ? "dark" : "light"}`}
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          borderBottom: "1px solid white",
        }}
        id="navbar"
      >
        {/* Hamburger icon */}
        <div
          className={`w-full gap-[1rem] visible navbar-collapse rnav ${isOpen ? "show" : ""}`}
          style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
        >
          <Link
            className="navbar-brand flex justify-center items-center fs-2 fw-bold font-monospace"
            to="/"
          >
            <img
              className="md:w-[3.5rem] mx-4 md:mx-3 rounded-full transition-transform transform rotate-0 hover:rotate-180 duration-1000 ease-in-out"
              src={logo}
              alt="logo"
            />
            <div
              className={`logoTitle md:block hidden ${props.mode === "dark" ? "text-white" : "text-black"}`}
            >
              {props.title}
            </div>
          </Link>
          <div
            className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0 gap-3 fw-medium menu2"
            >
              <li className="nav-item fs-6 fw-medium">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  {props.home}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  aria-current="page"
                  to="/about"
                >
                  {props.about}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${location.pathname === "/community" ? "active" : ""}`}
                  aria-current="page"
                  to="/community"
                >
                  {props.community}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${location.pathname === "/discussion" ? "active" : ""}`}
                  aria-current="page"
                  to="/discussion"
                >
                  {props.discussion}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
                  aria-current="page"
                  to="/blog"
                >
                  {props.blog}
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className={`nav-link ${location.pathname === "/myprofile" ? "active" : ""}`}
                  aria-current="page"
                  to="/myprofile"
                >
                  {props.profile}
                </Link>
              </li>
            </ul>
          </div>

          <form className="flex fs-4 fw-medium">
            {!localStorage.getItem("token") ? (
              <>
                <ul className="navbar-nav">
                  <div className="Navbar-Btn-Group">
                    {/* Toggle Dark Mode */}
                    <div className="mx-2">
                      <div className="my-body">
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
                                color:
                                  props.mode === "dark" ? "yellow" : "gray", // Change colors based on mode
                                fontSize: "1.5rem",
                              }}
                            />
                          </label>
                          <span className="fake-body"></span>
                        </div>
                      </div>
                    </div>
                    {/* Login and Signup Buttons */}
                    {userLoggedIn == false ?
                      <>
                        <Link
                          role="button"
                          to="/login"
                          className="btn loginbtn mx-2  h-10 "
                          style={{ height: "45px", color: "white" }}
                        >
                          Login
                        </Link>
                        <Link
                          role="button"
                          to="/signup"
                          className="btn loginbtn mx-2  h-10 "
                          style={{ height: "45px", color: "white" }}
                        >
                          Signup
                        </Link>
                      </>
                      :
                      <>
                        {/* Add Project */}
                        {renderUploadButton()}

                        {/* User Profile */}
                        <div className="relative w-16 flex justify-center">
                          {/* Placeholder image if user.picture is not available */}
                          <img
                            src={currentUser.photoURL || 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729036800&semt=ais_hybrid'}
                            className="useremailbutton  rounded-full w-12 bg-black  cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            alt="User Profile"
                          />

                          {/* Information box */}
                          <div
                            className={`absolute accountBox bg-gray-800 top-16 -right-24 py-2 pr-10 pl-2 text-start rounded-lg font-normal ${isHovered ? 'block' : 'hidden'
                              }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <span className="text-gray-200 text-sm">Bitbox Account</span>
                            <br />
                            <span className="text-gray-400 text-sm">{currentUser.displayName}</span>
                            <br />
                            <span className="text-gray-400 text-sm">{currentUser.email}</span>
                          </div>
                        </div>

                        <Link
                          role="button"
                          to="/signup"
                          className="btn loginbtn mx-2  h-10 "
                          style={{ height: "45px", color: "white" }}
                          onClick={handleLogout}
                        >
                          Signout
                        </Link>
                      </>
                    }
                    <button
                      className="navbar-toggler block lg:hidden ml-1 focus:outline-none"
                      type="button"
                      onClick={toggleSidebar}
                      aria-controls="navbarNavDropdown"
                      aria-expanded={isSidebarOpen}
                      aria-label="Toggle navigation"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav">
                  <div className="Navbar-Btn-Group">
                    {/* Add Project */}
                    {/* {renderUploadButton()} */}

                    {/* Toggle Dark Mode */}
                    <div>
                      <div className="my-body">
                        <div className="darkThemeBtn flex justify-content-center">
                          <input
                            id="darkmode-toggle"
                            type="checkbox"
                            checked={props.mode === "dark"}
                            onChange={props.toggleMode}
                          />
                          <label htmlFor="darkmode-toggle">
                            <FaSun
                              className="sun"
                              style={{
                                color:
                                  props.mode === "dark" ? "white" : "orange", // Change color for dark mode
                                fontSize: "1.5rem",
                                marginRight: "8px",
                              }}
                            />
                            <FaMoon
                              className="moon"
                              style={{
                                color:
                                  props.mode === "dark" ? "yellow" : "gray", // Change color for light mode
                                fontSize: "1.5rem",
                              }}
                            />
                          </label>
                          <span className="fake-body"></span>
                        </div>
                      </div>
                    </div>
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
                        {image ? (
                          <img
                            src={image}
                            style={{
                              width: "3.2rem",
                              height: "3.2rem",
                              outline:
                                props.mode === "dark"
                                  ? "1.8px solid white"
                                  : "",
                            }}
                            alt="avatar"
                          />
                        ) : (
                          <img
                            src={avatarDropdown}
                            className="avatar img-circle"
                            alt="avatar"
                          />
                        )}
                      </a>
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
                          <Link to="/myprofile">My Profile</Link>
                        </li>
                        <li>
                          <Link to="/editprofile">Edit Profile</Link>
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
                      </ul>
                    </li>
                  </div>
                </ul>
              </>
            )}
          </form>
        </div>
      </nav>

      {/* Sidebar for Smaller devices */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
      >
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>{props.home}</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsSidebarOpen(false)}>{props.about}</Link>
          </li>
          <li>
            <Link to="/community" onClick={() => setIsSidebarOpen(false)}>{props.community}</Link>
          </li>
          <li>
            <Link to="/discussion" onClick={() => setIsSidebarOpen(false)}>{props.discussion}</Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsSidebarOpen(false)}>{props.blog}</Link>
          </li>
          <li>
            <Link to="/myprofile" onClick={() => setIsSidebarOpen(false)}>{props.profile}</Link>
          </li>
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
