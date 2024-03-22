import PropTypes from 'prop-types';
// import projectImg from '../assets/images/project.png'
import './css/ProjectItem.css'
import { useState } from 'react';

const GlobalProjectItem = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideo = () => {
    setShowVideo(true)
  }
  const handleVideoClose = () => {
    setShowVideo(false);
  };


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
          <div className="modal fade" id="exampleModalToggle" tabIndex="-1" aria-labelledby="exampleModalToggleLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Project Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Show a second modal and hide this one with the button below.
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">Close</button>
                </div>
              </div>
            </div>
          </div>
          <p className="card-text mg">Project Link : {project.gitHubLink}</p>
          {/* <p className="card-text mg">Youtube Link : {project.youTubeLink}</p> */}
          <a href={project.gitHubLink} target="_blank" className="card-link">Github Link</a>
          <div className="Youtube">
            <button type="button btn btn-primary" onClick={handleVideo}>Youtube Link</button>
          </div>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Details</button>
        </div>
      </div>
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
                  <iframe className='youtube-Frame' width="350" height="315" src={project.youTubeLink} frameBorder="0" allowfullscreen></iframe>
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
  )
}

// Props Vadilation
GlobalProjectItem.propTypes = {
  project: PropTypes.object
};

export default GlobalProjectItem
