const Project = require('../Models/ProjectSchema.js');

exports.postProject = async (req, res) => {
    const { title, description, githubLink, deploymentLink } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
        const newProject = new Project({
            title,
            description,
            githubLink,
            deploymentLink,
        });

        await newProject.save();

        return res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating project', error });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching projects', error });
    }
};
