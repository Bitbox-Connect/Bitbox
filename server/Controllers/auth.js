const User = require("../Models/User");
const bcrypt = require("bcrypt");


const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Signup route
const createUser= async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user (save in your database)
  const user = new User({ name,email, password, verified: false });
  await user.save();

  // Generate verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');

  // Save the verification token to the user (or in another collection)
  user.verificationToken = verificationToken;
  await user.save();

  // Send verification email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use the environment variable
      pass: process.env.EMAIL_PASS, // Use the environment variable
    },
  });

  const verificationLink = `http://localhost:5173/verify/${verificationToken}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification',
    text: `Click this link to verify your email: ${verificationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending verification email');
    }
    res.status(200).send('Signup successful! Please check your email for verification link.');
  });
};


const verifyToken = async (req, res) => {
    const { token } = req.params;
  
    try {
      // Find the user by verification token
      const user = await User.findOne({ verificationToken: token });
      if (!user) {
        return res.status(400).json({ success: false, message: 'Invalid or expired verification link' });
      }
      console.log(user)
  
      // Mark user as verified
      user.verified = true;
      user.verificationToken = undefined; // Clear the token after verification
      await user.save();
  
      // Optionally send a success message to the client
      res.status(200).json({ success: true, message: 'Email verified successfully!' });
  
      // Redirect to the frontend's home page or login page
      // You can choose where to redirect the user after verification
      res.redirect('http://localhost:5173/'); // Replace with your frontend home URL
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
  };
  
  

const forgetpassword = async (req, res) => {
    
    try {
      const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email }); // Use findOne instead of find
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = secPass;

    // Save the updated user
    await user.save();

    return res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};


module.exports = {
  forgetpassword,
  createUser,
  verifyToken,
};
