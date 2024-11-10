import PropTypes from 'prop-types';
import { useContext, useState, useRef } from 'react';
import projectContext from '../context/projectContext';
import { toast } from 'react-toastify';

function AddProject({ mode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const context = useContext(projectContext);
    const { addProject } = context;

    // Separate state for each input
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [gitHubLink, setGitHubLink] = useState("");
    const [youTubeLink, setYouTubeLink] = useState("");
    const [tags, setTags] = useState("");

    const refClose = useRef(null);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsLoading(true);
        try {
            if (title.trim() === "") {
                toast.error("Title is required");
                return;
            }

            // Validate GitHub Link
            if (gitHubLink && !/^https:\/\/github\.com\//.test(gitHubLink)) {
                toast.error("Please enter a valid GitHub URL.");
                return;
            }

            // Validate YouTube Link
            if (youTubeLink && !/^https:\/\/(www\.)?youtube\.com\/watch\?v=/.test(youTubeLink)) {
                toast.error("Please enter a valid YouTube URL.");
                return;
            }

            // Modify YouTube link to embed format
            const modifiedYouTubeLink = modifyYouTubeLink(youTubeLink);

            // Call addProject function from context
            await addProject(title, description, gitHubLink, modifiedYouTubeLink, tags);
            toast.success("Project Added Successfully");
            // console.log(title + " " + description + " " + gitHubLink + " " + youTubeLink)
            // Clear form
            setTitle("");
            setDescription("");
            setGitHubLink("");
            setYouTubeLink("");
            setTags("");

            // Close modal
            refClose.current.click();
        } catch (error) {
            toast.error("Failed to upload the project. Please try again.");
        } finally {
            setIsLoading(false); // End loading state
        }
    };

    // Function to modify YouTube link (from watch to embed URL)
    const modifyYouTubeLink = (link) => {
        if (link.includes("youtube.com/watch?v=")) {
            const videoId = link.split("youtube.com/watch?v=")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return link; // Return unmodified link if it doesn't match expected format
        }
    };

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
                        <div className={`relative top-22 md:top-12 w-full max-w-md p-6 mx-2 my-8 bg-white rounded-lg shadow-lg overflow-auto ${themeStyles}`} style={{ maxHeight: '800px', fontSize: '14px' }}>
                            {/* Close Button in Top Right */}
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-0 right-10 text-gray-500 hover:text-gray-700" style={{ fontSize: '42px' }}>
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
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
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
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter Project Description"
                                        required
                                    ></textarea>
                                </div>

                                {/* GitHub Link */}
                                <div>
                                    <label htmlFor="githubLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        GitHub Link
                                    </label>
                                    <input
                                        type="text"
                                        id="githubLink"
                                        name="githubLink"
                                        value={gitHubLink}
                                        onChange={(e) => setGitHubLink(e.target.value)}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter your project GitHub link"
                                        required
                                    />
                                </div>

                                {/* YouTube Link */}
                                <div>
                                    <label htmlFor="youtubeLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                        YouTube Link
                                    </label>
                                    <input
                                        type="text"
                                        id="youtubeLink"
                                        name="youtubeLink"
                                        value={youTubeLink}
                                        onChange={(e) => setYouTubeLink(e.target.value)}
                                        className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                        placeholder="Enter your project YouTube link"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center mt-4">
                                    <button
                                        disabled={isLoading || title.trim() === ""}
                                        type="submit"
                                        className={`w-full py-2 rounded-md text-lg font-semibold ${mode === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    >
                                        {isLoading ? "Uploading..." : "Upload Project"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

AddProject.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default AddProject;
