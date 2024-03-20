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
          <Button variant="primary" onClick={handleModalOpen}>
            Description
          </Button>
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aperiam corrupti consectetur labore officia veritatis optio distinctio culpa deleniti consequuntur, in voluptate reprehenderit architecto dicta debitis nam! Esse, nam sit.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary">
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
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
