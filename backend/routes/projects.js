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

// ROUTE 2 : Get All User Projects : GET: "/api/projects/fetchalluserprojects". Login required
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

// ROUTE 3 : Add a new Projects : POST: "/api/projects/addproject". Login required
router.post('/addproject', fetchuser, [
    // Creating check vadilation for user credentials like title, description  

    // Name must be at least 3 chars long
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    // Password must be at least 5 chars long
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
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

module.exports = router