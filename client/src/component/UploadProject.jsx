import './UploadProject.css'
import PropTypes from 'prop-types';
import AddProject from './AddProject';

function UploadProject(props) {
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <div className="body">
                        <h5 className="title">{props.title}</h5>
                        <AddProject />
                    </div>
                </div>
            </div>
        </div>
    )
}

UploadProject.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default UploadProject