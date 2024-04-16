import { useContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../context/projectContext';
// ASSETS
// import projectDummyImage from '../assets/images/Others/projects.png'
import closeModalImg from '../assets/images/Modal Image/Close.png'

function AddProject(props) {
    const context = useContext(projectContext);
    // Destructure the addProject from context
    const { addProject } = context;

    // image, date, title, description, gitHubLink, youTubeLink, tags
    const [project, setProject] = useState({ image: "", date: "", title: "", description: "", gitHubLink: "", youTubeLink: "", tags: "" });
    const refClose = useRef(null);

    const handleClick = () => {
        if (project.title.trim() === "") {
            props.showAlert("Title is required", "danger");
            return;
        }
        // Modify YouTube link
        const modifiedYouTubeLink = modifyYouTubeLink(project.youTubeLink);
        // Add project API call
        addProject(project.title, project.description, project.gitHubLink, modifiedYouTubeLink, project.tags); // Pass modifiedYouTubeLink instead of project.youTubeLink
        refClose.current.click();
        setProject({ title: "", description: "", gitHubLink: "", youTubeLink: "" });
        props.showAlert("Project Added Successfully", "success");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter key press
            handleClick(); // Manually handle the click event
        }
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && project.title.trim() !== "") {
                handleClick();
            }
        };

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
        // eslint-disable-next-line
    }, [project.title]); // Only re-run the effect if project.title changes

    const onChange = (e) => {
        // Able to write in the input field
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    // Function to modify YouTube link
    const modifyYouTubeLink = (link) => {
        if (link.includes("youtube.com/watch?v=")) {
            const videoId = link.split("youtube.com/watch?v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return link; // Return unmodified link if it doesn't match expected format
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-primary mx-2" style={{ height: '45px' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Upload
            </button>
            {/* Upload Project Modal */}
            <div className="modal fade text-start" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black', outline: props.mode === 'dark' ? '1px solid white' : '' }}>
                    <div className="modal-content" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-3" id="exampleModalLabel" style={{ color: props.mode === 'dark' ? 'white' : '' }}>Upload Project</h1>
                            {/* close button */}
                            <div className="close-modal-button" data-bs-dismiss="modal" aria-label="Close" >
                                <img src={closeModalImg} title='close' alt="close" style={{ background: props.mode === 'dark' ? 'white' : '', outline: props.mode === 'dark' ? '1px solid white' : '' }} />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="pro-card">
                                <div className="card-body">
                                    {/* <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Upload Image</label>
                                        <div className='d-flex justify-content-center'>
                                            <img
                                                src={projectDummyImage}
                                                className="avatar w-100"
                                                alt="project"
                                            />
                                        </div>
                                        <div className='d-flex justify-content-around align-items-center mt-2'>
                                            <input type="file" className="form-control" style={{ width: "80%" }} />
                                            <button className='btn btn-secondary h-50'>Upload</button>
                                        </div>
                                    </div> */}
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Project Title</label>
                                        <input autoFocus type="text" className="form-control" id="title" name='title' value={project.title} onChange={onChange} placeholder="Enter Project Title Here *" required onKeyDown={handleKeyDown} style={{ color: props.mode === 'dark' ? 'black' : '', }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Project Description</label>
                                        <textarea type="text" className="form-control" id="description" name='description' value={project.description} onChange={onChange} placeholder="Enter Project Description Here" rows="3" onKeyDown={handleKeyDown} style={{ color: props.mode === 'dark' ? 'black' : '', }}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="gitHubLink" className="form-label">Github Link</label>
                                        <input type="text" className="form-control" id="gitHubLink" name='gitHubLink' value={project.gitHubLink} onChange={onChange} placeholder="Enter Github Link Here" onKeyDown={handleKeyDown} style={{ color: props.mode === 'dark' ? 'black' : '', }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="youTubeLink" className="form-label">YouTube Link</label>
                                        <input type="text" className="form-control" id="youTubeLink" name='youTubeLink' value={project.youTubeLink} onChange={onChange} placeholder="Enter YouTube Link Here" onKeyDown={handleKeyDown} style={{ color: props.mode === 'dark' ? 'black' : '', }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={project.title.trim() === ""} type="button" className="btn btn-primary" onClick={handleClick}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddProject.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default AddProject;
