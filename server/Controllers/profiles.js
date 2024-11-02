const Profile = require("../Models/Profile");

const createProfile = async (req, res) => {
  const { name, phone, college, address } = req.body;
  const profileFields = {
    name,
    phone,
    college,
    address,
    user: req.user.id,
  };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error("Error saving/updating profile:", error);
    res.status(500).json({ error: "Profile not added/updated successfully" });
  }
};

const fetchProfile = async (req, res) => {
  try {
    // Find the user's profile by user ID and select only the required fields
    const profile = await Profile.findOne(
      { user: req.user.id },
      "name username" // Adjust this to include any other fields you need
    );

    // Check if the profile was found
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Return only name and username in the response
    res.json({
      name: profile.name,
      username: profile.username,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const updateprofile = async (req, res) => {
  const { name, phone, college, address } = req.body;
  const profileFields = {
    name,
    phone,
    college,
    address,
  };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      profile = new Profile({ ...profileFields, user: req.user.id });
      await profile.save();
      return res.json(profile);
    }

    profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true }
    );

    if (!profile) {
      return res
        .status(500)
        .json({ error: "Profile not updated successfully" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = {
  createProfile,
  fetchProfile,
  updateprofile,
};
