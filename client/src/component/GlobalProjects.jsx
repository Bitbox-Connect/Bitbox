import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react'
import projectContext from '../context/projectContext';
import GlobalProjectItem from './GlobalProjectItem';
import UploadProject from './UploadProject';
import { useNavigate } from 'react-router-dom';

const Projects = (props) => {
    const context = useContext(projectContext)
    let navigate = useNavigate();
    const { projects, getGlobalProjects } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getGlobalProjects();
        }
        else {
            navigate('/login')
        }

        // eslint-disable-next-line
    }, [])
    return (
        <div className='container'>
            <div className="content">
                <h1>Welcome to kaiyuan Community</h1>
                <div className='text-center'>Welcome to Open Source Code , an open-source community</div>
            </div>
            {projects.length === 0 && <UploadProject title="Click Here To Upload" />}
            <div className='row '>
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
