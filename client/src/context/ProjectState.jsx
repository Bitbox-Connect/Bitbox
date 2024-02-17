import PropTypes from 'prop-types';
import projectContext from "./projectContext.jsx";
import { useState } from 'react';

const ProjectStates = (props) => {
  const projectsInitial = [
    {
      "_id": "65cf7b61343405eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf713b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
    {
      "_id": "65c4234f7b6105eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf432347b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
    {
      "_id": "65cf7b4326105eab042ff65d0b2",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.instagram.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.634Z"
    },
    {
      "_id": "65cf7234324b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": "Mr Anuj",
      "description": "My Anuj Desc",
      "link": "https://www.gihub.com/",
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    },
  ]

  const [projects, setprojects] = useState(projectsInitial)

  // Read your project

  // Read globally project


  // Add a project
  const addProject = (title, description, link) => {
    // TODO : API CALL
    console.log("Adding a new project")
    const project = {
      "_id": "65cf7b6d05eab042ff65d0b4",
      "user": "65cf7b2305eab042ff65d0b0",
      "title": title,
      "description": description,
      "link": link,
      "__v": 0,
      "date": "2024-02-16T17:02:49.635Z"
    };
    setprojects(projects.concat(project))
  }

  // Delete a Note
  const deleteProject = (id) => {
    // TODO : API CALL
    console.log("Deleting the project with " + id);
    // If id equals to not equal to id store the value to newProjects
    const newProjects = projects.filter((project) => { return project._id !== id });
    setprojects(newProjects);
  }

  // Edit a Note
  const editProject = (id, title, description, tag) => {
    // TODO : API CALL

  }

  return (
    <projectContext.Provider value={{ projects, addProject, deleteProject, editProject }}>
      {props.children}
    </projectContext.Provider>
  )
}

ProjectStates.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProjectStates;
