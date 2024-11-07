const express = require('express');
const router = express.Router();
const projectController = require('../Controllers/projectController.js');

router.post('/post-project', projectController.postProject);
router.get('/all-projects', projectController.getAllProjects);


module.exports = router;
