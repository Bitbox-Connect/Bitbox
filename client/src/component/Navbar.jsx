import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AddProject from './AddProject';
// import { useEffect, useRef } from 'react';
import './Navbar.css'
function Navbar(props) {
    // const ref = useRef(null)
    // useEffect(() => {
    //     ref.current.style.backgroundColor = "lightgray"
    // })
    let location = useLocation();
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
                        {/* <button type="button" className="btn btn-secondary mx-2">Upload</button> */}
                        {/* <div className='uploadPro' ref={ref}>
                            <AddProject />
                        </div> */}
                        <AddProject />
                        <button type="button" className="btn btn-primary mx-2">Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    yourProjects: PropTypes.string,
    about: PropTypes.string,
};

export default Navbar;
