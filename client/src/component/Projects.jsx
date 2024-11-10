import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Projects = ({ mode }) => {
    const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);  // State to store fetched projects
    const [loading, setLoading] = useState(true);  // State for loading state
    const [error, setError] = useState(null);  // State for error handling

    useEffect(() => {
        // Fetch the data from the API when the component mounts
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${VITE_SERVER_PORT}/api/showcaseProjects/all-projects`);
                setProjects(response.data);  // Store the fetched projects in state
                setLoading(false);  // Set loading to false after data is fetched
            } catch (err) {
                setError('Error fetching projects');
                setLoading(false);  // Set loading to false if an error occurs
            }
        };

        fetchProjects();  // Call the function to fetch data
    }, []);  // Empty dependency array means this effect runs once on mount

    const handleButtonClick = () => {
        navigate('/uploadProject');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div
            className={`container mx-auto p-6 mt-32 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        >
            <div className="relative mb-12">
                <h1 className="text-4xl font-extrabold text-center tracking-tight">
                    Projects Showcase
                </h1>
                <button
                    className={`absolute top-0 right-0 mt-4 mr-6 ${mode === 'dark'
                        ? 'text-white bg-gray-700 hover:bg-gray-600'
                        : 'text-gray-900 bg-gray-200 hover:bg-gray-300'
                        } px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300`}
                    onClick={handleButtonClick}
                >
                    Add Project
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                    >
                        <div className="p-6 space-y-4">
                            <h2 className={`text-2xl font-semibold mb-3 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                {project.title}
                            </h2>
                            <p className={`text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {project.description}
                            </p>
                            <div className="flex justify-start space-x-4 mt-6">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-white bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    GitHub
                                </a>
                                {project.deploymentLink && (
                                    <a
                                        href={project.deploymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-white bg-green-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Projects.propTypes = {
    mode: PropTypes.string,
};

export default Projects;
