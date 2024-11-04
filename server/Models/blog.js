const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true,
        minlength: 50
    },
    category: {
        type: String,
        required: true,
        trim: true,
        enum: ["Tech", "Health", "Finance"] // Example categories
    },
    tags: {
        type: [String],
        default: []
    },
    comments: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now }
        }
    ]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
