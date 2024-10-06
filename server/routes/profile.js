const express = require("express");
const router = express.Router();
const Profile = require("../Models/Profile");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { createProfile,fetchProfile,updateProfile } = require("../Models/Profile");

// Route to create a new profile or update an existing one
router.post("/createprofile", fetchuser, createProfile);

// Route to fetch user's profile
router.get("/fetchprofile", fetchuser,fetchProfile);

// Route to update user's profile
router.put("/updateprofile", fetchuser,updateProfile);

module.exports = router;
