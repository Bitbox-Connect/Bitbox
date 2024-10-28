const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  verificationToken: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
