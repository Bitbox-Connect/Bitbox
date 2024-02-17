import PropTypes from 'prop-types';

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}

Alert.propTypes = {
    message: PropTypes.string
};

export default Alert
