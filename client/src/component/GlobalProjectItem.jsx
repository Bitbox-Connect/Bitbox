import './css/ProjectItem.css'
import PropTypes from 'prop-types';
import avatarImg from '../assets/images/logo.png'


const GlobalProjectItem = (props) => {
  const { project, showDetailProject } = props;

  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
  };

  return (
    <div className='col-md-4 my-3'>
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
            <button className="btn btn-primary" onClick={() => showDetailProject(project)}>Details</button>
          </div>
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
