const express = require("express");
var jwt = require("jsonwebtoken");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
const rateLimit = require("express-rate-limit");
require('dotenv').config(); // Load environment variables from .env file

const {
  forgetpassword,
  verifyToken,
  createUser,
  ResetPasswordByEmail,
  verifyOtp,
  sendOtp
} = require("../Controllers/auth");

// Configure Firebase OAuth2Client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const JWT_SECRET = process.env.JWT_SECRET;

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

      // Send token in response to be stored in localStorage on the client
      res.json({ success: true, authtoken });

      // Send token in response to be stored in localStorage on the client
      return res.status(200).json({ success: true, authtoken });
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

// server > Controllers > auth.js

// ROUTE 2 : Create a User using : POST: "/api/auth/login". No login required

// Set up rate limiting
const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // for 5 minutes
  max: 5, // Limit each IP to 5 requests per windowMs edit as you need
  message:
    "Too many login attempts from this IP, please try again after 5 minutes.",
});

router.post(
  "/login",
  loginLimiter, // rate limiter middleware
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

      // If user does not exist
      if (!user) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Compare provided password with stored password
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
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

      // Send token in response to be stored in localStorage on the client
      return res.status(200).json({ success: true, authtoken });
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
router.post("/sendotp", sendOtp);
router.post("/verifyotp", verifyOtp);

module.exports = router;
