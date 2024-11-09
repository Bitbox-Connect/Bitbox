import PropTypes from 'prop-types';
import { useContext, useState, useRef, useEffect } from 'react';
import projectContext from '../context/projectContext';
import { toast } from 'react-toastify';

// Assets
// import projectDummyImage from '../assets/images/Others/projects.png'
function AddProject({ mode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const context = useContext(projectContext);
    // Destructure the addProject from context
    const { addProject } = context;

    // image, date, title, description, gitHubLink, youTubeLink, tags
    const [project, setProject] = useState({ image: "", date: "", title: "", description: "", gitHubLink: "", youTubeLink: "", tags: "" });
    const refClose = useRef(null);

    const handleSubmit = () => {
        if (project.title.trim() === "") {
            toast.error("Title is required");
            return;
        }
        // Modify YouTube link
        const modifiedYouTubeLink = modifyYouTubeLink(project.youTubeLink);
        // Add project API call
        addProject(project.title, project.description, project.gitHubLink, modifiedYouTubeLink, project.tags); // Pass modifiedYouTubeLink instead of project.youTubeLink
        refClose.current.click();
        setProject({ title: "", description: "", gitHubLink: "", youTubeLink: "" });
        toast.success("Project Added Successfully");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter key press
            handleSubmit(); // Manually handle the click event
        }
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && project.title.trim() !== "") {
                handleSubmit();
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

    // Upload Project Modal
    const themeStyles = mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';

    return (
        <div>
            <div className="container mx-auto flex justify-center">
                {/* Button to open the modal */}
                <button type="button" className="btn btn-primary flex justify-center items-center mx-2" style={{ height: '45px' }} onClick={() => setIsModalOpen(true)}>
                    Upload
                </button>

                {/* Modal Overlay */}
                {isModalOpen && (
                    <div className="fixed flex z-[99999999999] justify-center items-center inset-0 bg-black bg-opacity-50">
                        {/* Modal Content */}
                        <div
                            className={`relative top-22 md:top-12 w-full max-w-md p-6 mx-2 my-8 bg-white rounded-lg shadow-lg overflow-auto ${themeStyles}`}
                            style={{ maxHeight: '800px', fontSize: '14px' }}
                        >
                            {/* Close Button in Top Right */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-0 right-10 text-gray-500 hover:text-gray-700"
                                style={{ fontSize: '42px' }}
                            >
                                &times;
                            </button>

                            <h1 className={`text-3xl font-bold text-center mt-6 mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Upload Your Project
                            </h1>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Project Title */}
                                <div>
                                    <label htmlFor="title" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Project Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={project.title}
                                        onChange={onChange}
                                        onKeyDown={handleKeyDown}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter your project title"
                                        required
                                    />
                                </div>

                                {/* Project Description */}
                                <div>
                                    <label htmlFor="description" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Project Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={project.description}
                                        onChange={onChange}
                                        onKeyDown={handleKeyDown}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter Project Title Here *"
                                        required
                                    ></textarea>
                                </div>

                                {/* GitHub Link */}
                                <div>
                                    <label htmlFor="githubLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        GitHub Link
                                    </label>
                                    <input
                                        type="url"
                                        id="githubLink"
                                        name="githubLink"
                                        value={project.gitHubLink}
                                        onChange={onChange}
                                        onKeyDown={handleKeyDown}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter your project GitHub link"
                                        required
                                    />
                                </div>

                                {/* Youtube Link */}
                                <div>
                                    <label htmlFor="youtubeLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Youtube Link
                                    </label>
                                    <input
                                        type="url"
                                        id="youtubeLink"
                                        name="youtubeLink"
                                        value={project.youTubeLink}
                                        onChange={onChange}
                                        onKeyDown={handleKeyDown}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter your project YouTube link"
                                        required
                                    />
                                </div>    

                                {/* Submit Button */}
                                <div className="text-center mt-4">
                                    <button
                                        disabled={project.title.trim() === ""}
                                        type="submit"
                                        className={`w-full py-2 rounded-md text-lg font-semibold ${mode === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    >
                                        Upload Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

AddProject.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default AddProject;