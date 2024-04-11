const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  image: {
    image: String,
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
  }
});

const User = mongoose.model('user', UserSchema);
// create index just for tell the concept of create Indexes
// User.createIndexes; // --> Don't uncomment it 
module.exports = User;