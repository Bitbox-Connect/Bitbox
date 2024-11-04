const mongoose = require('mongoose');

const AvatarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true, // Ensure this is required if each avatar must be linked to a user
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/, 'Please enter a valid image URL']
    }
}, { timestamps: true });

module.exports = mongoose.model("avatar", AvatarSchema);