// Import required modules and middleware
const express = require('express');
const router = express.Router();
const Profile = require('../Models/Profile'); // Corrected import
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// Route to create a new profile or update an existing one
router.post('/createprofile', fetchuser, async (req, res) => { // Assuming fetchuser middleware populates req.user
    // Extract profile details from request body
    const { name, phone, college, address } = req.body;

    // Create profile fields object
    const profileFields = {
        name,
        phone,
        college,
        address,
        user: req.user.id // Associate profile with the user
    };

    try {
        // Check if profile already exists for the user
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            // If profile exists, update it
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true } // Return updated profile
            );
            return res.json(profile);
        }

        // If profile does not exist, create a new one
        profile = new Profile(profileFields);
        await profile.save(); // Save the new profile
        res.json(profile); // Return the newly created profile
    } catch (error) {
        console.error('Error saving/updating profile:', error);
        res.status(500).json({ error: "Profile not added/updated successfully" });
    }
});

// Route to fetch user's profile
router.get('/fetchprofile', fetchuser, async (req, res) => {
    try {
        // Find the profile associated with the current user
        const profile = await Profile.findOne({ user: req.user.id });
        res.json(profile); // Return the profile
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update user's profile
router.put('/updateprofile', fetchuser, async (req, res) => {
    // Extract updated profile details from request body
    const { name, phone, college, address } = req.body;

    try {
        // Build a profile object based on the fields submitted
        const profileFields = {};
        if (name) profileFields.name = name;
        if (phone) profileFields.phone = phone;
        if (college) profileFields.college = college;
        if (address) profileFields.address = address;

        // Find the profile associated with the current user
        let profile = await Profile.findOne({ user: req.user.id });

        // If profile does not exist, create a new one
        if (!profile) {
            profile = new Profile(profileFields);
            profile.user = req.user.id; // Associate profile with the user
            await profile.save(); // Save the new profile
            return res.json(profile); // Return the newly created profile
        }

        // If profile exists, update it with the new fields
        profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true } // Return updated profile
        );

        res.json(profile); // Return the updated profile
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
