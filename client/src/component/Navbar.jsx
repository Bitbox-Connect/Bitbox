import './css/Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios'
import AddProject from './AddProject';
import logo from '../assets/images/logo.png';
import avatarDropdown from '../assets/images/Dropdown/avatar.jpg';
import { auth } from '../component/Firebase/Setup';

function Navbar(props) {
    const host = "http://localhost:5000"
    const navigate = useNavigate();
    const location = useLocation();
    const { showAlert } = props;
    const [isScrolled, setIsScrolled] = useState(false); // State to keep track of whether page has been scrolled

    useEffect(() => {
        window.onscroll = function () { myFunction() };

        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                setIsScrolled(true);
                navbar.classList.add("sticky")
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
        if (location.pathname === '/myprofile') {
            return <AddProject showAlert={showAlert} />;
        }
        return null;
    };

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign out the user
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    // Avatar Profile Image 
    const [image, setImage] = useState()

    useEffect(() => {
        // Fetch initial image when component mounts
        axios.get(`${host}/getAvatarImage`)
            .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
            .catch(err => console.log(err))
    })

    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${isScrolled ? 'sticky' : ''}`} id='navbar'>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <Link className="navbar-brand d-flex fs-2 fw-bold font-monospace" to="/">
                            <img className='mx-3' style={{ width: "3rem" }} src={logo} alt="logo" />
                            <div className="logoTitle">
                                {props.title}
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-3 fw-medium" style={{ position: "absolute", left: "40%" }}>
                                <li className="nav-item fs-4 fw-medium">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">{props.home}</Link>
                                </li>
                                <li className="nav-item fs-4">
                                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current="page" to="/about">{props.about}</Link>
                                </li>
                                <li className="nav-item fs-4">
                                    <Link className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`} aria-current="page" to="/community">{props.community}</Link>
                                </li>
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
                                                    {image ? (
                                                        <img src={image} style={{ width: "3.2rem", height: "3.2rem" }} alt="avatar" />
                                                    ) : (
                                                        <img
                                                            src={avatarDropdown}
                                                            className="avatar img-circle"
                                                            alt="avatar"
                                                        />
                                                    )}
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                                    <li><a className="dropdown-item" href="/myprofile">My Profile</a></li>
                                                    <li><a className="dropdown-item" href="/editprofile">Edit Profile</a></li>
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
    isAuthenticated: PropTypes.bool,
};

export default Navbar;
