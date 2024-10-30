const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');

router.post('/post-blog', blogController.postBlog);
router.get('/all-blog', blogController.getAllBlogs);
router.get('/getById/:id', blogController.getBlog);
// router.delete('/delete-all', blogController.deleteAllBlogs);
// router.delete('/delete-by-id/:id', blogController.deleteBlog);

module.exports = router; 