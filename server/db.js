const mongoose = require('mongoose')
require('dotenv').config()
// let mongoURI = "mongodb+srv://anujverma3553:KrzhNfWoDbSRZjQa@kaiyuan-cluster.8dj4nlb.mongodb.net/?retryWrites=true&w=majority&appName=Kaiyuan-Cluster";
let mongoURI = "mongodb+srv://harsh100045:Obbdata1000@cluster0.nbyja7h.mongodb.net/Bitbox";

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Connected to Mongo Successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;