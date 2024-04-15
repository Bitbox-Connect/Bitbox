const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
    // user is a foreign key 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    image: String
})

module.exports = mongoose.model("avatar", AvatarSchema)