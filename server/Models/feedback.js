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
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfVisit: {
        type: Date,
        required: true,
    },
    deviceUsed: {
        type: String,
        required: true,
        enum: ['Desktop', 'Mobile', 'Tablet'],
    },
    priorityLevel: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High'],
    },
    suggestions: {
        type: String,
        trim: true,
        required: true,
        maxlength: 500,
    },
    feedback: {
        type: String,
        trim: true,
        required: true,
        maxlength: 1000,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Create the model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;