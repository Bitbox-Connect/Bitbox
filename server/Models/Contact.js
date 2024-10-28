const mongoose = require('mongoose');

// Define the schema for the contact form
const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    msg: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
