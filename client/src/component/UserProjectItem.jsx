import './css/ProjectItem.css';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import avatarImg from '../assets/images/logo.png'

const UserProjectItem = (props) => {
  const { project, updateProject, showDetailProject, showAlert } = props;
  const [showModal, setShowModal] = useState(false);
  // const [showVideo, setShowVideo] = useState(false);
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

  // const handleVideo = () => {
  //   setShowVideo(true);
  // };

  // const handleVideoClose = () => {
  //   setShowVideo(false);
  // };

  const handleDelete = () => {
    deleteProject(project._id);
    showAlert("Deleted Successfully", "success");
    handleModalClose();
  };

  return (
    <div className='col-md-3 my-3'>
      {/* Project Card */}
      <div className="projectContainer">
        <div className="projectBox">
          <div className="projectInfo">
            <div className="projectAvatar">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="projectText">
              <div className="projectTitle">{project.title}</div>
              <div className="projectDetails">
                <div className="projectUserName">Anuj Verma</div>
                <div className="projectTime">07/01/02</div>
              </div>
            </div>
            <div className="project-modify">
              <i className="fa-solid fa-trash" onClick={handleModalOpen}></i>
              <i className="fa-solid fa-pen-to-square" onClick={() => updateProject(project)}></i>
            </div>
          </div>
          <div className="projectDescription">
            {project.description}
          </div>
          <div className="projectVisualContainer">
            <img src={generateImageUrl(project._id)} className="card-img-top" alt="..." />
          </div>
          <div className="projectEngagementContainer">
            <div className="project-love">
              <img src="./src/assets/images/Project Card/love.png" alt="Love" />
            </div>
            <div className="project-comment">
              <img src="./src/assets/images/Project Card/comment.png" alt="Comment" />
            </div>
            <div className="project-link">
              <img src="./src/assets/images/Project Card/link.png" alt="Link" />
            </div>
            <div className="project-details" onClick={() => showDetailProject(project)}>
              <img src="./src/assets/images/Project Card/info.png" alt="Details" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pro-card my-1">
        <img src={generateImageUrl(project._id)} style={{ height: "25vh" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title : {project.title}</h5>
          <p className="card-text mg">Project Link : </p>
          <div className="Youtube">
          <button type="button btn btn-primary" onClick={handleVideo}>Youtube Link</button>
          </div>
          <button className="btn btn-primary" onClick={() => showDetailProject(project)}>Details</button>
          <div>
            <i className="fa-solid fa-trash mx-1 mt-3" onClick={handleModalOpen}></i>
            <i className="fa-solid fa-pen-to-square mx-4 mt-2" onClick={() => updateProject(project)}></i>
          </div>
        </div>
      </div> */}

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal-card">
            <div className="card-content">
              <p className="card-heading">Project Details</p>
              <p className="card-description">Are you sure want to Delete project ?</p>
            </div>
            <div className="card-button-wrapper">
              <button className="card-button secondary" onClick={handleModalClose}>Cancel</button>
              <button className="card-button primary" onClick={handleDelete}>Delete</button>
            </div>
            <button className="exit-button" onClick={handleModalClose}>
              <svg height="20px" viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Video Overlay */}
      {/* {showVideo && (
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
                  <iframe className='youtube-Frame' width="350" height="315" src={project.youTubeLink} frameBorder="0" allowfullscreen></iframe>
                </p>
              </div>
              <div className="card-button-wrapper">
                <button className="card-button secondary" onClick={handleVideoClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

UserProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
  showDetailProject: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default UserProjectItem;
