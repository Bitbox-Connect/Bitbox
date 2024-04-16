import { useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from "./projectContext.jsx";
// import SearchProjects from "../component/SearchProject.jsx";

const ProjectStates = (props) => {
  const host = 'http://localhost:5000';
  const projectsInitial = [];

  const [userProjects, setUserProjects] = useState(projectsInitial);
  const [globalProjects, setGlobalProjects] = useState(projectsInitial); // Initialize global projects state

  // Get All Globally Project
  const getGlobalProjects = async () => {
    // API CALL - Fetch All Global Projects
    const response = await fetch(`${host}/api/projects/fetchallglobalprojects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    setGlobalProjects(json.reverse());
  }

  // Get All Your Project
  const getUserProjects = async () => {
    // API CALL - Fetch All User Projects
    const response = await fetch(`${host}/api/projects/fetchalluserprojects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setUserProjects(json.reverse());
  }

  // Add a Project
  const addProject = async (title, description, gitHubLink, youTubeLink) => {
    // API CALL  - Add Projects
    const response = await fetch(`${host}/api/projects/addproject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, gitHubLink, youTubeLink }),
    });
    const project = await response.json();
    setUserProjects([project, ...userProjects]);
    props.setProgress(100)
  }

  // Delete a Project
  const deleteProject = async (id) => {
    // API CALL - Delete Project
    const response = await fetch(`${host}/api/projects/deleteproject/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(),
    });
    const json = await response.json();
    console.log(json)
    const newProjects = userProjects.filter((project) => { return project._id !== id });
    setUserProjects(newProjects);
  }

  // Edit a Project
  const editProject = async (id, title, description, gitHubLink, youTubeLink) => {
    // API CALL - Update Project
    const response = await fetch(`${host}/api/projects/updateproject/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, gitHubLink, youTubeLink }),
    });
    const json = await response.json();
    console.log(json)

    let newProjects = JSON.parse(JSON.stringify(userProjects));
    for (let index = 0; index < newProjects.length; index++) {
      const element = newProjects[index];
      if (element._id === id) {
        newProjects[index].title = title;
        newProjects[index].description = description;
        newProjects[index].gitHubLink = gitHubLink;
        newProjects[index].youTubeLink = youTubeLink;
        break;
      }
    }
    setUserProjects(newProjects)
  }

  // Function to filter projects based on search query
  // const handleSearch = (searchQuery) => {
  //   // Implement your search logic here if needed
  //   // For now, we're just setting the searchQuery state
  // };

  return (
    <projectContext.Provider value={{ userProjects, globalProjects, getUserProjects, getGlobalProjects, addProject, deleteProject, editProject }}>
      {/* <SearchProjects onSearch={handleSearch} /> */}
      {props.children}
    </projectContext.Provider>
  )
}

ProjectStates.propTypes = {
  children: PropTypes.node.isRequired,
  setProgress: PropTypes.string,
};

export default ProjectStates;
