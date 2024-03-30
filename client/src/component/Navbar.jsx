import './css/Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddProject from './AddProject';
import logo from '../assets/images/logo.png';
import avatarDropdown from '../assets/images/Dropdown/avatar.jpg';

function Navbar(props) {
    const navigate = useNavigate();
    let location = useLocation();
    const { showAlert } = props;
    const [isScrolled, setIsScrolled] = useState(false); // State to keep track of whether page has been scrolled

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                setIsScrolled(true); // Set state to true when page is scrolled down
                navbar.classList.add("sticky")
            } else {
                setIsScrolled(false); // Set state to false when page is scrolled up
                navbar.classList.remove("sticky");
            }
        }

        // Check if page is already scrolled down when component mounts
        if (window.pageYOffset >= sticky) {
            setIsScrolled(true);
            navbar.classList.add("sticky");
        }
    }, []);

    // Conditionally render the Upload button only when on the "My Projects" route
    const renderUploadButton = () => {
        if (location.pathname === '/myProjects') {
            return <AddProject showAlert={showAlert} />;
        }
        return null;
    };

    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${isScrolled ? 'sticky' : ''}`} id='navbar'>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <Link className="navbar-brand d-flex fs-2 fw-bold font-monospace" to="/">
                            <img className='mx-3' style={{ width: "3rem" }} src={logo} alt="logo" />
                            {props.title}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 fw-medium">
                                <li className="nav-item fs-4 fw-medium">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">{props.home}</Link>
                                </li>
                                <li className="nav-item fs-4">
                                    <Link className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`} aria-current="page" to="/community">{props.community}</Link>
                                </li>
                                <li className="nav-item fs-4">
                                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current="page" to="/about">{props.about}</Link>
                                </li>
                                <li className="nav-item fs-4">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Profile</Link>
                                </li>
                                {localStorage.getItem('token') ?
                                    <li className="nav-item text-xl fs-4">
                                        <Link className={`nav-link ${location.pathname === '/myProjects' ? 'active' : ''}`} aria-current="page" to="/myProjects">{props.myProjects}</Link>
                                    </li>
                                    :
                                    <></>
                                }
                            </ul>

                        </div>
                        <form className="d-flex fs-4 fw-medium">
                            {!localStorage.getItem('token') ?
                                <>
                                    <ul className="navbar-nav">
                                        <div className="Navbar-Btn-Group">
                                            <Link role="button" to='/login' className="Navbar-Btn mx-2">Login</Link>
                                            <Link role="button" to='/signup' className="Navbar-Btn mx-2">Signup</Link>
                                        </div>
                                    </ul>
                                </>
                                :
                                <>
                                    <ul className="navbar-nav">
                                        <div className="Navbar-Btn-Group">
                                            {/* Add Project */}
                                            {renderUploadButton()}
                                            <li className="nav-item dropdown mx-2">
                                                <a className="nav-link profile-img" href="#" id="navbarScrollingDropdown" role="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={avatarDropdown} alt="" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                                    <li><a className="dropdown-item" href="#">Help</a></li>
                                                    <li><a className="dropdown-item" href="#">Setting</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a className="dropdown-item" onClick={handleLogout} href="#">Logout</a></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </>
                            }
                        </form>
                    </div >
                </div>
            </nav>
        </div>
    );
}

// Props Validation
Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    community: PropTypes.string,
    myProjects: PropTypes.string,
    about: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Navbar;
