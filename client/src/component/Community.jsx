import GlobalProjects from "./GlobalProjects";
import PropTypes from 'prop-types';

function Community(props) {
  const { showAlert } = props;
  return (
    <div>
      <GlobalProjects showAlert={showAlert} />
    </div>
  )
}

// Props Vadilation
Community.propTypes = {
  showAlert: PropTypes.func,
};

export default Community
