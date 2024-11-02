const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    // user is a foreign key
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image: {
      image: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,

      unique: true,
    },
    address: {
      type: String,
    },
    college: {
      type: String,
    },
    phone: {
      type: Number,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", ProfileSchema);
