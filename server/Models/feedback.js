const mongoose = require('mongoose');

// Define the Feedback schema
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Email is invalid'], // Basic email validation
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfVisit: {
        type: String,
        required: true,
    },
    deviceUsed: {
        type: String,
        required: true,
    },
    priorityLevel: {
        type: String,
        required: true,
    },
    suggestions: {
        type: String,
        trim: true,
        required: true,
    },
    feedback: {
        type: String,
        trim: true,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the created date
    }
});

// Create the model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
