import GlobalProjects from "./GlobalProjects";
import PropTypes from 'prop-types';

const Home = (props) => {
    const { showAlert } = props;
    return (
        <div>
            <GlobalProjects showAlert={showAlert} />
        </div>
    )
}

// Props Vadilation
Home.propTypes = {
    showAlert: PropTypes.func,
};

export default Home
