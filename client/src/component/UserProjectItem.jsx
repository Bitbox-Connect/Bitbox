import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import './css/ProjectItem.css';
import { useContext, useState } from 'react';

const UserProjectItem = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideo = () => {
    setShowVideo(true)
  }
  const handleVideoClose = () => {
    setShowVideo(false);
  };
  const { project, updateProject } = props;
  const context = useContext(projectContext);
  const { deleteProject } = context;

  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?coding/?computer/&${projectId}`;
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteProject(project._id);
    props.showAlert("Deleted Successfully", "success");
    handleModalClose();
  };

  return (
    <div className='col-md-3'>
      <div className="pro-card my-1">
        <img src={generateImageUrl(project._id)} style={{ height: "25vh" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title : {project.title}</h5>
          <p className="card-text mg">Project Link : {project.link}</p>
          <a href={project.link} target="_blank" className="card-link">Github Link</a>
          <div className="Youtube">
            <button type="button btn btn-primary" onClick={handleVideo}>Youtube Link</button>
          </div>
          <div class="modal fade" id="exampleModalToggle" tabindex="-1" aria-labelledby="exampleModalToggleLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Project Details</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Show a second modal and hide this one with the button below.
                </div>
                <div class="modal-footer">
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Close</button>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Details</button>
          {/* <button className="btn btn-primary" onClick={handleModalOpen}>Project Details</button> */}
          <div>
            <i className="fa-solid fa-trash mx-1 mt-3" onClick={handleModalOpen}></i>
            <i className="fa-solid fa-pen-to-square mx-4 mt-2" onClick={() => updateProject(project)}></i>
          </div>
        </div>
      </div>

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
                  <iframe className='youtube-Frame' width="350" height="315" src="https://www.youtube.com/embed/HYb4FGDTBmw" frameborder="0" allowfullscreen></iframe>
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
  );
};

UserProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default UserProjectItem;
