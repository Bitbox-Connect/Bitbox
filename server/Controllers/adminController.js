const Admin = require("../Models/Admin");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require('dotenv').config(); // Load environment variables from .env file
const { body, validationResult } = require("express-validator");
const login= async (req, res) => {
    let success = false;
    console.log("see");
    const { email, password } = req.body;

    try {
      let user = await Admin.findOne({ email });

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
      const authtoken = jwt.sign(data, process.env.JWT_SECRET);
      // Send token in response to be stored in localStorage on the client
      return res.status(200).json({ success: true, authtoken });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Internal Server Error");
    }
}
const createAdmin=async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create a new user (save in your database)
      const user = new Admin({ name, email, password: hashedPassword });

      await user.save();
      return res.status(201).json({ success: true, message: "Admin created successfully"})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
const logout=async (req,res)=>{
    // Optionally, you can clear the cookie if you're using cookies for sessions
    res.clearCookie('connect.sid'); // Replace 'connect.sid' with your session cookie name

    // Send a success response
    return res.status(200).json({ message: 'Successfully logged out.' });
  
}
const dashboard= null;


module.exports = {
  login,
  createAdmin,
};
