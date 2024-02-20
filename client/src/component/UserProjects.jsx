import { useContext, useEffect, useRef, useState } from 'react'
import projectContext from '../context/projectContext';
import UserProjectItem from './UserProjectItem';
// import ProjectImg from '../assets/images/projects.png'
import UploadProject from './UploadProject';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const UserProjects = (props) => {
    const context = useContext(projectContext)
    let navigate = useNavigate();
    const { projects, getUserProjects, editProject } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUserProjects();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)

    const [project, setproject] = useState({ id: "", etitle: "", edescription: "", elink: "" });

    const updateProject = (currentProject) => {
        ref.current.click();
        // Set the title, description and link to edit modal 
        setproject({ id: currentProject._id, etitle: currentProject.title, edescription: currentProject.description, elink: currentProject.link })
    }

    const handleClick = () => {
        editProject(project.id, project.etitle, project.edescription, project.elink)
        refClose.current.click();
        props.showAlert("Project Updated Successfully", "success")
    }

    const onChange = (e) => {
        // Able to write in the input field
        setproject({ ...project, [e.target.name]: e.target.value });
    }

    return (
        <>
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#newModal">

            </button>

            {/* Modal */}
            <div className="modal fade text-start" id="newModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Project</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                {/* <img src={ProjectImg} className="card-img-top" alt={"project"} /> */}
                                <div className="card-body">
                                    {/* <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Select Image to Upload</label>
                                        <input className="form-control" type="file" id="formFile" />
                                    </div> */}
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Project Title</label>
                                        <input type="text" className="form-control" id="etitle" name='etitle' value={project.etitle} onChange={onChange} placeholder="Enter Project Title Here" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">Project Description</label>
                                        <textarea type="text" className="form-control" id="edescription" name='edescription' value={project.edescription} onChange={onChange} placeholder="Enter Project Description Here" rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="elink" className="form-label">Gihub Link</label>
                                        <input type="text" className="form-control" id="elink" name='elink' value={project.elink} onChange={onChange} placeholder="Enter Github Link Here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2 className='text-center mb-4 mt-2'>My Uploaded Projects</h2>
                {projects.length === 0 && <UploadProject showAlert={props.showAlert} title="Click Here To Upload" />}
                <div className='row my-3'>
                    {projects.map((project) => {
                        return <UserProjectItem key={project._id} updateProject={updateProject} project={project} showAlert={props.showAlert} />;
                    })}
                </div>
            </div>
        </>
    )
}

// Props Vadilation
UserProjects.propTypes = {
    showAlert: PropTypes.func,
};

export default UserProjects
