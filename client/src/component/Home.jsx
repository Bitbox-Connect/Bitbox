import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/images/project.png'
import './Home.css'

const Home = () => {
    // const { showAlert } = props;
    return (
        <div>
            <div className="container">
                <div className="info">
                    <h1>Finally, All your Team's <br />
                        work in one place </h1>
                </div>
                <p className='abut'>"Welcome to our open-source platform, where innovation knows no bounds and collaboration is key." <br />
                Join us on this exhilarating journey of exploration and discovery, where every line of code written is a step forward in shaping a brighter tomorrow.</p>
                <div className="btn-group d-flex justify-content-center align-item-center">
                    <Link role="button" to='/signup' className="btn-color">Signup</Link>
                    <Link role="button" to='/login' className="btn-color">Login</Link>
                </div>
                <section>
                  <div class="imagetest">
                    <img className='image' src="src\assets\images\project.png"/>
                    <img className='image' src="src\assets\images\project.png"/>
                    <img className='image' src="src\assets\images\project.png"/>
                    <img className='image' src="src\assets\images\project.png"/>

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
