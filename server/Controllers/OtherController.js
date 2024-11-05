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

    Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables in production
        pass: process.env.EMAIL_PASS,
      },
    });
   
    const mailOptions = {
      from: "anujverma3553@gmail.com",
      to: email, // Send confirmation email to the subscriber's email
      subject: "Thank you for Subscribing to Our Newsletter",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <!-- Header -->
        <div style="background-color: #4A90E2; padding: 20px; text-align: center; color: white;">
          <img src="cid:welcomeImage" alt="Welcome" style="width: 120px; margin-bottom: 10px;" />
          <h1 style="font-size: 24px; margin: 0;">Thank You for Subscribing!</h1>
        </div>
  
        <!-- Body -->
        <div style="padding: 30px; background-color: #f8f8f8; text-align: center;">
          <h2 style="color: #333; font-size: 20px; margin-bottom: 15px;">Welcome to the BitBox Community!</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0 0 20px;">
            Dear Subscriber,
          </p>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0 0 20px;">
            We’re thrilled to have you with us. Get ready to stay updated with the latest trends and offers. 
          </p>
  
          <a href="https://bitbox-in.netlify.app/" style="display: inline-block; padding: 12px 25px; margin-top: 20px; background-color: #4A90E2; color: white; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px;">
            Explore More
          </a>
        </div>
  
        <!-- Footer -->
        <div style="background-color: #333; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">Best Regards, <br> <strong>BitBox Team</strong></p>
          <p style="margin: 0; font-size: 12px; color: #ccc;">Follow us on our social channels for more updates</p>
        </div>
      </div>
    `,
      attachments: [
        {
          filename: "bitbox",
          path: "Controllers/assests/bitboximage.png",
          cid: "welcomeImage",
        },
      ],
    };

    // Send the confirmation email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Subscription successful, confirmation email sent" });
  } catch (error) {
    console.error("Error in subscribing to newsletter:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { subscribeNewsletter };
