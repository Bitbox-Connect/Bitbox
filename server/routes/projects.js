const express = require('express');
const router = express.Router();
const Project = require('../Models/Project');
const fetchuser = require('../middleware/fetchuser');
const { validationResult, body } = require('express-validator'); // Add 'body' here
const { 
    fetchallglobalprojects,
    fetchalluserprojects,
    addproject,
    updateproject,
    deleteproject,
    uploadProjectImage,
    getProjectImage 
} = require('../Controllers/projects');

// ROUTE 1 : Get All Global Projects : GET: "/api/projects/fetchallglobalprojects". No Login required
router.get('/fetchallglobalprojects', fetchallglobalprojects);

// ROUTE 2 : Get All User Projects : GET: "/api/projects/fetchalluserprojects". Login required
router.get('/fetchalluserprojects', fetchuser, fetchalluserprojects);

// ROUTE 3 : Add a New Project : POST: "/api/projects/addproject". Login required
router.post('/addproject', fetchuser, [
    body('title', 'Title is required').not().isEmpty(), // Now 'body' is defined
], addproject);

// ROUTE 4 : Update an Existing Project : PUT: "/api/projects/updateproject". Login required
router.put('/updateproject/:id', fetchuser, updateproject);

// ROUTE 5 : Delete Project : DELETE: "/api/projects/deleteproject". Login required
router.delete('/deleteproject/:id', fetchuser, deleteproject);

// ROUTE 6 : Upload Add a New Project : POST: "/api/projects/uploadProjectImage". Login required
router.post('/uploadProjectImage', fetchuser, uploadProjectImage);

// ROUTE 7 : Get All User Project : GET: "/api/projects/getProjectImage". Login required
router.get('/getProjectImage', fetchuser, getProjectImage);

module.exports = router;
