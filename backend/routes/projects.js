const express = require('express');
const router = express.Router();
const Project = require('../Models/Project')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')


// ROUTE 1 : Get All Global Projects : GET: "/api/projects/fetchallglobalprojects". Login required
router.get('/fetchallglobalprojects', async (req, res) => {
    try {
        // Find all the projects of the all user
        const projects = await Project.find()
        res.json(projects)
    }
    catch (error) {
        // Give internal server error (500) 
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2 : Get All User Project : GET: "/api/projects/fetchalluserprojects". Login required
router.get('/fetchalluserprojects', fetchuser, async (req, res) => {
    try {
        // Find projects associated only with the current user's public ID.
        const projects = await Project.find({ user: req.user.id })
        res.json(projects)
    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 3 : Add a New Project : POST: "/api/projects/addproject". Login required
router.post('/addproject', fetchuser, async (req, res) => {
    try {
        // Destructring the title, description, link from Database body
        const { title, description, link } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        // If data is empty or not filled
        if (!errors.isEmpty()) {
            // Return a status 400 and return json of error in the array form
            return res.status(400).json({ errors: errors.array() });
        }

        // Create a new project and saved it
        const project = new Project({
            title, description, link, user: req.user.id
        })
        // This code return a promise --> Save the project 
        const savedProject = await project.save()
        res.json(savedProject)
    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 4 : Update an Existing Project : PUT: "/api/projects/updateproject". Login required
router.put('/updateproject/:id', fetchuser, async (req, res) => {
    try {
        // Destructring the title, description, link from Database body
        const { title, description, link } = req.body;

        // Create a newNote object
        const newProject = {};

        // If there is title then update it.
        if (title) { newProject.title = title };
        // If there is description then update it.
        if (description) { newProject.description = description };
        // If there is link then update it.
        if (link) { newProject.link = link };

        // Find the project to be updated and update it --> return the promise 
        let project = await Project.findById(req.params.id)
        // If project not found then send the 404 status
        if (!project) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this project
        if (project.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        // Find by id and update the project from the existing project and set to the newProject object, the updated new information 
        project = await Project.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true });
        res.json(project);
    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 5 : Delete Project : DELETE: "/api/projects/deleteproject". Login required
router.delete('/deleteproject/:id', fetchuser, async (req, res) => {
    try {
        // Destructring the title, description, link from Database body
        const { title, description, link } = req.body;

        // Find the project to be deleted and delete it --> return the promise 
        let project = await Project.findById(req.params.id)
        // If project not found then send the 404 status
        if (!project) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this project
        if (project.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        // Find by id and update the project from the existing project and set to the newProject object, the updated new information 
        project = await Project.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Project has been deleted", project: project });
    }
    catch (error) {
        // Give internal server error (500)
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router