const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    imageUrl: {
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
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8 // Minimum length for password
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
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    }
  },
  { timestamps: true }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;
