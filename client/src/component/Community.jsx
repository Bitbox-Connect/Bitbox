import GlobalProjects from "./GlobalProjects";
import PropTypes from 'prop-types';

function Community(props) {
  const { showAlert } = props;
  return (
    <div>
      <div className="container">
        <div className="content">
          <h1> Welcome to kaiyuan Community</h1>
          <p>Welcome to Open Source Code , an open-source community</p>
        </div>
      </div>
      <GlobalProjects showAlert={showAlert} />
    </div>
  )
}

// Props Vadilation
Community.propTypes = {
  showAlert: PropTypes.func,
};

export default Community
