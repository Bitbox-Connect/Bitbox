const ContactForm = require('../Models/Contact');

const submitQueery = async (req, res) => {
    // Extract data from the request body
    const { name, email, message } = req.body;

    // Validate the presence of required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required: name, email, message." });
    }

    const contactData = {
        name: name,
        email: email,
        msg: message,
        createdAt: new Date(),
    };

    try {
        // Declare the variable properly
        const queery = new ContactForm(contactData);

        // Save to the database
        await queery.save();

        // Send a success response
        res.status(200).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        // Log the error for debugging
        console.error("Error in submitting contact form:", error);

        // Send an error response
        res.status(500).json({ error: "Contact form not submitted successfully." });
    }
}

const sayHello = async (req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
}

module.exports = {
    submitQueery,
    sayHello
};
