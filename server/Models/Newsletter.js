const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
  email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'] 
  },
  subscribedAt: { 
      type: Date, 
      default: Date.now 
  },
  status: { 
      type: String, 
      enum: ['Subscribed', 'Unsubscribed'], 
      default: 'Subscribed' 
  }
});

module.exports = mongoose.model("Newsletter", NewsletterSchema);