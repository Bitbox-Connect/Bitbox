import PropTypes from 'prop-types';
import projectContext from "./projectContext.jsx";
import { useState } from 'react';
const ProjectStates = (props) => {
  const projectsInitial = [
    {
      "_id": "65cf7b6105eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf7b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
    {
      "_id": "65cf7b6105eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf7b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
    {
      "_id": "65cf7b6105eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf7b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
  ]

  const [projects, setprojects] = useState(projectsInitial)

  return (
    <projectContext.Provider value={{ projects, setprojects }}>
      {props.children}
    </projectContext.Provider>
  )
}

ProjectStates.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProjectStates;
