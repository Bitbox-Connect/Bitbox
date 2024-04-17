import PropTypes from 'prop-types';
import '../App.css'
function Alert(props) {
    const capitalize = (word) => {
        if (word === 'danger') {
            word = 'error'
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className='alert-bar'>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ color: props.mode === 'dark' ? 'black' : '' }}>
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

// Props Vadilation
Alert.propTypes = {
    message: PropTypes.string,
    mode: PropTypes.string,
    alert: PropTypes.object,
};

export default Alert
