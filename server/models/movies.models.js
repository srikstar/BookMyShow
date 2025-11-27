const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    totalVotes:{
        type:Number,
        required:true,
        default:0
    },
    duration:{
        type:String,
        required:true
    },
    genres:{
        type:String,
        required:true        
    },
    certification:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

const Movies = mongoose.model('Movies', movie)
module.exports = Movies