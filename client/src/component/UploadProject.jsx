import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';


const UploadProject = ({ mode }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        githubLink: '',
        deploymentLink: '',
        projectFiles: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/showcaseProjects/post-project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit project');
            }

            const data = await response.json();
            console.log('Project submitted successfully:', data);
            navigate('/projects');

            // Clear the form after submission
            setFormData({
                title: '',
                description: '',
                githubLink: '',
                deploymentLink: '',
            });

            // Optionally, you can redirect the user or display a success message
        } catch (error) {
            console.error('Error submitting project:', error);
        }
    };

    const themeStyles = mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';

    return (
        <div className={`container mx-auto p-6 mt-40 mb-12 max-w-3xl shadow-lg rounded-lg ${themeStyles}`}>
            <h1 className={`text-4xl font-bold text-center mb-8 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Upload Your Project
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Title */}
                <div>
                    <label htmlFor="title" className={`block text-lg font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Project Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                        placeholder="Enter your project title"
                        required
                    />
                </div>

                {/* Project Description */}
                <div>
                    <label htmlFor="description" className={`block text-lg font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Project Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                        placeholder="Enter a brief description of your project"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* GitHub Link */}
                <div>
                    <label htmlFor="githubLink" className={`block text-lg font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        GitHub Link
                    </label>
                    <input
                        type="url"
                        id="githubLink"
                        name="githubLink"
                        value={formData.githubLink}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                        placeholder="Enter your project GitHub link"
                        required
                    />
                </div>

                {/* Deployment Link */}
                <div>
                    <label htmlFor="deploymentLink" className={`block text-lg font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Deployment Link (Optional)
                    </label>
                    <input
                        type="url"
                        id="deploymentLink"
                        name="deploymentLink"
                        value={formData.deploymentLink}
                        onChange={handleChange}
                        className={`w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                        placeholder="Enter your project live demo link"
                    />
                </div>



                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-md text-lg font-semibold ${mode === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                        Upload Project
                    </button>
                </div>
            </form>
        </div>
    );
};

UploadProject.propTypes = {

    mode: PropTypes.string,

};

export default UploadProject;