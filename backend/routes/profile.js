const express = require('express');
const router = express.Router();
const ProfileSchema = require('../Models/Profile');

// POST new profile
router.post('/editprofile', async (req, res) => {
    const { name, phone, college, Address } = req.body;
    const profile = new ProfileSchema({
        name,
        phone,
        college,
        address: Address,
        // Assuming you have authentication middleware that sets req.user
        user: req.user.id
    });

    try {
        const savedProfile = await profile.save();
        res.json(savedProfile);
    } catch (error) {
        console.error('Error saving profile:', error);
        res.status(500).json({ error: "Profile not added successfully" });
    }
});

module.exports = router;
