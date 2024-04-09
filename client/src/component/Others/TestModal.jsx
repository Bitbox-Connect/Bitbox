import { useContext, useState } from 'react';
import projectContext from '../context/projectContext';
import PropTypes from 'prop-types';
import '../css/ProjectCard.css';

const TestModal = (props) => {
  const { project, updateProject, showAlert } = props;
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

  return (
    <div className='col-md-3'>
      <div className="pro-card my-1">
        <img src={generateImageUrl(project._id)} style={{ height: "25vh" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project Title : {project.title}</h5>
          <p className="card-text mg">Project Link : {project.link}</p>
          <a href={project.link} target="_blank" className="card-link">Github Link</a>
          <a href={project.link} target="_blank" className="card-link p-5">Youtube Link</a>
          <button className="btn btn-primary" onClick={handleModalOpen}>Details</button>
          <div>
            <i className="fa-solid fa-trash mx-1 mt-3" onClick={() => { setShowModal(true); deleteProject(project._id); showAlert("Deleted Successfully", "success") }}></i>
            <i className="fa-solid fa-pen-to-square mx-4 mt-2" onClick={() => updateProject(project)}></i>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal &&
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Project Details</h1>
                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Show a second modal and hide this one with the button below.
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleModalClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

TestModal.propTypes = {
  project: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default TestModal;
