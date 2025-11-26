const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','partner','user'],
        default:'user',
        required:true
    }
},{timestamps:true})

const Users = mongoose.model('users', user)
module.exports = Users