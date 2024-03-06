import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AddProject from './AddProject';
import logo from '../assets/images/logo.png'
import './Navbar.css'
function Navbar(props) {
    const navigate = useNavigate();
    let location = useLocation();
    const { showAlert } = props;

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex" to="/">
                        <img className='mx-2' src={logo} alt="logo" />
                        {props.title}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {!localStorage.getItem('token') ? <form className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/community' ? 'active' : ""}`} aria-current="page" to="/community">{props.community}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} aria-current="page" to="/about">{props.about}</Link>
                            </li>
                        </form> :
                            <form className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} aria-current="page" to="/">{props.home}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/community' ? 'active' : ""}`} aria-current="page" to="/community">{props.community}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/myProjects' ? 'active' : ""}`} aria-current="page" to="/myProjects">{props.myProjects}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} aria-current="page" to="/about">{props.about}</Link>
                                </li>
                            </form>}

                        {!localStorage.getItem('token') ? <form className='d-flex'>
                            <Link role="button" to='/login' className="btn btn-primary mx-1">Login</Link>
                            <Link role="button" to='/signup' className="btn btn-primary mx-1">Signup</Link>
                        </form > :
                            <form className='d-flex'>
                                <AddProject showAlert={showAlert} />
                                <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                            </form>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Props Vadilation
Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    community: PropTypes.string,
    myProjects: PropTypes.string,
    about: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Navbar;
