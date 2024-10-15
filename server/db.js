const mongoose = require('mongoose')
require('dotenv').config()
// let mongoURI = "mongodb+srv://anujverma3553:KrzhNfWoDbSRZjQa@kaiyuan-cluster.8dj4nlb.mongodb.net/?retryWrites=true&w=majority&appName=Kaiyuan-Cluster";
let mongoURI = "mongodb+srv://ayushdeb848:u7SfrlsEXy8A6xPO@cluster0.p0sy8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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