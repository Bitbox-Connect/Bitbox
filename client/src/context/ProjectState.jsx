import PropTypes from 'prop-types';
import projectContext from "./projectContext.jsx";
// import { useState } from 'react';

const ProjectStates = (props) => {
  // const [project, setproject] = useState(0)
  
  const state = {
    "name": "Anuj",
    "class": "5b"
  }
  return (
    <projectContext.Provider value={state}>
      {props.children}
    </projectContext.Provider>
  )
}

ProjectStates.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProjectStates;
