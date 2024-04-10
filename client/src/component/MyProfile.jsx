import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import profileContext from '../context/profileContext';
import MyProfileCard from './MyProfileCard';
import UploadProject from './UploadProject';
import avatar from '../assets/images/Dropdown/avatar.jpg';
// CSS
import './css/Modal.css'
import './css/MyProfile.css'
// import EditProfile from './EditProfile'; // Import EditProfile component

// import EditProfile from './EditProfile';

const MyProfile = (props) => {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClose = () => {
        setShowVideo(false);
    };

    // Context for Projects 
    const userProjectContext = useContext(projectContext)
    const { userProjects, getUserProjects, editProject } = userProjectContext;

    let navigate = useNavigate();
    useEffect(() => {
        // Check if user is authenticated, if not, navigate to login page
        if (localStorage.getItem('token')) {
            getUserProjects();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const refEdit = useRef(null)
    const refClose = useRef(null)

    const [project, setproject] = useState({ id: "", etitle: "", edescription: "", egitHubLink: "", eyouTubeLink: "" });
    const updateProject = (currentProject) => {
        refEdit.current.click();
        // Set the title, description and link to edit modal 
        setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, egitHubLink: currentProject.gitHubLink, eyouTubeLink: currentProject.youTubeLink })
    }

    const handleClick = () => {
        // Modify YouTube link
        const modifiedYouTubeLink = modifyYouTubeLink(project.eyouTubeLink);
        // Update project using API call
        editProject(project.id, project.etitle, project.edescription, project.egitHubLink, modifiedYouTubeLink) // Pass modifiedYouTubeLink instead of project.youTubeLink
        refClose.current.click();
        props.showAlert("Project Updated Successfully", "success")
    }

    const refDetails = useRef(null)

    const showDetailProject = (currentProject) => {
        refDetails.current.click();
        // Set the title, description and link to edit modal 
        setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, egitHubLink: currentProject.gitHubLink, eyouTubeLink: currentProject.youTubeLink })
    }

    const onChange = (e) => {
        // Update project state when input value changes
        setproject({ ...project, [e.target.name]: e.target.value });
    }

    // Profile Context
    const userProfileContext = useContext(profileContext);
    const { userProfile, getUserProfile } = userProfileContext;
    // Context for Profile
    // const [profiles, setprofiles] = useState({ id: "", name: "", college: "", phone: "", address: "" });
    // const [profiles, setprofiles] = useState([]);
    // const userProfileContext = useContext(profileContext);
    // const { getUserProfile } = userProfileContext;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUserProfile();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    // const handleProfileUpdate = () => {
    //     getUserProfile();
    // }

    // Function to modify YouTube link
    const modifyYouTubeLink = (link) => {
        if (link.includes("youtube.com/watch?v=")) {
            const videoId = link.split("youtube.com/watch?v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return link; // Return unmodified link if it doesn't match expected format
        }
    };

    return (
        <>
            {/* {editMode ? <EditProfile/>:( */}
            <div className="user-profile-dashboard">
                <div className="user-details">
                    <div className="userprofile-left">
                        <div className="userdetail-left">
                            {/* User Profile Information */}
                            {/* <Link to='/edituser' onClick={handleEditClick}>Edit</Link> */}
                            {/* <button onClick={handleEditClick}><link rel="stylesheet" href="/editprogile" />Edit</button> */}
                            <div className="profile-picture">
                                <img src={avatar} alt="Profile" />
                            </div>
                            <div className="user-bio">
                                <p>Name: <span>{userProfile.name}</span></p>
                                <p>Address :  <span>{userProfile.addrres}</span></p>
                                <p>College :  <span>{userProfile.college}</span></p>
                                <p>Phone :  <span>{userProfile.phone}</span></p>
                            </div>
                            <button>
                                public
                            </button>
                            <hr />
                            <div className="user-links">
                                <h3>Discover</h3>
                                <p>Popular</p>
                                <p>Most Viewed</p>
                                <p>Top rated</p>
                            </div>
                            <hr />
                            <div className="user-skills">
                                <h3>Contri</h3>
                                <p>Discussion</p>

                            </div>
                            <hr />
                            <div className="user-experience">
                                <h3>Manage</h3>
                                <p>Saved</p>
                            </div>

                            <div className="user-share">
                                <h3>Share</h3>
                                <p>Invite friends</p>
                            </div>
                        </div>
                    </div>

                    <div className="userproject-right">
                        <div className="userdetail-right">
                            {/* Edit Button trigger modal */}
                            <button ref={refEdit} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#newModal">

                            </button>

                            {/* Project Edit Modal */}
                            <div className="modal fade text-start" id="newModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Project</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="pro-card">
                                                {/* <img src={ProjectImg} className="card-img-top" alt={"project"} /> */}
                                                <div className="card-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="etitle" className="form-label">Project Title</label>
                                                        <input type="text" className="form-control" id="etitle" name='etitle' value={project.etitle} onChange={onChange} placeholder="Enter Project Title Here" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="edescription" className="form-label">Project Description</label>
                                                        <textarea type="text" className="form-control" id="edescription" name='edescription' value={project.edescription} onChange={onChange} placeholder="Enter Project Description Here" rows="3"></textarea>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="egitHubLink" className="form-label">Github Link</label>
                                                        <input type="text" className="form-control" id="egitHubLink" name='egitHubLink' value={project.egitHubLink} onChange={onChange} placeholder="Enter Github Link Here" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="eyouTubeLink" className="form-label">YouTube Link</label>
                                                        <input type="text" className="form-control" id="eyouTubeLink" name='eyouTubeLink' value={project.eyouTubeLink} onChange={onChange} placeholder="Enter YouTube Link Here" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detail Button trigger modal */}
                            <button ref={refDetails} className="btn" data-bs-toggle="modal" data-bs-target="#detailToggle">

                            </button>

                            {/* Project Details Modal */}
                            <div className="modal fade" id="detailToggle" tabIndex="-1" aria-labelledby="detailToggle" aria-hidden="true">
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
                                                            </div> */}
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
                                                                    <img src="" alt="Like" />
                                                                </div>
                                                                <div className="modal-project-comment">
                                                                    <img src="" alt="Comment" />
                                                                </div>
                                                                <div className="modal-favourite-details">
                                                                    <img src="" alt="Favourite" />
                                                                </div>
                                                                <div className="modal-project-link">
                                                                    <img src="" alt="Link" />
                                                                </div>
                                                            </div>
                                                            <section className="modal-comment-section">
                                                                <div className="modal-post-commment">
                                                                    <div className="modal-post-commment-avatar">
                                                                        <img src="" alt="avatar-image" />
                                                                    </div>
                                                                    <span>Share Your Thoughts</span>
                                                                    <div className="modal-post-commment-button">
                                                                        Post
                                                                    </div>
                                                                </div>
                                                                <div className="modal-comment-container">
                                                                    <header className="modal-comment-header">
                                                                        <div className="modal-comment-user-avatar">
                                                                            <img src="" alt="user-avatar" />
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
                                                                                <img src="" alt="Like" />
                                                                            </div>
                                                                            <div className="modal-project-comment">
                                                                                <img src="" alt="Comment" />
                                                                            </div>
                                                                            <div className="modal-favourite-details">
                                                                                <img src="" alt="Share" />
                                                                            </div>
                                                                            <div className="modal-project-link">
                                                                                <img src="" alt="Option" />
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
                                                                    <img src="path_to_github_logo_image" alt="GitHub" />
                                                                    GitHub
                                                                </a>
                                                            ) : (
                                                                <a title='Unavailable GitHub Link'>
                                                                    <div className="button-github-modal" >
                                                                        <img src="path_to_unavailable_image" alt="GitHub" />
                                                                        Unavailable
                                                                    </div>
                                                                </a>
                                                            )}
                                                            <div className="project-modal-head-buttons">
                                                                <div className="close-modal-button"><img src="" alt="option" /></div>
                                                                {/* Bootstap close button */}
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                        </div>
                                                        <div className="modal-profile-details-container">
                                                            <div className="modal-profile-details">
                                                                <div className="modal-profile-image">
                                                                    <img src="" alt="avatar-image" />
                                                                </div>
                                                                <div className="modal-profile-user-details">
                                                                    <div className="modal-profile-name">Anuj Verma</div>
                                                                    <div className="modal-profile-username">@anuj3553</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-visit-profile-btn">
                                                                <img src="" alt="visit" />
                                                                Visit
                                                            </div>
                                                        </div>
                                                        <div className="modal-suggestion-container">
                                                            <div className="modal-suggestion-title">You might like</div>
                                                            <div className="modal-project-divider"></div>
                                                            <div className="modal-suggestion-project-container">
                                                                <div className="modal-suggestion-project">
                                                                    <div className="modal-suggestion-project-img">
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                    <img src="" alt=">" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-suggestion-container">
                                                            <div className="modal-suggestion-title">Most Liked Project</div>
                                                            <div className="modal-project-divider"></div>
                                                            <div className="modal-suggestion-project-container">
                                                                <div className="modal-suggestion-project">
                                                                    <div className="modal-suggestion-project-img">
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                    <img src="" alt=">" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-suggestion-container">
                                                            <div className="modal-suggestion-title">Best Discussion</div>
                                                            <div className="modal-project-divider"></div>
                                                            <div className="modal-suggestion-project-container">
                                                                <div className="modal-suggestion-project">
                                                                    <div className="modal-suggestion-project-img">
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                        <img src="" alt="image" />
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
                                                                    <img src="" alt=">" />
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
                            <div className='container User-Sec-Container'>
                                <h2 className='Heading-Page text-center mb-4'>My Uploaded Projects</h2>
                                {userProjects.length === 0 && <UploadProject showAlert={props.showAlert} title="Click Here To Upload" />}
                                <div className='row'>
                                    {userProjects.map((project) => {
                                        return <MyProfileCard key={project._id} updateProject={updateProject} showDetailProject={showDetailProject} project={project} showAlert={props.showAlert} />;
                                    })}
                                </div>
                            </div>

                            {/* Video Overlay */}
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
                                                    <iframe className='youtube-Frame' width="350" height="315" src={project.youTubeLink} frameBorder="0" allowFullScreen></iframe>
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
            {/* )} */}
        </>
    )
}

// Props Validation
MyProfile.propTypes = {
    showAlert: PropTypes.func,
};

export default MyProfile;
