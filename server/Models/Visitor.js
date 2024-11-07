// models/VisitorCount.js
const mongoose = require("mongoose");

const visitorCountSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("VisitorCount", visitorCountSchema);
