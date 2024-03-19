import PropTypes from 'prop-types';
import { useContext } from 'react'
import projectContext from '../context/projectContext';
import GlobalProjectItem from './GlobalProjectItem';
import UploadProject from './UploadProject';

const Projects = (props) => {
    const context = useContext(projectContext)
    const { projects, getGlobalProjects } = context;
    getGlobalProjects();
    return (
        <div className='container Global-Sec-Container'>
            <div className="content">
                <h1 className='Heading-Page text-center mb-4'>Welcome to kaiyuan Community</h1>
            </div>
            {projects.length === 0 && <UploadProject title="Click Here To Upload" />}
            <div className='row'>
                {projects.map((project) => {
                    return <GlobalProjectItem showAlert={props.showAlert} key={project._id} project={project} />;
                })}
            </div>
        </div>
    )
}

// Props Vadilation
Projects.propTypes = {
    project: PropTypes.string,
    showAlert: PropTypes.func,
};

export default Projects
