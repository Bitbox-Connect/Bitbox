const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// MongoDB URI
let MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Bitbox";
const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false); // Set to false for backwards compatibility
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
