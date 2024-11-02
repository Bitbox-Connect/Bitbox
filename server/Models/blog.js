const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
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
        required: true
    },
    id: {
        type: String,
        unique: true // Optional: Ensure this is unique
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
