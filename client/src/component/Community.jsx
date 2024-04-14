import { useContext, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import projectContext from '../context/projectContext';
import PropTypes from 'prop-types';
import axios from 'axios';
import CommunityCard from './CommunityCard';
import './css/Community.css'
import profileContext from '../context/profileContext';
import './EditProfile'
import avatar from '../assets/images/Dropdown/avatar.png';
import ViewAllModalImg from '../assets/images/Modal Image/ViewAll.png'
import githubModalImg from '../assets/images/Modal Image/GitHub.png'
import unlinkModalImg from '../assets/images/Modal Image/Unlink.png'
import optionModalImg from '../assets/images/Modal Image/Option.png'
import closeModalImg from '../assets/images/Modal Image/Close.png'
import AavtarModalImg from '../assets/images/Modal Image/Aavtar.png'
import LikeModalImg from '../assets/images/Modal Image/Like.png'
import LinkModalImg from '../assets/images/Modal Image/Link.png'
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import ShareModalImg from '../assets/images/Modal Image/Share.png'



const Community = (props) => {
  const host = "http://localhost:5000"
  const ref = useRef(null)
  const [project, setproject] = useState({ id: "", etitle: "", edescription: "", egitHubLink: "", eyouTubeLink: "" });

  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  const context = useContext(projectContext)
  const { globalProjects, getGlobalProjects } = context;
  useEffect(() => {
    getGlobalProjects();
  }, [getGlobalProjects]);
  const refDetails = useRef(null)

  const showDetailProject = (currentProject) => {
    refDetails.current.click();
    // Set the title, description and link to edit modal 
    setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, egitHubLink: currentProject.gitHubLink, eyouTubeLink: currentProject.youTubeLink })
  }
  // Edit  profile 
  const userProfileContext = useContext(profileContext);
  const { userProfile, getUserProfile } = userProfileContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserProfile();
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  // Avatar Profile Image 
  const [image, setImage] = useState()

  useEffect(() => {
    // Fetch initial image when component mounts
    axios.get(`${host}/getAvatarImage`)
      .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
      .catch(err => console.log(err))
  })

  return (
    <>
      <div className="user-profile-dashboard">
        <div className="user-details"style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <div className="globalproject-left" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="globaldetail-left" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              <div className="profile-picture mb-3 mt-2">
                {image ? (
                  <img src={image} alt="avatar" />
                ) : (
                  <img
                    src={avatar}
                    className="avatar img-circle"
                    alt="avatar"
                  />
                )}
              </div>
              <div className="global-bio">
                <p>Name: <span>{userProfile.name}</span></p>
                <p>College: <span>{userProfile.college}</span></p>
              </div>
              <hr />
              <div className="global-links">
                <h3>Discover</h3>
                <p>Popular</p>
                <p>Most Viewed</p>
                <p>Top rated</p>
              </div>
              <hr />
              <div className="global-skills">
                <h3>Contri</h3>
                <p>Discussion</p>

              </div>
              <hr />
              <div className="global-experience">
                <h3>Manage</h3>
                <p>Saved</p>
              </div>

              <div className="global-share">
                <h3>Share</h3>
                <p>Invite friends</p>
              </div>
            </div>
          </div>
          <div className="globalproject-right" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="globaldetail-right">
              <h2 className='Heading-Page'>Welcome to Bitbox Community</h2>
              <div>
                {/* Detail Button trigger modal */}
                <button ref={refDetails} className="btn" data-bs-toggle="modal" data-bs-target="#detailToggle">
                </button>
                {/* Project Details Modal */}
                <div className="modal fade" id="detailToggle" ref={ref} tabIndex="-1" aria-labelledby="detailToggle" aria-hidden="true">
                  <div className="modal-dialog project-modal-section" style={{ maxWidth: "100%" }}>
                    <div className="modal-content" style={{ background: "transparent", border: "none" }}>
                      <div className="modal-body">
                        <section className="project-modal-section-container">
                          <div className="project-modal-container">
                            <div className="project-modal-left">
                              {/* <!-- Modal Head --> */}
                              <div className="modal-left-head">
                                <div className="modal-project-navigation">
                                  <div className="left-navigation">
                                    <img src="./src/assets/images/Others/arrow pre_next.png" title="previous" alt="previous" />
                                  </div>
                                  <div className="right-navigation">
                                    <img src="./src/assets/images/Others/arrow pre_next.png" title="next" alt="next" />
                                  </div>
                                </div>
                                <div className="modal-tag-group">
                                  <div className="modal-project-tag">Category</div>
                                  <div className="modal-project-tag">Latest</div>
                                </div>
                              </div>
                              {/* <!-- Modal Section --> */}
                              <div className="modal-left-section">
                                <div className="modal-title">{project.etitle}</div>
                                <div className="modal-technology-tag">
                                  <a href="">Web</a>
                                </div>
                                <div className="modal-Time">12/22/32</div>
                                {/* <div className="modal-project-image">
                                  <img src="./src/assets/images/Vector Gif/R.gif" alt="" />
                            </div>  */}
                                <div className="modal-project-vedio">
                                  {project.eyouTubeLink ? (
                                    <iframe className='youtube-Frame' src={project.eyouTubeLink} frameBorder="0" allowFullScreen></iframe>
                                  ) : (
                                    <iframe className='youtube-Frame' src="https://www.youtube.com/embed/lwv_0SEJ4NQ" frameBorder="0" allowFullScreen></iframe>
                                  )}
                                </div>
                                <div className="modal-description">
                                  {project.edescription ? (<p>{project.edescription}</p>) : (<p>No description to display</p>)}
                                </div>
                                <div className="modal-project-details">
                                  <div className="modal-project-likecount">
                                    1 Like
                                  </div>
                                  <div className="modal-project-comment">
                                    8 comments
                                  </div>
                                </div>
                                <div className="modal-project-engagement-container">
                                  <div className="modal-project-love">
                                    <img src={LikeModalImg} alt="Like" />
                                  </div>
                                  <div className="modal-project-comment">
                                    <img src={commentModalImg} alt="Comment" />
                                  </div>
                                  <div className="modal-favourite-details">
                                    <img src={FavourModalImg} alt="Favourite" />
                                  </div>
                                  <div className="modal-project-link">
                                    <img src={LinkModalImg} alt="Link" />
                                  </div>
                                </div>
                                <section className="modal-comment-section">
                                  <div className="modal-post-commment">
                                    <div className="modal-post-commment-avatar">
                                      <img src={AavtarModalImg} alt="avatar-image" />
                                    </div>
                                    <span>Share Your Thoughts...</span>
                                    <div className="modal-post-commment-button">
                                      Post
                                    </div>
                                  </div>
                                  <div className="modal-comment-container">
                                    <header className="modal-comment-header">
                                      <div className="modal-comment-user-avatar">
                                        <img src={AavtarModalImg} alt="user-avatar" />
                                      </div>
                                      <div className="modal-comment-user-details">
                                        <div className="modal-comment-user-name">
                                          Anuj Verma
                                        </div>
                                        <div className="modal-comment-user-id">
                                          @anujverma
                                          <div className="modal-dot-symbol"></div>
                                          <div className="modal-comment-user-time">
                                            12 hours ago
                                          </div>
                                        </div>
                                      </div>
                                    </header>
                                    <div className="modal-comment-content-container">
                                      <div className="modal-comment-content">
                                        nerds - always gotta prove they are hardcore
                                      </div>
                                      <div className="modal-comment-engagement-container">
                                        <div className="modal-comment-project-love">
                                          <img src={LikeModalImg} alt="Like" />
                                        </div>
                                        <div className="modal-project-comment">
                                          <img src={commentModalImg} alt="Comment" />
                                        </div>
                                        <div className="modal-favourite-details">
                                          <img src={ShareModalImg} alt="Share" />
                                        </div>
                                        <div className="modal-project-link">
                                          <img src={optionModalImg} alt="Option" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div className="project-modal-right">
                              <div className="modal-right-head">
                                {project.egitHubLink ? (
                                  <a className="button-github-modal" href={project.egitHubLink} target="_blank" rel="noopener noreferrer" title='GitHub Link'>
                                    <img src={githubModalImg} alt="GitHub" />
                                    GitHub
                                  </a>
                                ) : (
                                  <a title='Unavailable GitHub Link'>
                                    <div className="button-github-modal" >
                                      <img src={unlinkModalImg} alt="Broken Link" />
                                      Unavailable
                                    </div>
                                  </a>
                                )}
                                <div className="project-modal-head-buttons">
                                  <div className="option-modal-button"><img src={optionModalImg} alt="option" title='option' /></div>
                                  {/* Bootstap close button */}
                                  <div className="close-modal-button" data-bs-dismiss="modal" aria-label="Close">
                                    <img src={closeModalImg} title='close' alt="close" /></div>
                                </div>
                              </div>
                              <div className="modal-profile-details-container">
                                <div className="modal-profile-details">
                                  <div className="modal-profile-image">
                                    <img src={AavtarModalImg} alt="avatar-image" />
                                  </div>
                                  <div className="modal-profile-user-details">
                                    <div className="modal-profile-name">Anuj Verma</div>
                                    <div className="modal-profile-username">@anuj3553</div>
                                  </div>
                                </div>
                                <div className="modal-visit-profile-btn">
                                  Visit
                                  <img src={ShareModalImg} alt="visit" />

                                </div>
                              </div>
                              <div className="modal-suggestion-container">
                                <div className="modal-suggestion-title">You might like</div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-project-container">
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-viewall">
                                  View all
                                  <div className="viewall-image">
                                    <img src={ViewAllModalImg} alt=">" />
                                  </div>
                                </div>
                              </div>
                              <div className="modal-suggestion-container">
                                <div className="modal-suggestion-title">Most Liked Project</div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-project-container">
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        ABC
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-likes">
                                          200 Likes
                                        </div>
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-viewall">
                                  View all
                                  <div className="viewall-image">
                                    <img src={ViewAllModalImg} alt=">" />
                                  </div>
                                </div>
                              </div>
                              <div className="modal-suggestion-container">
                                <div className="modal-suggestion-title">Best Discussion</div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-project-container">
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        Let&apos;s get animating!
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        HTML First
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-suggestion-project">
                                    <div className="modal-suggestion-project-img">
                                      <img src={AavtarModalImg} alt="image" />
                                    </div>
                                    <div className="modal-suggestion-project-details">
                                      <div className="modal-suggestion-project-details-title">
                                        Bitbox Talks
                                      </div>
                                      <div className="modal-suggestion-project-engagement">
                                        <div className="modal-suggestion-project-comments">
                                          50 Comments
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-project-divider"></div>
                                <div className="modal-suggestion-viewall">
                                  I&apos;m feeling lucky
                                  <div className="viewall-image">
                                    <img src={ViewAllModalImg} alt=">" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='container Global-Sec-Container'>
                  <div className='row'>
                    {globalProjects.map((project) => {
                      return <CommunityCard showAlert={props.showAlert} showDetailProject={showDetailProject} key={project._id} project={project} />;
                    })}
                  </div>
                </div>
                {/* youTube video Modal */}
                {showVideo && (
                  <div className="video-overlays container">
                    <div className="Video-Modal container">
                      <div className="Video-card ">
                        <div className="Video-content">
                          <button className="exit2-button" onClick={handleVideoClose}>
                            <svg height="20px" viewBox="0 0 384 512">
                              <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                              ></path>
                            </svg>
                          </button>
                          <p className="video-heading fs-1">Project Video</p>
                          <p>
                            <iframe className='youtube-Frame' width="350" height="315" src={project.eyouTubeLink} frameBorder="0" allowFullScreen></iframe>
                          </p>
                        </div>
                        <div className="card-button-wrapper">
                          <button className="card-button secondary" onClick={handleVideoClose}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Props Vadilation
Community.propTypes = {
  mode: PropTypes.func,
  toggleMode: PropTypes.func,
  project: PropTypes.string,
  showAlert: PropTypes.func,
};

export default Community
