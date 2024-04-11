const mongoose = require('mongoose')

const AvatarSchema = new mongoose.Schema({
    image: String
})

const UserModel = mongoose.model("avatar", AvatarSchema)
module.exports = UserModel