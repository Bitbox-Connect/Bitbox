import PropTypes from 'prop-types';
import { useContext, useRef, useState } from 'react'
import projectContext from '../context/projectContext';
import GlobalProjectItem from './GlobalProjectItem';
import UploadProject from './UploadProject';

const Projects = (props) => {
    const [project, setproject] = useState({ id: "", etitle: "", edescription: "", egitHubLink: "", eyouTubeLink: "" });

    const context = useContext(projectContext)
    const { projects, getGlobalProjects } = context;
    getGlobalProjects();

    const refDetails = useRef(null)

    const showDetailProject = (currentProject) => {
        refDetails.current.click();
        // Set the title, description and link to edit modal 
        setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, egitHubLink: currentProject.gitHubLink, eyouTubeLink: currentProject.youTubeLink })
    }
    return (
        <>
            {/* Detail Button trigger modal */}
            <button ref={refDetails} className="btn" data-bs-toggle="modal" data-bs-target="#detailToggle">

            </button>

            {/* Project Details Modal */}
            <div className="modal fade" id="detailToggle" tabIndex="-1" aria-labelledby="detailToggle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Project Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {project.edescription ? (<p>{project.edescription}</p>) : (<p>No description to display</p>)}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailToggle">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container Global-Sec-Container'>
                <div className="content">
                    <h1 className='Heading-Page text-center mb-4'>Welcome to BitBox Community</h1>
                </div>
                {projects.length === 0 && <UploadProject title="Click Here To Upload" />}
                <div className='row'>
                    {projects.map((project) => {
                        return <GlobalProjectItem showAlert={props.showAlert} showDetailProject={showDetailProject} key={project._id} project={project} />;
                    })}
                </div>
            </div>
        </>
    )
}

// Props Vadilation
Projects.propTypes = {
    project: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Projects
