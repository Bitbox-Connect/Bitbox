import { useContext, useState, useRef } from 'react'
// import ProjectImg from '../assets/images/projects.png'
import projectContext from '../context/projectContext'
import PropTypes from 'prop-types';

function AddProject(props) {
    // Store the context value the useContext call of projectContext
    const context = useContext(projectContext);
    // Destructure the addProject from context
    const { addProject } = context;

    const [project, setproject] = useState({ title: "", description: "", link: "" });

    const refClose = useRef(null)

    const handleClick = () => {
        // Add project API call
        addProject(project.title, project.description, project.link);
        refClose.current.click();
        setproject({ title: "", description: "", link: "" })
        props.showAlert("Project Added Successfully", "success");
    }

    const onChange = (e) => {
        // Able to write in the input field
        setproject({ ...project, [e.target.name]: e.target.value });
    }

    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-secondary mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Upload
            </button>

            {/* Modal */}
            <div className="modal fade text-start" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Upload Project</h1>
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
                                        <label htmlFor="title" className="form-label">Project Title</label>
                                        <input type="text" className="form-control" id="title" name='title' value={project.title} onChange={onChange} placeholder="Enter Project Title Here *" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Project Description</label>
                                        <textarea type="text" className="form-control" id="description" name='description' value={project.description} onChange={onChange} placeholder="Enter Project Description Here" rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="link" className="form-label">Gihub Link</label>
                                        <input type="text" className="form-control" id="link" name='link' value={project.link} onChange={onChange} placeholder="Enter Github Link Here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={project.title.length < 1} type="button" className="btn btn-primary" onClick={handleClick}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Props Vadilation
AddProject.propTypes = {
    showAlert: PropTypes.func,
};

export default AddProject
