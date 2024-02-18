import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react'
import projectContext from '../context/projectContext';
import GlobalProjectItem from './GlobalProjectItem';
import UploadProject from './UploadProject';

const Projects = () => {
    const context = useContext(projectContext)
    const { projects, getGlobalProjects } = context;

    useEffect(() => {
        getGlobalProjects();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-2'>Welcome to OpenSource Community</h2>
            {projects.length === 0 && <UploadProject title="Click Here To Upload" />}
            <div className='row '>
                {projects.map((project) => {
                    return <GlobalProjectItem key={project._id} project={project} />;
                })}
            </div>
        </div>
    )
}

Projects.propTypes = {
    project: PropTypes.string
};

export default Projects
