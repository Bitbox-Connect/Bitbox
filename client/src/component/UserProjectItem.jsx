import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
import './css/ProjectItem.css';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserProjectItem = (props) => {
  // Destructure the project and updateProject from props --> project come from the ProjectState
  const { project, updateProject } = props;
  // Store the context value the useContext call of projectContext
  const context = useContext(projectContext);
  // Destructure the addProject from context
  const { deleteProject } = context;

  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?coding/?computer/&${projectId}`;
  };

  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal opening
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // Function to handle modal closing
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='col-md-3'>
      <div className="pro-card my-1">
        {/* <img src={projectImg} className="card-img-top" alt="..." /> */}
        <img src={generateImageUrl(project._id)} style={{ height: "25vh" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title : {project.title}</h5>
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


          <p className="card-text mg">Project Link : {project.link}</p>
          <a href={project.link} target="_blank" className="card-link">Github Link</a>
          <a href={project.link} target="_blank" className="card-link p-5">Youtube Link</a>
          <div>
            <i className="fa-solid fa-trash mx-1 mt-3" onClick={() => { deleteProject(project._id); props.showAlert("Deleted Successfully", "success") }}></i>
            <i className="fa-solid fa-pen-to-square mx-4 mt-2" onClick={() => updateProject(project)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

// Props Validation
UserProjectItem.propTypes = {
  project: PropTypes.object,
  updateProject: PropTypes.func,
  showAlert: PropTypes.func
};

export default UserProjectItem;
