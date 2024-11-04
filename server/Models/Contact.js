const mongoose = require('mongoose');

// Define the schema for the contact form
const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
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
        trim: true,
        minlength: 10,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ipAddress: {
        type: String,
        required: false
    }
});

// Create the model from the schema
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;