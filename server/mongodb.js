const mongoose = require('mongoose')

const connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB: UP')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connection }