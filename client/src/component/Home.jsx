import { useNavigate } from 'react-router-dom';
import './css/Home.css'
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
                        <p className='abut fs-5'>&quot;Welcome to our open-source platform, where innovation knows no bounds and collaboration is key.&quot;<br />
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
                <div className='Technology-Sec'>
                    <div className="Technology-Container">
                        <h2 className='Heading-Page'>Our Technology</h2>
                        <div className="content">
                            <div className="benefits">
                                <div className="basic-marquee basic-marquee-1">
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* HTML */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                                                <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* CSS */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                                                <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>databases-and-servers/databases/mongodb</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs>

                                                </defs>
                                                <g id="databases-and-servers/databases/mongodb" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fillRule="nonzero" stroke="#134514" strokeWidth="2">
                                                        <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">

                                                        </rect>
                                                    </g>
                                                    <g id="Group" transform="translate(25.000000, 11.000000)" fillRule="nonzero">
                                                        <path d="M12.4944775,50.7282275 L11.1460449,50.2673438 C11.1460449,50.2673438 11.3107227,43.3929395 8.8434082,42.8996191 C7.19912598,40.9915674 9.10717773,-38.0181006 15.0277344,42.6362061 C15.0277344,42.6362061 12.9881543,43.6556396 12.6263623,45.3993701 C12.2314209,47.1099512 12.4944775,50.7282275 12.4944775,50.7282275 Z" id="Shape" fill="#A6A385">

                                                        </path>
                                                        <path d="M13.218418,44.0837305 C13.218418,44.0837305 25.0274512,36.320708 22.2639307,20.1698145 C19.5998584,8.42743652 13.3171533,4.57889648 12.6263623,3.0985791 C11.8699854,2.04599609 11.1460449,0.204243164 11.1460449,0.204243164 L11.6397217,32.8667529 C11.6397217,32.8999023 10.6199316,42.8664697 13.2187744,44.0840869" id="Shape" fill="#499D4A">

                                                        </path>
                                                        <path d="M10.4556104,44.5111084 C10.4556104,44.5111084 -0.629838867,36.9455566 0.0281591797,23.624126 C0.653007813,10.3023389 8.48161621,3.75657715 9.99472656,2.57246582 C10.9817236,1.51988281 11.0145166,1.12494141 11.080459,0.0723583984 C11.77125,1.55267578 11.6397217,22.209751 11.7381006,24.6435596 C12.0339502,34.0180713 11.2119873,42.7352979 10.4556104,44.5111084 Z" id="Shape" fill="#58AA50">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
                                                <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" />
                                                <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.31"
                                            >
                                                <path
                                                    className="cls-7"
                                                    d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                                                ></path>
                                                <path
                                                    className="cls-8"
                                                    d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* GITHUB */}
                                            <svg viewBox="0 -0.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Github-color</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs>
                                                </defs>
                                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
                                                        <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github">

                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* JS */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
                                                <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" />
                                                <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* NPM */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 10V20H9V22H16V20H32V10H0Z" fill="#CB3837" />
                                                <path d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* React */}
                                            <svg
                                                viewBox="0 -14 256 256"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
                                            >
                                                <g>
                                                    <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF">

                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* HTML */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                                                <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* CSS */}
                                            <svg
                                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                                                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                                                <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* MongoDB */}
                                            <svg
                                                viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <title>databases-and-servers/databases/mongodb</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs>

                                                </defs>
                                                <g id="databases-and-servers/databases/mongodb" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fillRule="nonzero" stroke="#134514" strokeWidth="2">
                                                        <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">

                                                        </rect>
                                                    </g>
                                                    <g id="Group" transform="translate(25.000000, 11.000000)" fillRule="nonzero">
                                                        <path d="M12.4944775,50.7282275 L11.1460449,50.2673438 C11.1460449,50.2673438 11.3107227,43.3929395 8.8434082,42.8996191 C7.19912598,40.9915674 9.10717773,-38.0181006 15.0277344,42.6362061 C15.0277344,42.6362061 12.9881543,43.6556396 12.6263623,45.3993701 C12.2314209,47.1099512 12.4944775,50.7282275 12.4944775,50.7282275 Z" id="Shape" fill="#A6A385">

                                                        </path>
                                                        <path d="M13.218418,44.0837305 C13.218418,44.0837305 25.0274512,36.320708 22.2639307,20.1698145 C19.5998584,8.42743652 13.3171533,4.57889648 12.6263623,3.0985791 C11.8699854,2.04599609 11.1460449,0.204243164 11.1460449,0.204243164 L11.6397217,32.8667529 C11.6397217,32.8999023 10.6199316,42.8664697 13.2187744,44.0840869" id="Shape" fill="#499D4A">

                                                        </path>
                                                        <path d="M10.4556104,44.5111084 C10.4556104,44.5111084 -0.629838867,36.9455566 0.0281591797,23.624126 C0.653007813,10.3023389 8.48161621,3.75657715 9.99472656,2.57246582 C10.9817236,1.51988281 11.0145166,1.12494141 11.080459,0.0723583984 C11.77125,1.55267578 11.6397217,22.209751 11.7381006,24.6435596 C12.0339502,34.0180713 11.2119873,42.7352979 10.4556104,44.5111084 Z" id="Shape" fill="#58AA50">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* GIT */}
                                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B" />
                                                <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white" />
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* NodeJS */}
                                            <svg viewBox="-13 0 282 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                                <g fill="#8CC84B">
                                                    <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />

                                                    <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />

                                                </g>

                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg viewBox="0 -20.5 256 256" xmlns="http://www.w3.org/2000/svg">

                                                <g fill="none" fillRule="evenodd">

                                                    <path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9" />

                                                    <path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5" />

                                                    <path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4" />

                                                    <path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2" />

                                                    <path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE" />

                                                    <path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE" />

                                                    <path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2" />

                                                    <path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE" />

                                                    <path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC" />

                                                    <path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548" />

                                                    <path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7" />

                                                    <path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC" />

                                                </g>

                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="#5865F2"
                                                    d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"
                                                ></path>
                                                <g data-name="å¾å± 2">
                                                    <g data-name="Discord Logos">
                                                        <path
                                                            fill="#fff"
                                                            fillRule="nonzero"
                                                            d="M368.896 153.381a269.506 269.506 0 00-67.118-20.637 186.88 186.88 0 00-8.57 17.475 250.337 250.337 0 00-37.247-2.8c-12.447 0-24.955.946-37.25 2.776-2.511-5.927-5.427-11.804-8.592-17.454a271.73 271.73 0 00-67.133 20.681c-42.479 62.841-53.991 124.112-48.235 184.513a270.622 270.622 0 0082.308 41.312c6.637-8.959 12.582-18.497 17.63-28.423a173.808 173.808 0 01-27.772-13.253c2.328-1.688 4.605-3.427 6.805-5.117 25.726 12.083 53.836 18.385 82.277 18.385 28.442 0 56.551-6.302 82.279-18.387 2.226 1.817 4.503 3.557 6.805 5.117a175.002 175.002 0 01-27.823 13.289 197.847 197.847 0 0017.631 28.4 269.513 269.513 0 0082.363-41.305l-.007.007c6.754-70.045-11.538-130.753-48.351-184.579zM201.968 300.789c-16.04 0-29.292-14.557-29.292-32.465s12.791-32.592 29.241-32.592 29.599 14.684 29.318 32.592c-.282 17.908-12.919 32.465-29.267 32.465zm108.062 0c-16.066 0-29.267-14.557-29.267-32.465s12.791-32.592 29.267-32.592c16.475 0 29.522 14.684 29.241 32.592-.281 17.908-12.894 32.465-29.241 32.465z"
                                                            data-name="Discord Logo - Large - White"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                                <div className="basic-marquee basic-marquee-2">
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <g fillRule="nonzero">
                                                    <path
                                                        fill="#07F"
                                                        d="M245.49 512h21.32c115.73 0 173.61 0 209.56-35.94 35.94-35.95 35.63-93.8 35.63-209.25v-21.62c0-115.43 0-173.3-35.63-209.25C440.73 0 382.54 0 266.81 0h-21.32C129.74 0 71.89 0 35.94 35.94 0 71.89 0 129.72 0 245.19v21.62c0 115.45 0 173.3 35.94 209.25C71.89 512 129.74 512 245.49 512z"
                                                    ></path>
                                                    <path
                                                        fill="#FEFEFE"
                                                        d="M274.75 369.15c-115.45 0-185.51-80.1-188.23-213.2h58.47c1.82 97.78 46.3 139.27 80.4 147.73V155.95h56.05v84.36c32.89-3.65 67.3-42.02 78.89-84.36h55.12c-8.83 52.08-46.29 90.46-72.79 106.29 26.5 12.81 69.14 46.31 85.58 106.91h-60.6c-12.8-40.51-44.17-71.88-86.2-76.14v76.14h-6.69z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-11"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-12"
                                                    d="M97.52,39.06A29.27,29.27,0,0,1,89,41.39a15,15,0,0,0,6.51-8.19,29.71,29.71,0,0,1-9.4,3.59,14.81,14.81,0,0,0-25.6,10.13,14.45,14.45,0,0,0,.38,3.37A42,42,0,0,1,30.41,34.82a14.86,14.86,0,0,0-2,7.44h0A14.76,14.76,0,0,0,35,54.57a14.85,14.85,0,0,1-6.71-1.84v.19A14.8,14.8,0,0,0,40.15,67.43a14.74,14.74,0,0,1-3.9.52,16.2,16.2,0,0,1-2.8-.26A14.85,14.85,0,0,0,47.28,78,29.86,29.86,0,0,1,25.35,84.1a41.92,41.92,0,0,0,22.7,6.65c27.23,0,42.13-22.56,42.13-42.12,0-.65,0-1.28,0-1.91a29.83,29.83,0,0,0,7.38-7.65h0Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <rect
                                                    fill="#FFFC00"
                                                    width="512"
                                                    height="512"
                                                    rx="105"
                                                    ry="105"
                                                ></rect>
                                                <g fillRule="nonzero">
                                                    <path
                                                        fill="#fff"
                                                        d="M424.16 341.5c-1.47-4.87-8.51-8.3-8.51-8.3v.01c-.65-.37-1.25-.67-1.76-.92-11.72-5.67-22.1-12.47-30.86-20.22-7.03-6.22-13.05-13.07-17.89-20.37-5.9-8.89-8.67-16.32-9.87-20.34-.66-2.62-.55-3.66 0-5.03.47-1.14 1.81-2.25 2.47-2.75 3.96-2.8 10.33-6.93 14.24-9.46 3.39-2.19 6.31-4.09 8.01-5.27 5.51-3.85 9.27-7.77 11.49-11.99 2.88-5.47 3.22-11.48.98-17.41-3.02-7.98-10.47-12.75-19.94-12.75-2.11 0-4.27.24-6.42.71-5.42 1.17-10.57 3.1-14.88 4.78a.472.472 0 01-.64-.46c.46-10.67.97-25-.21-38.64-1.07-12.33-3.6-22.72-7.75-31.77-4.17-9.09-9.58-15.82-13.82-20.67-4.05-4.64-11.13-11.45-21.83-17.57-15.07-8.62-32.22-12.99-50.97-12.99-18.71 0-35.84 4.37-50.92 12.98-11.33 6.47-18.57 13.79-21.88 17.58-4.24 4.85-9.64 11.58-13.81 20.67-4.15 9.05-6.69 19.44-7.75 31.77-1.19 13.66-.71 26.87-.22 38.63.02.35-.33.59-.65.47-4.3-1.68-9.46-3.61-14.87-4.78-2.15-.47-4.31-.71-6.42-.71-9.47 0-16.92 4.77-19.94 12.75-2.24 5.93-1.9 11.94.98 17.41 2.23 4.22 5.99 8.14 11.49 11.99 1.7 1.18 4.62 3.08 8.01 5.27 3.83 2.48 10.02 6.49 14 9.28.49.36 2.17 1.62 2.7 2.93.57 1.4.67 2.46-.05 5.24-1.24 4.06-4.01 11.39-9.8 20.13-4.85 7.3-10.87 14.15-17.9 20.37-8.76 7.75-19.14 14.55-30.86 20.22-.55.27-1.21.61-1.93 1.02v-.01s-7 3.58-8.32 8.2c-1.95 6.83 3.24 13.22 8.56 16.65 8.68 5.59 19.25 8.6 25.38 10.24 1.7.45 3.25.87 4.66 1.31.88.29 3.09 1.12 4.03 2.33 1.19 1.53 1.33 3.43 1.76 5.56.68 3.59 2.17 8.06 6.62 11.12 4.88 3.38 11.09 3.62 18.95 3.92 8.22.32 18.46.71 30.16 4.57 5.43 1.8 10.35 4.82 16.04 8.31 11.89 7.31 26.69 16.4 51.98 16.4 25.3 0 40.2-9.14 52.17-16.49 5.66-3.47 10.55-6.47 15.85-8.22 11.71-3.87 21.94-4.26 30.16-4.57 7.86-.3 14.07-.54 18.96-3.92 4.75-3.28 6.13-8.17 6.75-11.87.33-1.83.56-3.46 1.61-4.81.89-1.15 2.93-1.95 3.89-2.29 1.45-.45 3.05-.88 4.82-1.35 6.13-1.64 13.81-3.58 23.16-8.86 11.19-6.32 11.95-14.17 10.79-18.03z"
                                                    ></path>
                                                    <path
                                                        d="M408.78 351.17c-15.32 8.46-25.5 7.56-33.42 12.65-6.73 4.33-2.75 13.67-7.64 17.04-6 4.15-23.76-.29-46.68 7.28-18.91 6.25-30.98 24.23-65.03 24.23-34.12 0-45.83-17.89-65.02-24.23-22.93-7.57-40.68-3.13-46.69-7.28-4.88-3.37-.91-12.71-7.63-17.04-7.92-5.09-18.11-4.19-33.42-12.65-9.75-5.38-4.22-8.72-.97-10.29 55.49-26.86 64.33-68.34 64.73-71.46.48-3.72 1.01-6.65-3.1-10.45-3.96-3.66-21.55-14.54-26.42-17.95-8.08-5.63-11.63-11.27-9.01-18.19 1.8-4.78 6.29-6.59 11.01-6.59 1.47 0 2.96.18 4.4.49 8.86 1.93 17.47 6.36 22.45 7.57.68.16 1.29.24 1.83.24 2.64 0 3.58-1.34 3.4-4.37-.57-9.7-1.94-28.6-.42-46.26 2.1-24.29 9.94-36.33 19.25-46.98 4.47-5.12 25.46-27.3 65.61-27.3 40.26 0 61.15 22.18 65.62 27.3 9.31 10.65 17.15 22.69 19.24 46.98 1.53 17.66.21 36.57-.41 46.26-.21 3.19.75 4.37 3.4 4.37.54 0 1.15-.08 1.83-.24 4.98-1.21 13.58-5.64 22.45-7.57 1.44-.31 2.93-.49 4.4-.49 4.72 0 9.2 1.81 11.01 6.59 2.62 6.92-.93 12.56-9.01 18.19-4.88 3.41-22.46 14.29-26.43 17.95-4.1 3.8-3.57 6.73-3.1 10.45.4 3.12 9.25 44.6 64.74 71.46 3.25 1.57 8.78 4.91-.97 10.29zM265.06 79.91h-18.08c-17.08 1.22-32.88 5.93-47.09 14.05-12.03 6.87-20 14.55-24.58 19.78-10.99 12.57-21.52 28.35-24.12 58.45-.74 8.55-.92 17.3-.79 25.49-.75-.19-1.5-.36-2.26-.53-2.88-.63-5.79-.94-8.65-.94-13.79 0-25.2 7.48-29.75 19.53-3.29 8.69-2.75 17.93 1.51 26.01 3.02 5.74 7.85 10.88 14.77 15.7 1.84 1.29 4.69 3.14 8.3 5.48 1.95 1.26 4.8 3.11 7.6 4.95.42.3 1.93 1.4 2.43 2.45.58 1.2.6 2.49-.26 4.87-1.48 3.27-3.6 7.26-6.6 11.66-8.93 13.05-21.69 24.1-37.98 32.93-8.64 4.6-17.61 7.63-21.4 17.93-.85 2.31-1.28 4.71-1.28 7.14.01 5.77 2.45 11.69 7.55 16.93l.01-.01c2.39 2.57 5.39 4.85 9.18 6.93 8.89 4.91 16.45 7.32 22.4 8.97 1.04.31 3.46 1.1 4.52 2.02 2.65 2.32 2.27 5.81 5.8 10.91 2.13 3.18 4.6 5.34 6.62 6.74 7.4 5.11 15.72 5.43 24.52 5.77 7.96.3 16.97.65 27.28 4.05 4.26 1.41 8.69 4.13 13.83 7.29 11.05 6.79 25.77 15.83 49.06 17.63h16.81c23.32-1.81 38.14-10.89 49.26-17.72 5.1-3.13 9.51-5.83 13.66-7.2 10.29-3.41 19.31-3.75 27.27-4.05 8.8-.34 17.11-.66 24.51-5.77 2.33-1.61 5.24-4.22 7.55-8.22 2.53-4.31 2.47-7.35 4.85-9.43.97-.85 3.11-1.58 4.25-1.94 6-1.65 13.66-4.05 22.7-9.05 4.01-2.21 7.15-4.63 9.61-7.39.03-.03.06-.07.09-.1 6.81-7.33 8.52-15.92 5.73-23.5-2.49-6.77-7.23-10.4-12.63-13.4a40.52 40.52 0 00-2.72-1.44c-1.61-.83-3.25-1.64-4.9-2.49-16.83-8.92-29.97-20.18-39.1-33.53-3.08-4.51-5.22-8.58-6.7-11.89-.78-2.23-.75-3.48-.19-4.64.42-.88 1.55-1.8 2.15-2.24 2.89-1.91 5.89-3.86 7.91-5.16 3.6-2.34 6.45-4.19 8.3-5.48 6.91-4.82 11.74-9.96 14.77-15.7 4.26-8.08 4.8-17.32 1.51-26.01-4.56-12.05-15.96-19.53-29.75-19.53-2.86 0-5.77.31-8.66.94-.76.17-1.51.34-2.25.53.12-8.19-.05-16.94-.79-25.49-2.6-30.1-13.13-45.88-24.13-58.45-4.58-5.24-12.55-12.93-24.52-19.77-14.2-8.13-30.02-12.84-47.13-14.06z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* Docker */}
                                            <svg viewBox="0 -20.5 256 256" xmlns="http://www.w3.org/2000/svg">

                                                <g fill="none" fillRule="evenodd">

                                                    <path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9" />

                                                    <path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5" />

                                                    <path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4" />

                                                    <path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2" />

                                                    <path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE" />

                                                    <path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE" />

                                                    <path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2" />

                                                    <path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE" />

                                                    <path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC" />

                                                    <path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548" />

                                                    <path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7" />

                                                    <path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC" />

                                                </g>

                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-15"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-16"
                                                    d="M75.25,74.38a8.23,8.23,0,0,0,9.49.54,5.26,5.26,0,0,0,2.17-2.62h7.15c-1.15,3.56-2.89,6.09-5.27,7.62a15.42,15.42,0,0,1-8.56,2.31,17.09,17.09,0,0,1-6.31-1.12,13.36,13.36,0,0,1-4.77-3.18,14.64,14.64,0,0,1-3-4.92,18.24,18.24,0,0,1-1.06-6.31,17.34,17.34,0,0,1,1.09-6.18,14.43,14.43,0,0,1,3.1-5,14.76,14.76,0,0,1,4.8-3.29,15.37,15.37,0,0,1,6.17-1.21,13.9,13.9,0,0,1,6.57,1.47,13.3,13.3,0,0,1,4.62,3.91A15.9,15.9,0,0,1,94,62.07a21.12,21.12,0,0,1,.57,6.59H73.24a8.22,8.22,0,0,0,2,5.71ZM47.49,40.64a25,25,0,0,1,5.33.52,11.45,11.45,0,0,1,4.12,1.69A8,8,0,0,1,59.62,46a11,11,0,0,1,.93,4.79,9,9,0,0,1-1.4,5.15A10.29,10.29,0,0,1,55,59.28a9.78,9.78,0,0,1,5.62,3.8A12.62,12.62,0,0,1,61.25,75,10.43,10.43,0,0,1,58,78.69a14.27,14.27,0,0,1-4.64,2.11,21.08,21.08,0,0,1-5.34.69H28.24V40.65H47.49Zm-.67,33.88a11.3,11.3,0,0,0,2.51-.26,5.8,5.8,0,0,0,2.11-.87,4.3,4.3,0,0,0,1.47-1.63,5.69,5.69,0,0,0,.53-2.64c0-2.1-.6-3.61-1.78-4.52A7.52,7.52,0,0,0,47,63.27H37.22V74.51h9.6v0Zm-.5-17.39a6.47,6.47,0,0,0,4-1.14,4.28,4.28,0,0,0,1.53-3.71,4.87,4.87,0,0,0-.51-2.35,3.72,3.72,0,0,0-1.39-1.42,5.42,5.42,0,0,0-2-.72,12.49,12.49,0,0,0-2.31-.2h-8.4v9.54h9.1ZM71.57,43.94H88.13v4H71.57v-4Zm13,14.91A6.11,6.11,0,0,0,80,57.2a7,7,0,0,0-3.23.66,6.39,6.39,0,0,0-2.06,1.64,5.68,5.68,0,0,0-1.08,2.08,9.26,9.26,0,0,0-.38,2H86.46a7.91,7.91,0,0,0-1.88-4.68Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <rect
                                                    fill="#ff4500"
                                                    width="512"
                                                    height="512"
                                                    rx="105"
                                                    ry="105"
                                                ></rect>
                                                <path
                                                    fill="#fff"
                                                    fillRule="nonzero"
                                                    d="M307.75 303.16c-12.98 0-23.54-10.55-23.54-23.54 0-12.98 10.56-23.53 23.54-23.53 12.97 0 23.53 10.55 23.53 23.53 0 12.99-10.56 23.54-23.53 23.54zm4.14 38.66c-16.06 16.04-46.85 17.29-55.9 17.29-9.06 0-39.84-1.25-55.89-17.3a6.096 6.096 0 010-8.62c2.38-2.39 6.25-2.39 8.64 0 10.12 10.13 31.78 13.71 47.25 13.71 15.47 0 37.13-3.58 47.28-13.71a6.09 6.09 0 018.63.01c2.38 2.38 2.37 6.24-.01 8.62zm-131.25-62.2c0-12.98 10.56-23.53 23.55-23.53 12.97 0 23.53 10.55 23.53 23.53s-10.56 23.53-23.53 23.53c-12.99 0-23.55-10.55-23.55-23.53zm225.93-23.53c0-18.2-14.76-32.96-32.95-32.96-8.88 0-16.93 3.53-22.86 9.25-22.53-16.26-53.56-26.76-88.12-27.97l15.01-70.62 49.04 10.42c.59 12.48 10.81 22.43 23.42 22.43 13.01 0 23.54-10.54 23.54-23.54s-10.53-23.54-23.54-23.54c-9.24 0-17.16 5.38-21.01 13.14l-54.77-11.64a5.758 5.758 0 00-4.42.82 5.876 5.876 0 00-2.55 3.71L250.6 204.4c-35.09.97-66.62 11.48-89.43 27.91-5.92-5.68-13.93-9.18-22.79-9.18-18.19 0-32.95 14.76-32.95 32.96 0 13.38 8 24.88 19.47 30.04-.51 3.28-.79 6.6-.79 9.97 0 50.69 59.02 91.8 131.81 91.8 72.8 0 131.82-41.11 131.82-91.8 0-3.35-.28-6.66-.77-9.91 11.54-5.13 19.6-16.67 19.6-30.1z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-17"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M30.38,30.35V42.27A50.29,50.29,0,0,1,80.57,92.52h12A62.23,62.23,0,0,0,30.38,30.36Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M30.36,51.48V63.39A29.12,29.12,0,0,1,59.43,92.53h12a41.09,41.09,0,0,0-41-41.05Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M38.63,75.94a8.26,8.26,0,1,0,8.29,8.26,8.29,8.29,0,0,0-8.29-8.26Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <g fillRule="nonzero">
                                                    <path
                                                        fill="#07F"
                                                        d="M245.49 512h21.32c115.73 0 173.61 0 209.56-35.94 35.94-35.95 35.63-93.8 35.63-209.25v-21.62c0-115.43 0-173.3-35.63-209.25C440.73 0 382.54 0 266.81 0h-21.32C129.74 0 71.89 0 35.94 35.94 0 71.89 0 129.72 0 245.19v21.62c0 115.45 0 173.3 35.94 209.25C71.89 512 129.74 512 245.49 512z"
                                                    ></path>
                                                    <path
                                                        fill="#FEFEFE"
                                                        d="M274.75 369.15c-115.45 0-185.51-80.1-188.23-213.2h58.47c1.82 97.78 46.3 139.27 80.4 147.73V155.95h56.05v84.36c32.89-3.65 67.3-42.02 78.89-84.36h55.12c-8.83 52.08-46.29 90.46-72.79 106.29 26.5 12.81 69.14 46.31 85.58 106.91h-60.6c-12.8-40.51-44.17-71.88-86.2-76.14v76.14h-6.69z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* Light Node */}
                                            
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            {/* Docker */}
                                            <svg viewBox="0 -20.5 256 256" xmlns="http://www.w3.org/2000/svg">

                                                <g fill="none" fillRule="evenodd">

                                                    <path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8" />

                                                    <path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9" />

                                                    <path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5" />

                                                    <path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4" />

                                                    <path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2" />

                                                    <path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE" />

                                                    <path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE" />

                                                    <path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2" />

                                                    <path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE" />

                                                    <path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2" />

                                                    <path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC" />

                                                    <path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548" />

                                                    <path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7" />

                                                    <path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC" />

                                                </g>

                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-13"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-14"
                                                    d="M61.44,97.79A36.35,36.35,0,1,1,97.79,61.44,36.38,36.38,0,0,1,61.44,97.79Zm24-55.93c-.66.88-5.87,7.56-17.34,12.24.72,1.48,1.42,3,2.06,4.51.23.54.45,1.06.67,1.6a73.28,73.28,0,0,1,21.62,1,30.92,30.92,0,0,0-7-19.33Zm6.61,24.55a45.46,45.46,0,0,0-19.33-1.32,135.32,135.32,0,0,1,6,22.13,31,31,0,0,0,13.3-20.81ZM73.57,90.06A129.72,129.72,0,0,0,67,66.52l-.2.08C49.23,72.7,42.94,84.84,42.39,86a31,31,0,0,0,31.18,4.09Zm-35.2-7.82C39.08,81,47.6,66.93,63.6,61.75c.4-.12.81-.25,1.22-.36-.78-1.77-1.63-3.54-2.51-5.27a115.42,115.42,0,0,1-31.9,4.43c0,.32,0,.63,0,1a30.92,30.92,0,0,0,8,20.74ZM31.06,55.12a116.9,116.9,0,0,0,28.71-3.77,192.76,192.76,0,0,0-11.52-18A31.14,31.14,0,0,0,31.06,55.12ZM54.17,31.3A166.07,166.07,0,0,1,65.76,49.47C76.8,45.34,81.47,39.05,82,38.26a30.91,30.91,0,0,0-20.59-7.83,32.8,32.8,0,0,0-7.27.87Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-15"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-16"
                                                    d="M75.25,74.38a8.23,8.23,0,0,0,9.49.54,5.26,5.26,0,0,0,2.17-2.62h7.15c-1.15,3.56-2.89,6.09-5.27,7.62a15.42,15.42,0,0,1-8.56,2.31,17.09,17.09,0,0,1-6.31-1.12,13.36,13.36,0,0,1-4.77-3.18,14.64,14.64,0,0,1-3-4.92,18.24,18.24,0,0,1-1.06-6.31,17.34,17.34,0,0,1,1.09-6.18,14.43,14.43,0,0,1,3.1-5,14.76,14.76,0,0,1,4.8-3.29,15.37,15.37,0,0,1,6.17-1.21,13.9,13.9,0,0,1,6.57,1.47,13.3,13.3,0,0,1,4.62,3.91A15.9,15.9,0,0,1,94,62.07a21.12,21.12,0,0,1,.57,6.59H73.24a8.22,8.22,0,0,0,2,5.71ZM47.49,40.64a25,25,0,0,1,5.33.52,11.45,11.45,0,0,1,4.12,1.69A8,8,0,0,1,59.62,46a11,11,0,0,1,.93,4.79,9,9,0,0,1-1.4,5.15A10.29,10.29,0,0,1,55,59.28a9.78,9.78,0,0,1,5.62,3.8A12.62,12.62,0,0,1,61.25,75,10.43,10.43,0,0,1,58,78.69a14.27,14.27,0,0,1-4.64,2.11,21.08,21.08,0,0,1-5.34.69H28.24V40.65H47.49Zm-.67,33.88a11.3,11.3,0,0,0,2.51-.26,5.8,5.8,0,0,0,2.11-.87,4.3,4.3,0,0,0,1.47-1.63,5.69,5.69,0,0,0,.53-2.64c0-2.1-.6-3.61-1.78-4.52A7.52,7.52,0,0,0,47,63.27H37.22V74.51h9.6v0Zm-.5-17.39a6.47,6.47,0,0,0,4-1.14,4.28,4.28,0,0,0,1.53-3.71,4.87,4.87,0,0,0-.51-2.35,3.72,3.72,0,0,0-1.39-1.42,5.42,5.42,0,0,0-2-.72,12.49,12.49,0,0,0-2.31-.2h-8.4v9.54h9.1ZM71.57,43.94H88.13v4H71.57v-4Zm13,14.91A6.11,6.11,0,0,0,80,57.2a7,7,0,0,0-3.23.66,6.39,6.39,0,0,0-2.06,1.64,5.68,5.68,0,0,0-1.08,2.08,9.26,9.26,0,0,0-.38,2H86.46a7.91,7.91,0,0,0-1.88-4.68Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                imageRendering="optimizeQuality"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                viewBox="0 0 512 512"
                                            >
                                                <rect
                                                    fill="#ff4500"
                                                    width="512"
                                                    height="512"
                                                    rx="105"
                                                    ry="105"
                                                ></rect>
                                                <path
                                                    fill="#fff"
                                                    fillRule="nonzero"
                                                    d="M307.75 303.16c-12.98 0-23.54-10.55-23.54-23.54 0-12.98 10.56-23.53 23.54-23.53 12.97 0 23.53 10.55 23.53 23.53 0 12.99-10.56 23.54-23.53 23.54zm4.14 38.66c-16.06 16.04-46.85 17.29-55.9 17.29-9.06 0-39.84-1.25-55.89-17.3a6.096 6.096 0 010-8.62c2.38-2.39 6.25-2.39 8.64 0 10.12 10.13 31.78 13.71 47.25 13.71 15.47 0 37.13-3.58 47.28-13.71a6.09 6.09 0 018.63.01c2.38 2.38 2.37 6.24-.01 8.62zm-131.25-62.2c0-12.98 10.56-23.53 23.55-23.53 12.97 0 23.53 10.55 23.53 23.53s-10.56 23.53-23.53 23.53c-12.99 0-23.55-10.55-23.55-23.53zm225.93-23.53c0-18.2-14.76-32.96-32.95-32.96-8.88 0-16.93 3.53-22.86 9.25-22.53-16.26-53.56-26.76-88.12-27.97l15.01-70.62 49.04 10.42c.59 12.48 10.81 22.43 23.42 22.43 13.01 0 23.54-10.54 23.54-23.54s-10.53-23.54-23.54-23.54c-9.24 0-17.16 5.38-21.01 13.14l-54.77-11.64a5.758 5.758 0 00-4.42.82 5.876 5.876 0 00-2.55 3.71L250.6 204.4c-35.09.97-66.62 11.48-89.43 27.91-5.92-5.68-13.93-9.18-22.79-9.18-18.19 0-32.95 14.76-32.95 32.96 0 13.38 8 24.88 19.47 30.04-.51 3.28-.79 6.6-.79 9.97 0 50.69 59.02 91.8 131.81 91.8 72.8 0 131.82-41.11 131.82-91.8 0-3.35-.28-6.66-.77-9.91 11.54-5.13 19.6-16.67 19.6-30.1z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                    <a className="social-media-link" href="#">
                                        <button className="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 122.88 122.88"
                                            >
                                                <path
                                                    className="cls-17"
                                                    d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M30.38,30.35V42.27A50.29,50.29,0,0,1,80.57,92.52h12A62.23,62.23,0,0,0,30.38,30.36Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M30.36,51.48V63.39A29.12,29.12,0,0,1,59.43,92.53h12a41.09,41.09,0,0,0-41-41.05Z"
                                                ></path>
                                                <path
                                                    className="cls-18"
                                                    d="M38.63,75.94a8.26,8.26,0,1,0,8.29,8.26,8.29,8.29,0,0,0-8.29-8.26Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
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