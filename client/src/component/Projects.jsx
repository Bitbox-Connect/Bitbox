import PropTypes from 'prop-types';
import { useContext } from 'react'
import projectContext from '../context/projectContext';
import ProjectItem from './ProjectItem';

const Projects = () => {
    const context = useContext(projectContext)
    const { projects } = context;
    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-2'>Welcome to OpenSource Community</h2>
            <div className='row '>
                {projects.map((project) => {
                    return <ProjectItem key={project._id} project={project} />;
                })}
            </div>
        </div>
    )
}

Projects.propTypes = {
    project: PropTypes.string
};

export default Projects
