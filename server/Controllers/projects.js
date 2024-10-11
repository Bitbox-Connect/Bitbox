const Project = require("../Models/Project");
const fetchallglobalprojects = async (req, res) => {
  try {
    // Find all the projects of the all user
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    // Give internal server error (500)
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const fetchalluserprojects = async (req, res) => {
  try {
    // Find projects associated only with the current user's public ID.
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (error) {
    // Give internal server error (500)
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const addproject = async (req, res) => {
  try {
    // Destructring the title, description, gitHubLink, youTubeLink from Database body
    const { title, description, gitHubLink, youTubeLink } = req.body;

    // If title is not provided, return a bad request response
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // Perform validation on request inputs
    const errors = validationResult(req);

    // If data is empty or not filled
    if (!errors.isEmpty()) {
      // Return a status 400 and return json of error in the array form
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new project and saved it
    const project = new Project({
      title,
      description,
      gitHubLink,
      youTubeLink,
      user: req.user.id,
    });

    // Save the project to the database
    const savedProject = await project.save();

    // Check if the project is saved successfully
    if (!savedProject) {
      return res.status(500).json({ error: "Project not added successfully" });
    }

    // If project is saved successfully, return a success response
    res.json(savedProject);
  } catch (error) {
    // Give internal server error (500)
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const updateproject = async (req, res) => {
  try {
    // Destructring the title, description, gitHubLink, youTubeLink from Database body
    const { title, description, gitHubLink, youTubeLink } = req.body;

    // Create a newNote object
    const newProject = {};

    // If there is title then update it.
    if (title) {
      newProject.title = title;
    }
    // If there is description then update it.
    if (description) {
      newProject.description = description;
    }
    // If there is gitHubLink then update it.
    if (gitHubLink) {
      newProject.gitHubLink = gitHubLink;
    }
    // If there is youTubeLink then update it.
    if (youTubeLink) {
      newProject.youTubeLink = youTubeLink;
    }

    // Find the project to be updated and update it --> return the promise
    let project = await Project.findById(req.params.id);
    // If project not found then send the 404 status
    if (!project) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this project
    if (project.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // Find by id and update the project from the existing project and set to the newProject object, the updated new information
    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: newProject },
      { new: true }
    );
    res.json(project);
  } catch (error) {
    // Give internal server error (500)
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const deleteproject = async (req, res) => {
  try {
    // Find the project to be deleted and delete it --> return the promise
    let project = await Project.findById(req.params.id);
    // If project not found then send the 404 status
    if (!project) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this project
    if (project.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // Find by id and update the project from the existing project and set to the newProject object, the updated new information
    project = await Project.findByIdAndDelete(req.params.id);
    res.json({ Success: "Project has been deleted", project: project });
  } catch (error) {
    // Give internal server error (500)
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const uploadProjectImage = async (req, res) => {
  try {
    // Destructring the projectImage from Database body
    const { projectImage } = req.body.projectImage;

    // Perform validation on request inputs
    const errors = validationResult(req);

    // If data is empty or not filled
    if (!errors.isEmpty()) {
      // Return a status 400 and return json of error in the array form
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new project and saved it
    const project = new Project.create({
      projectImage,
      user: req.user.id,
    });

    // Save the project to the database
    const savedProject = await project.save();

    // Check if the project is saved successfully
    if (!savedProject) {
      return res.status(500).json({ error: "Project not added successfully" });
    }

    // If project is saved successfully, return a success response
    res.json(savedProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProjectImage = async (req, res) => {
  try {
    const project = await Project.find({ user: req.user.id });
    // res.json(project.projectImage);
    res.json(project);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchallglobalprojects,
  fetchalluserprojects,
  addproject,
  updateproject,
  deleteproject,
  uploadProjectImage,
  getProjectImage,
};
