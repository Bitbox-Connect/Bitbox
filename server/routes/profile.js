const express = require("express");
const router = express.Router();
const Profile = require("../Models/Profile");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { createProfile, fetchProfile, updateprofile } = require("../Controllers/profiles");
const {subscribeNewsletter} = require("../Controllers/OtherController");
// Route to create a new profile or update an existing one
router.post("/createprofile", fetchuser, createProfile);

// Route to fetch user's profile
router.get("/fetchprofile", fetchuser,fetchProfile);

// Route to update user's profile
router.put("/updateprofile", fetchuser,updateprofile);



router.post('/subscribe',subscribeNewsletter)

module.exports = router;
