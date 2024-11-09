const Newsletter = require("../Models/Newsletter");
const { sendMailToSubscriber } = require("../sendSubscribeMail");

const subscribeNewsletter = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if email is provided
    if (!email || !name) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if the email is already subscribed
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Save the subscriber email to the database
    const newSubscriber = new Newsletter({ name, email });
    await newSubscriber.save();

     sendMailToSubscriber(newSubscriber)
    res.status(200).json({ message: "Subscription successful, confirmation email sent" });
 
  } catch (error) {
    console.error("Error in subscribing to newsletter:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { subscribeNewsletter };
