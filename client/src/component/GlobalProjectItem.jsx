import PropTypes from 'prop-types';
// import projectImg from '../assets/images/project.png'
import './ProjectItem.css'

const GlobalProjectItem = (props) => {
    // Destructure the project from props --> project come from the ProjectState
    const { project } = props;

    // Function to generate a unique image URL for each project
    const generateImageUrl = (projectId) => {
        return `https://source.unsplash.com/910x900/?computer/?coding/&${projectId}`;
    };

    return (
        <div className='col-md-4'>
            <div className="card my-2">
                {/* <img src={projectImg} className="card-img-top" alt="..." /> */}
                <img src={generateImageUrl(project._id)} style={{ height: "35vh" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Project Title : {project.title}</h5>
                    <p className="card-text mg">Project Description : {project.description}</p>
                    <p className="card-text mg">Project Link : {project.link}</p>
                    <a href={project.link} target="_blank" className="card-link">Github Link</a>
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
