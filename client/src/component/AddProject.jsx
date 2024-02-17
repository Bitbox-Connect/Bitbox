import project from '../assets/images/projects.png'

function AddProject() {
    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                <img src={project} className="card-img-top" alt={"project"} />
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Select Image to Upload</label>
                                        <input className="form-control" type="file" id="formFile" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Project Title</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Project Title Here" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Project Description</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Project Description Here" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Gihub Link</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Github Link Here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProject
