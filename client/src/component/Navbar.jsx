import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AddProject from './AddProject';
import './Navbar.css'
function Navbar(props) {
    let location = useLocation();
    const { showAlert } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/yourProjects' ? 'active' : ""}`} aria-current="page" to="/yourProjects">{props.yourProjects}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} aria-current="page" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <AddProject showAlert={showAlert} />
                            <Link role="button" to='/login' className="btn btn-primary mx-1">Login</Link>
                            <Link role="button" to='/signup' className="btn btn-primary mx-1">Signup</Link>
                        </form>
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
    yourProjects: PropTypes.string,
    about: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Navbar;
