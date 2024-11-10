const mongoose = require('mongoose');

// Define the schema for a question
const discussionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    answered: {
        type: Boolean,
        default: false,
    },
    answer: {
        type: String,
        default: '',
    },
}, { timestamps: true });

const Question = mongoose.model('Question', discussionSchema);

module.exports = Question;
