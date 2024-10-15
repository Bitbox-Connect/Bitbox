const express = require("express");
var jwt = require("jsonwebtoken");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
const {
  forgetpassword,
  verifyToken,
  createUser,
  ResetPasswordByEmail,
} = require("../Controllers/auth");

// Configure Firebase OAuth2Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const JWT_SECRET = "mern$Open$SourceProject";

// Route for Google Firebase authentication
router.post("/googlelogin", async (req, res) => {
  try {
    const { tokenId } = req.body;
    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email_verified, email, name } = response.payload;

    if (email_verified) {
      let user = await User.findOne({ email });
      if (!user) {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(email + process.env.JWT_SECRET, salt);
        user = await User.create({
          name: name,
          email: email,
          password: secPass,
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, authtoken });
    } else {
      res
        .status(400)
        .json({ success: false, error: "Google authentication failed." });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 1 : Create a User using : POST: "/api/auth/createuser". No login required

// ROUTE 2 : Create a User using : POST: "/api/auth/login". No login required
router.post(
  "/login",
  [
    // Validate user credentials
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find user by email
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Compare provided password with stored password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Create JWT payload
      const data = {
        user: {
          id: user.id,
        },
      };

      // Sign the JWT
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Set the token as a cookie and send a response
      res.cookie('authtoken', authtoken, { httpOnly: true }); // Set cookie
      success = true;
      return res.status(200).json({ success }); // Return success response

    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
  }
);


// ROUTE 3 : Get Loggedin User Details : GET: "/api/auth/getuser". Login required
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    // Below line is promise so await it. Find the user from id and select from the password
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    // Give internal server error (500)
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/forget", forgetpassword);
router.post("/createUser", createUser);
router.post("/verify/:token", verifyToken);
router.post("/ResetByEmail", ResetPasswordByEmail);

module.exports = router;
