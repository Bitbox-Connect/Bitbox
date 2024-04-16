import './css/ProjectCard.css'
// import { useState } from 'react';
import PropTypes from 'prop-types';
import avatarImg from '../assets/images/logo.png'
import FavourModalImg from '../assets/images/Modal Image/Favourite.png'
import commentModalImg from '../assets/images/Modal Image/comment.png'
import githubCardImg from '../assets/images/Modal Image/githubcard.png'
import DetailCardImg from '../assets/images/Modal Image/Details.png'

const CommunityCard = (props) => {
  const { project, showDetailProject } = props;
  // const [like,setLike]=useState(false)

  const HandleColor = () => {

  }

  // Function to generate a unique image URL for each project
  const generateImageUrl = (projectId) => {
    return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero for single-digit months
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero for single-digit days
    const hours = ('0' + date.getHours()).slice(-2); // Add leading zero for single-digit hours
    const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero for single-digit minutes

    // Format the date and time
    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  // Max Length for title and description
  const maxTitleLength = 30;
  const maxDescriptionLength = 75;

  return (
    <div className='col-md-4 my-3'>
      <div className="projectContainer" style={{ borderradius: props.mode === '10px' }} >
        <div className="projectBox" style={{ background: props.mode === 'dark' ? ' white' : '', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <div className="projectInfo">
            <div className="projectAvatar">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="projectText">
              <div className="projectTitle" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>{project.title.length > maxTitleLength ? project.title.slice(0, maxTitleLength) + '...' : project.title}</div>
              <div className="projectDetails">
                {/* <div className="projectUserName">Anuj Verma</div> */}
                <div className="projectTime" style={{ color: props.mode === 'dark' ? '#100000' : '', margin: "0" }}>{formatDate(project.date)}</div>
              </div>
            </div>
          </div>
          <div className="projectDescription" style={{ color: props.mode === 'dark' ? '#100000' : '' }}>
            {project.description.length > maxDescriptionLength ? project.description.slice(0, maxDescriptionLength) + '...' : project.description}
          </div>
          <div className="project-bottom-container">
            <div className="projectVisualContainer">
              <img src={generateImageUrl(project._id)} className="card-img-top" alt="..." />
            </div>
            <div className="projectEngagementContainer" >
              <div className="project-love" onClick={HandleColor}>
                <img src={FavourModalImg} alt="Love" />
              </div>
              <div className="project-comment">
                <img src={commentModalImg} alt="Comment" />
              </div>
              <div className="project-link">
                <img src={githubCardImg} href={project.gitHubLinkt} alt="Link" />
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
  showDetailProject: PropTypes.func,
  mode: PropTypes.string,
};

export default CommunityCard
