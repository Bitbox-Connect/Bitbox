import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import profileContext from '../context/profileContext';
import MyProfileCard from './MyProfileCard';
import UploadProject from './UploadProject';
import avatar from '../assets/images/Dropdown/avatar.jpg';
import EditProfile from './EditProfile'; // Import EditProfile component

// import './css/MyProfile.css'
// import EditProfile from './EditProfile';

const MyProfile = (props) => {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideo = () => {
        setShowVideo(true);
    };

    const handleVideoClose = () => {
        setShowVideo(false);
    };

    // Context for Projects 
    const userProjectContext = useContext(projectContext)
    const { userProjects, getUserProjects, editProject } = userProjectContext;

    let navigate = useNavigate();
    useEffect(() => {
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
        // API CALL - Update Project
        editProject(project.id, project.etitle, project.edescription, project.egitHubLink, project.eyouTubeLink)
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
        // Able to write in the input field
        setproject({ ...project, [e.target.name]: e.target.value });
    }
    const userProfileContext = useContext(profileContext);
    const { userProfile, getUserProfile } = userProfileContext;
    // Context for Profile
    // const [profiles, setprofiles] = useState({ id: "", name: "", college: "", phone: "", address: "" });
    const [profiles, setprofiles] = useState([]);
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

    return (
        <>
            {/* {editMode ? <EditProfile/>:( */}
            <div className="user-profile-dashboard">
                <div className="user-details">
                        <div className="userprofile-left">
                            <div className="userdetail-left">
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
                                                        <label htmlFor="eyouTubeLink" className="form-label">Github Link</label>
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
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Project Details</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {project.edescription ? (<p>{project.edescription}</p>) : (<p>No description to display</p>)}
                                        </div>
                                        <div className="modal-footer">
                                            <button href={project.gitHubLink} target="_blank" className="card-link btn btn-warning">Github Link</button>
                                            <button className="btn btn-danger" onClick={handleVideo}>Youtube Link</button>
                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailToggle">Close</button>
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
                                                    <iframe className='youtube-Frame' width="350" height="315" src={project.youTubeLink} frameBorder="0" allowfullScreen></iframe>
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
