import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import PropTypes from 'prop-types';
import image1 from '../assets/images/Anuj.jpg'
import image2 from '../assets/images/jitendra.jpeg'
import image3 from '../assets/images/harshit.jpeg'
import aboutImg from '../assets/images/Vector Gif/About.gif'
import arrowGif from '../assets/images/Other Gifs/down-arrow-gif.gif'

const Home = () => {
    // const { showAlert } = props;
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about");
    }
    return (
        <div>
            <div className="Landing-Page">
                <div className="container">
                    {/* Welcome Page */}
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
                        <div className="arrow-gif">
                            <img src={arrowGif} alt="arrowGif" />
                        </div>
                    </div>
                </div>
                {/* Carousel Home Page */}
                <div className="Container-Carousel">
                    <h2 className='text-center Heading-Page'>Our Contributor</h2>
                    <section className='my-4 mx-2'>
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image1} className="d-block m-auto UserImg" alt="img1" />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={image2} className="d-block m-auto UserImg" alt="img2" />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={image3} className="d-block m-auto UserImg" alt="img3" />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p> */}
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            <div className="Cards-Page">
                <section className='Card-Info-Sec'>
                    <h2 className='Heading-Page text-center'>Be a part of Kaiyuan Community</h2>
                    <div className="Card-Infos">
                        <div className="Card-Info-Row1">
                            <div className="Card-Info">
                                <h3>Special title treatment</h3>
                                <p>supporting text below as a natural lead-in to additional content.</p>
                                <button className='btn-box my-2'><a href="">Apply as contributor</a></button>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="Card-Info">
                                <h3>Special title treatment</h3>
                                <p>supporting text below as a natural lead-in to additional content.</p>
                                <button className='btn-box my-2'><a href="">Apply as contributor</a></button>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="Card-Info-Row2">
                            <div className="Card-Info">
                                <h3>Special title treatment</h3>
                                <p>supporting text below as a natural lead-in to additional content.</p>
                                <button className='btn-box my-2'><a href="">Apply as contributor</a></button>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="Card-Info">
                                <h3>Special title treatment</h3>
                                <p>supporting text below as a natural lead-in to additional content.</p>
                                <button className='btn-box my-2'><a href="">Apply as contributor</a></button>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="About-Container">
                    <section className='About-Sec'>
                        <h2 onClick={() => goToAbout()} className='Heading-Page text-center About-head-text'>About us</h2>
                        <div data-aos="fade-down" className="hero__image hidden lg:block aos-init aos-animate">
                            <div className="Tilt">
                                <div className="about-gif">
                                    <img src={aboutImg} alt="about-image" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="Special-Sec">
                    <h1 className='text-center'>What We Works</h1>
                    <div className="special-row1">
                        <div className="special-cont1">
                            <div className="special-box1"></div>
                        </div>
                        <div className="special-cont2">
                            <div className="special-box2"></div>
                        </div>
                        <div className="special-cont3">
                            <div className="special-box3"></div>
                        </div>
                        <div className="special-cont4">
                            <div className="special-box4"></div>
                        </div>
                    </div>

                    <div className="special-row2">
                        <div className="special-cont1">
                            <div className="special-box1"></div>
                        </div>
                        <div className="special-cont2">
                            <div className="special-box2"></div>
                        </div>
                        <div className="special-cont3">
                            <div className="special-box3"></div>
                        </div>
                        <div className="special-cont4">
                            <div className="special-box4"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// Props Vadilation
Home.propTypes = {
    showAlert: PropTypes.func,
};

export default Home