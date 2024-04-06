import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import MyProfileCard from './MyProfileCard';
import UploadProject from './UploadProject';
import avatar from '../assets/images/Dropdown/avatar.jpg';
import './css/Myprofile.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const MyProfile = (props) => {
    const [showVideo, setShowVideo] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [closebtn ,setClosebtn] = useState(false);
    const handleClose = () =>{
        setClosebtn(true);
    }
    const handleEditClick = () => {
        setEditMode(true); // Set edit mode to true on edit button click
    };
    const handleVideo = () => {
        setShowVideo(true);
    };

    const handleVideoClose = () => {
        setShowVideo(false);
    };

    const context = useContext(projectContext)
    let navigate = useNavigate();
    const { userProjects, getUserProjects, editProject } = context;

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
    return (
        <>
         {editMode ? (
            <div className="row">
                <div className="col-md-3">
                    <div className="text-center">
                        <img src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" className="avatar img-circle" alt="avatar" />
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="form-control" />
                    </div>
                </div>

                <div className="col-md-9 personal-info">
                    <div className="alert alert-info alert-dismissable">
                        <button type="button" className="close" data-dismiss="alert">×</button>
                        <i className="fa fa-coffee"></i>
                        This is an <strong>.alert</strong>. Use this to show important messages to the user.
                    </div>
                    <h3>Personal info</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCollege">
                                <Form.Label>College</Form.Label>
                                <Form.Control type="text" placeholder="Enter your college name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Social Links</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGithub">
                                <Form.Label>Github</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Github profile link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLinkedIn">
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control type="text" placeholder="Enter your LinkedIn profile link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTwitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Twitter profile link" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Technical Skills</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formSkills">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control type="text" placeholder="Enter your technical skills" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Change Password</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formNewPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your new password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your new password" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Password</Button>
                            <button onClick={handleClose}>Close</button> {/* Close button */}
                        </Form>
                    </div>
                    <hr />
                </div>
            </div>)  :(
            <div className="user-profile-dashboard">
                <div className="user-details">
                    <div className="userproject-left">
                        <div className="userdetail-left">
                        <button onClick={handleEditClick}>Edit</button>
                            <div className="profile-picture">
                                <img src={avatar} alt="Profile" />
                            </div>
                            <div className="user-bio">
                                <p>Name: <span>e.name</span></p>
                                <p>UserName : <span>Harshit7492</span></p>
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
            </div>) }
        </>
    )
}

// Props Validation
MyProfile.propTypes = {
    showAlert: PropTypes.func,
};

export default MyProfile;
