import "../css/Navbar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import AddProject from "./AddProject";
import logo from "../assets/images/logo.png";
import avatarDropdown from "../assets/images/Dropdown/avatar.png";
import { auth } from "../component/Firebase/Setup";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

function Navbar(props) {
  const { showAlert, mode } = props;
  const VITE_SERVER_PORT =
    import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false); // State to keep track of whether page has been scrolled
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
      await auth.signOut(); // Sign out the user
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
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          isScrolled ? "sticky" : ""
        } navbar-${props.mode === "dark" ? "dark" : "light"}`}
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          borderBottom: "1px solid white",
        }}
        id="navbar"
      >
        {/* Hamburger icon */}
        <button
          className="navbar-toggler lg:hidden"
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

        {/* Navbar Content */}
        <div
          className={`navbar-collapse rnav w-full ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:justify-center`}
          style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
        >
          {/* Logo and Title */}
          <Link
            className="navbar-brand flex justify-center items-center fs-2 fw-bold font-monospace"
            to="/"
          >
            <img
              className="mx-3 logoImg w-[3.5rem] h-[3.5rem] rounded-full transition-transform transform rotate-0 hover:rotate-180 duration-1000 ease-in-out"
              src={logo}
              alt="logo"
            />
            <div
              className={`logoTitle hidden md:block ${
                props.mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              {props.title}
            </div>
          </Link>

          {/* Navbar Links */}
          <div className="flex-grow">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 fw-medium flex flex-col lg:flex-row items-center lg:gap-5">
              {[
                { label: props.home, path: "/" },
                { label: props.about, path: "/about" },
                { label: props.community, path: "/community" },
                { label: props.discussion, path: "/discussion" },
              ].map((item, index) => (
                <li key={index} className="nav-item fs-4">
                  <Link
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <form className="flex fs-4 fw-medium items-center gap-4">
            {/* Toggle Dark Mode */}
            <div className="darkThemeBtn flex justify-center items-center mx-2">
              <input
                id="darkmode-toggle"
                type="checkbox"
                checked={props.mode === "dark"}
                onChange={props.toggleMode}
              />
              <label htmlFor="darkmode-toggle">
                <FaSun
                  className="sun"
                  style={{ color: props.mode === "dark" ? "white" : "orange" }}
                />
                <FaMoon
                  className="moon"
                  style={{ color: props.mode === "dark" ? "yellow" : "gray" }}
                />
              </label>
            </div>

            {!localStorage.getItem("token") ? (
              <div className="flex items-center gap-2">
                <Link
                  role="button"
                  to="/login"
                  className="btn loginbtn"
                  style={{ color: "white" }}
                >
                  Login
                </Link>
                <Link
                  role="button"
                  to="/signup"
                  className="btn loginbtn"
                  style={{ color: "white" }}
                >
                  Signup
                </Link>
              </div>
            ) : (
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
                          props.mode === "dark" ? "1.8px solid white" : "",
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
                    backgroundColor: props.mode === "dark" ? "black" : "white",
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </form>
        </div>
      </nav>

      {/* Sidebar for smaller devices */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
      >
        <button
          className="close-btn"
          onClick={() => setIsSidebarOpen(false)}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Close
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsSidebarOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/community" onClick={() => setIsSidebarOpen(false)}>
              Community
            </Link>
          </li>
          <li>
            <Link to="/discussion" onClick={() => setIsSidebarOpen(false)}>
              Discussion
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsSidebarOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

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
  BlogPage: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default Navbar;
