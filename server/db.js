const mongoose = require('mongoose')
require('dotenv').config()
// let mongoURI = "mongodb+srv://anujverma3553:KrzhNfWoDbSRZjQa@kaiyuan-cluster.8dj4nlb.mongodb.net/?retryWrites=true&w=majority&appName=Kaiyuan-Cluster";
let mongoURI = "mongodb://127.0.0.1:27017/Bitbox";

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
