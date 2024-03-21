import PropTypes from 'prop-types';
// import projectImg from '../assets/images/project.png'
import './css/ProjectItem.css'

const GlobalProjectItem = (props) => {
  // Destructure the project from props --> project come from the ProjectState
  const { project } = props;

  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
  };

  return (
    <div className='col-md-3'>
      <div className="pro-card my-2">
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
          <p className="card-text mg">Project Link : {project.link}</p>
          <a href={project.link} target="_blank" className="card-link">Github Link</a>
          <a href={project.link} target="_blank" className="card-link p-5">Youtube Link</a>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Details</button>
        </div>
      </div>
    </div>
  )
}

// Props Vadilation
GlobalProjectItem.propTypes = {
  project: PropTypes.object
};

export default GlobalProjectItem
