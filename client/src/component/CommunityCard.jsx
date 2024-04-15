import './css/ProjectCard.css'
import PropTypes from 'prop-types';
import avatarImg from '../assets/images/logo.png'
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import LikeModalImg from '../assets/images/Modal Image/Like.png'
import DetailCardImg from '../assets/images/Modal Image/Details.png'

const CommunityCard = (props) => {
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
                <div className="projectTime">07/01/02 | 09:30</div>
              </div>
            </div>
          </div>
          <div className="projectDescription">
            {project.description}
          </div>
          <div className="project-bottom-container">
            <div className="projectVisualContainer">
              <img src={generateImageUrl(project._id)} className="card-img-top" alt="..." />
            </div>
            <div className="projectEngagementContainer">
              <div className="project-love">
                <img src={FavourModalImg} alt="Love" />
              </div>
              <div className="project-comment">
                <img src={commentModalImg} alt="Comment" />
              </div>
              <div className="project-link">
                <img src={LikeModalImg} alt="Link" />
              </div>
              <div className="project-details" onClick={() => showDetailProject(project)}>
                <img src={DetailCardImg} alt="Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Props Vadilation
CommunityCard.propTypes = {
  project: PropTypes.object,
  showDetailProject: PropTypes.func.isRequired,
};

export default CommunityCard
