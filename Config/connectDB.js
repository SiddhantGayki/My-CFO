const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.yellow);
    } catch (error) {
        console.log(`${error}`,colors.bgRed)
    }
}

module.exports = connectDB;