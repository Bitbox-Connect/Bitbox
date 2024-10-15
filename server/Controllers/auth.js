const User = require("../Models/User");
const bcrypt = require("bcrypt");

const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Signup route
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verified: false,
    });
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

    const verificationLink = `http://localhost:5173/verify/${verificationToken}`;
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
      res.status(200).json({
        success: true,
        message: "Signup successful! Please check your email for the verification link.",
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred during signup' });
  }
};



const verifyToken = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification link",
      });
    }
    console.log(user);

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    // Redirect to the frontend's home page after verification
    return res.redirect("http://localhost:5173/"); // Replace with your frontend home URL
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
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
async function ResetPasswordByEmail(req, resp) {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your email ",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: "your email",
    to: email,
    subject: "Reset Your password on BitBox",
    html: `
    <p>Reset your password from the link .</p>
    <a href="https://bitbox-in.netlify.app/forgotpassword"><button>Click here</button></a> to reset password`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send({ message: "email sent successfully" });
    }
  });
}

module.exports = {
  forgetpassword,
  createUser,
  verifyToken,
  ResetPasswordByEmail,
};
