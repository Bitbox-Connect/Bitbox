const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: false
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
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;

