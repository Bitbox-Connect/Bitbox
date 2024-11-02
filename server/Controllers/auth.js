const User = require("../Models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require('dotenv').config(); // Load environment variables from .env file

// Signup route
const createUser = async (req, res) => {
  const VITE_CLIENT_PORT = process.env.VITE_CLIENT_PORT || "https://bitbox-in.netlify.app";
  const { name, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const image = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;

    // Create a new user (save in your database)
    const user = new User({ image: image, name, email, password: hashedPassword, verified: false });
    await user.save();

    const verificationToken = crypto.randomBytes(32).toString("hex");
    user.verificationToken = verificationToken;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationLink = `${VITE_CLIENT_PORT}/verify/${verificationToken}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      text: `Click this link to verify your email: ${verificationLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          success: false,
          message: `Error sending verification email: ${error.message}`,
        });
      }
      if (!user.verified) {
        return res.status(401).json({ success: false, message: "Signup successful! Please check your email for the verification link." });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred during signup' });
  }
};

const verifyToken = async (req, res) => {
  const { token } = req.params;

  try {
    const VITE_CLIENT_PORT = process.env.VITE_CLIENT_PORT || "https://bitbox-in.netlify.app";

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification link",
      });
    }

    user.verified = true;
    user.verificationToken = token;
    await user.save();

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Email verified successfully",
      });
    }

    res.status(200).json({
      success: true,
      message: "Signup successfully",
    });

    // Redirect to the frontend's home page after verification
    return res.redirect(`${VITE_CLIENT_PORT}/login`);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

async function ResetPasswordByEmail(req, res) {

  const VITE_CLIENT_PORT = process.env.VITE_CLIENT_PORT || "https://bitbox-in.netlify.app";
  const { email } = req.body;

  // Check if email is provided
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Your Password on BitBox",
    html: `
      <p>Reset your password using the link below:</p>
      <a href="${VITE_CLIENT_PORT}/reset-password"><button>Click here</button></a> to reset your password
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Error sending email" });
    } else {
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
}


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
  ResetPasswordByEmail,
};
