import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useRef } from 'react';
import PropTypes from 'prop-types';
import image1 from '../assets/images/Anuj.png'
import image2 from '../assets/images/Jitendra.png'
import image3 from '../assets/images/Harshit.png'
import aboutImg from '../assets/images/Vector Gif/About.gif'
import arrowGif from '../assets/images/Other Gifs/down-arrow-gif.gif'

const Home = () => {
    // const { showAlert } = props;
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about");
    }
    const ContributorRef = useRef(null); // Create a ref for the "Our Contributor" section

    const goToContributor = () => {
        // Smooth scroll to the "Our Contributor" section
        ContributorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
                            {/* <Link role="button" to='/signup' className="button-color1">Signup</Link> */}
                            {/* <Link role="button" to='/login' className="button-color2">Login</Link> */}
                        </div>
                        <div className="arrow-gif" onClick={goToContributor}>
                            <img src={arrowGif} alt="arrowGif" />
                        </div>
                    </div>
                </div>
                {/* Carousel Home Page */}
                <div className="Container-Carousel" ref={ContributorRef}>
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
                                <h3>Start your journey</h3>
                                <p>Participating in GSSoC’23 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="Card-Info">
                                <h3>Inviting Projects & NGOs</h3>
                                <p>If you are an organization with a project idea in mind, a website or an app then this is the golden opportunity to become a part of an awesome community. The budding developers under the guidance of expert mentors will work on your projects and strive to achieve the best version. Apply and let’s collaborate together because Together Everyone Achieves More</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="Card-Info-Row2">
                            <div className="Card-Info">
                                <h3>Lead the pack</h3>
                                <p>Mentors are the experts and take the lead of the open-source project team. They guide the fellow participants at each stage in a road map of the project. They are the backbone of team and are available throughout the summer to review the pull requests and suggest betterment. Apply to be a mentor at Girlscript summer of code and be the foundation of your team.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="Card-Info">
                                <h3>Add your shade to GSSoC’23</h3>
                                <p>Sponsors with their precious resources make it possible for GirlScript to conduct the entire event smoothly, to encourage talent by enabling us to give perks to our top participants. Hence as a token of gratitude, we provide great publicity on our social platforms and exposure on media about our sponsors. Sponsor us to add a bright shade to our program.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="About-Container">
                    <section className='About-Sec'>
                        <h2 onClick={() => { goToAbout(); scrollToTop(); }} className='Heading-Page text-center About-head-text'>About us</h2>
                        <div className="about-gif">
                            <img src={aboutImg} alt="about-image" />
                        </div>
                    </section>
                </div>

                <div className="Special-Sec">
                    <h2 className='Heading-Page text-center'>What We Works</h2>
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