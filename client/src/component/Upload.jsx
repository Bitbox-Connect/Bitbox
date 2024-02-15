import './Upload.css'
import PropTypes from 'prop-types';
import AddProject from './AddProject';

function Upload(props) {
    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <div className="body">
                        <h5 className="title">{props.title}</h5>
                        <AddProject/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Upload.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Upload
