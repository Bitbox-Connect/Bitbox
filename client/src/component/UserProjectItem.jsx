import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
// import projectImg from '../assets/images/project.png'
import './ProjectItem.css'
import { useContext } from 'react';
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
                    <div>
                        <i className="fa-solid fa-trash mx-1 mt-3" onClick={() => { deleteProject(project._id); props.showAlert("Deleted Successfully", "success") }}></i>
                        <i className="fa-solid fa-pen-to-square mx-4 mt-2" onClick={() => updateProject(project)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Props Vadilation
UserProjectItem.propTypes = {
    project: PropTypes.object,
    updateProject: PropTypes.func,
    showAlert: PropTypes.func
};

export default UserProjectItem
