const mongoose = require("mongoose");

let MongoURI = "mongodb://localhost:27017/Opensource";

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(MongoURI);
        console.log("Connected to Mongo Successfully"); 
    } catch (error) {
        console.log(error)
    }
}

module.exports =  connectToMongo;