const Newsletter = require("../Models/Newsletter");
const nodemailer = require("nodemailer");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if the email is already subscribed
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Save the subscriber email to the database
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    // Console log the email that subscribed
    console.log(`New subscriber: ${email}`);

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS,           // Your email password (use environment variables in production)
      },
    });

    const mailOptions = {
      from: "anujverma3553@gmail.com",
      to: email,
      subject: "Thank you for Subscribing to Our Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Thank You for Subscribing!</h2>
          <p>Dear Subscriber,</p>
          <p>We are thrilled to have you with us. Stay tuned for our latest updates and offers!</p>
          <a href="https://bitbox-in.netlify.app/" 
             style="display: inline-block; padding: 10px 20px; margin-top: 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            Explore More
          </a>
          <p style="margin-top: 30px;">Best Regards,<br>BitBox Team</p>
        </div>
      `,
    };

    // Send the confirmation email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription successful, confirmation email sent" });
  } catch (error) {
    console.error("Error in subscribing to newsletter:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { subscribeNewsletter };
