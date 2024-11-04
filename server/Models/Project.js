const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    imageUrl: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        default: "Project",
    },
    description: {
        type: String,
        maxlength: 500, // Optional limit
    },
    gitHubLink: {
        type: String,
        match: [/^https:\/\/github.com\/.+/, 'Enter a valid GitHub URL'],
    },
    youTubeLink: {
        type: String,
        match: [/^https:\/\/(www\.)?youtube.com\/watch\?v=.+/, 'Enter a valid YouTube video URL'],
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    status: {
        type: String,
        enum: ['In Progress', 'Completed', 'On Hold'],
        default: 'In Progress',
    }
});

module.exports = mongoose.model('projects', ProjectSchema);
