const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// MongoDB URI
let mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Bitbox"; // Use environment variable if available

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false); // Set to false for backwards compatibility
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
