const mongoose = require('mongoose')

const theater = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        requires:true
    },
    isApproved:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Theaters = mongoose.model('theaters', theater)
module.exports = Theaters