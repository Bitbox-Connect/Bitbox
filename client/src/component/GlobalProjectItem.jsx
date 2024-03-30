import PropTypes from 'prop-types';
// import projectImg from '../assets/images/project.png'
import './css/ProjectItem.css'
import { useState } from 'react';

const GlobalProjectItem = (props) => {
  const { project, showDetailProject } = props;
 
  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
  };

  return (
    <div className='col-md-3'>
      <div className="pro-card my-2">
        {/* <img src={projectImg} className="card-img-top" alt="..." /> */}
        <img src={generateImageUrl(project._id)} style={{ height: "25vh" }} className="card-img-top" alt="..." />

        {/* Project Card */}
        <div className="card-body">
          <h5 className="card-title">Project Title : {project.title}</h5>
          <p className="card-text mg">Project Link : </p>
          {/* <p className="card-text mg">Youtube Link : {project.youTubeLink}</p> */}
          {/* <a href={project.gitHubLink} target="_blank" className="card-link">Github Link</a> */}
          {/* <div className="Youtube">
            <button type="button btn btn-primary" onClick={handleVideo}>Youtube Link</button>
          </div> */}
          <button className="btn btn-primary" onClick={() => showDetailProject(project)}>Details</button>
        </div>
     
      </div>

    </div>
  )
}

// Props Vadilation
GlobalProjectItem.propTypes = {
  project: PropTypes.object,
  showDetailProject: PropTypes.func.isRequired,
};

export default GlobalProjectItem
