import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import profileContext from '../context/profileContext';
import projectContext from "../context/projectContext";
// CSS
import "./css/ProjectCard.css";
// Image
import avatarImg from "../assets/images/logo.png";
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import githubCardImg from '../assets/images/Modal Image/githubcard.png'
import DetailCardImg from '../assets/images/Modal Image/Details.png'

const MyProfileCard = (props) => {
  const { project, updateProject, showDetailProject, showAlert } = props;
  const [showModal, setShowModal] = useState(false);
  const context = useContext(projectContext);
  const { deleteProject } = context;

  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?coding/?computer/&${projectId}`;
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteProject(project._id);
    showAlert("Deleted Successfully", "success");
    handleModalClose();
  };

  // Profile Context
  let navigate = useNavigate();
  const userProfileContext = useContext(profileContext);
  const { userProfile, getUserProfile } = userProfileContext;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserProfile();
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero for single-digit months
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero for single-digit days
    const hours = ('0' + date.getHours()).slice(-2); // Add leading zero for single-digit hours
    const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero for single-digit minutes

    // Format the date and time
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  // Max Length for title and description
  const maxTitleLength = 30; 
  const maxDescriptionLength = 75;

  return (
    <div className="col-md-4 my-3">
      {/* Project Card */}
      <div className="projectContainer">
        <div className="projectBox">
          <div className="projectInfo" >
            <div className="projectAvatar">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="projectText">
              <div className="projectTitle" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>{project.title.length > maxTitleLength ? project.title.slice(0, maxTitleLength) + '...' : project.title}</div>
              <div className="projectDetails">
                <div className="projectUserName" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>{userProfile.name}</div>
                <div className="projectTime" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>{formatDate(project.date)}</div>
              </div>
            </div>
            <div className="project-modify">
              <i className="fa-solid fa-trash" style={{ color: props.mode === 'dark' ? '#100000' : '' }} onClick={handleModalOpen}></i>
              <i className="fa-solid fa-pen-to-square" style={{ color: props.mode === 'dark' ? '#100000' : '' }} onClick={() => updateProject(project)}></i>
            </div>
          </div>
          <div className="projectDescription" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>{project.description.length > maxDescriptionLength ? project.description.slice(0, maxDescriptionLength) + '...' : project.description}</div>
          <div className="project-bottom-container">
            <div className="projectVisualContainer">
              <img
                src={generateImageUrl(project._id)}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="projectEngagementContainer">
              <div className="project-love">
                <img src={FavourModalImg} alt="Love" />
              </div>
              <div className="project-comment">
                <img src={commentModalImg} alt="Comment" />
              </div>
              <div className="project-link">
                <img src={githubCardImg} href={project.gitHubLinkt} alt="Link" />
              </div>
              <div className="project-details" onClick={() => showDetailProject(project)}              >
                <img src={DetailCardImg} alt="Details" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="modal-wrapper" style={{ background: props.mode === 'dark' ? 'black' : '', outline: props.mode === 'dark' ? '1px solid white' : '' }}>
          <div className="modal-card" style={{ background: props.mode === 'dark' ? 'black' : '', outline: props.mode === 'dark' ? '1px solid white' : '' }}>
            <div className="card-content">
              <p className="card-heading" style={{ color: props.mode === 'dark' ? 'white' : ''}}>{project.title}</p>
              <p className="card-description" style={{ color: props.mode === 'dark' ? 'white' : ''}}>
                Are you sure want to Delete project ?
              </p>
            </div>
            <div className="card-button-wrapper">
              <button
                className="card-button secondary"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button className="card-button primary" onClick={handleDelete}>
                Delete
              </button>
            </div>
            <button className="exit-button" onClick={handleModalClose}>
              <svg height="20px" viewBox="0 0 384 512" style={{ color: props.mode === 'dark' ? 'white' : ''}}> 
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

MyProfileCard.propTypes = {
  project: PropTypes.object,
  profile: PropTypes.object,
  updateProject: PropTypes.func,
  showDetailProject: PropTypes.func,
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default MyProfileCard;
