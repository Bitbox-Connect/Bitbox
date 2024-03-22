const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
    // user is a foreign key 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    img: {
        data: Buffer,
        contentType: String
    },
    title: {
        type: String,
        required: true,
        default: "Project",
    },
    description: {
        type: String,
    },
    gitHubLink: {
        type: String,
    },
    youTubeLink: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('projects', projectSchema);