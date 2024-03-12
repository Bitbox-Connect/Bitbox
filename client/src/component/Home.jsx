import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/images/project.png'
import './Home.css'

const Home = () => {
    // const { showAlert } = props;
    return (
        <div>
            <div className="container">
                <div className="welcome-page">
                    <div className="info">
                        <h1 className='text-center'>Finally, All your Team&apos;s <br /> work in one place </h1>
                    </div>
                    <p className='abut'>&quot;Welcome to our open-source platform, where innovation knows no bounds and collaboration is key.&quot;<br />
                        Join us on this exhilarating journey of exploration and discovery, where every line of code written is a step forward in shaping a brighter tomorrow.</p>
                    <div className="btn-group d-flex justify-content-center align-item-center">
                        <Link role="button" to='/signup' className="button-color1">Signup</Link>
                        <Link role="button" to='/login' className="button-color2">Login</Link>
                    </div>
                </div>
                <section>
                    <div className="imagetest">
                        <img className='image' src="src\assets\images\project.png" />
                        <img className='image' src="src\assets\images\project.png" />
                        <img className='image' src="src\assets\images\project.png" />
                        <img className='image' src="src\assets\images\project.png" />
                    </div>
                </section>
            </div>
        </div>
    )
}

// Props Vadilation
Home.propTypes = {
    showAlert: PropTypes.func,
};

export default Home
