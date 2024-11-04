const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    address: {
      type: String,
      trim: true,
    },
    college: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?[0-9]{10,15}$/, "Enter a valid phone number"],
    },
    github: {
      type: String,
      match: [/^https:\/\/github.com\/.+/, "Enter a valid GitHub URL"],
    },
    linkedin: {
      type: String,
      match: [/^https:\/\/linkedin.com\/in\/.+/, "Enter a valid LinkedIn URL"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", ProfileSchema);