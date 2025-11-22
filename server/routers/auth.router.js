const express = require('express')
const bcryptjs = require('bcryptjs')

const Users = require('../models/users.models.js')
const auth = express.Router()

//Sign In
auth.post('/signin', async(req,res) =>{
    try {
        const user = await Users.findOne({email:req.body.email})
        if(!user) return res.status(400).json({
            message:"Invalid credientials",
            isLogin:false
        })

        const verifyPass = await bcryptjs.compare(req.body.password, user.password)

        if(!verifyPass) return res.status(400).json({
            message:"Invalid credientials",
            isLogin:false
        })

        return res.status(200).json({
            message: "Login Successfull",
            isLogin:false
        })

    } catch (error) {
        return error
    }
})

// Sign Up
auth.post('/signup', async(req,res) => {
    try {
        const user = await Users.findOne({email:req.body.email})
        if(user) return res.status(400).json({
            message:"An account with this email already exists",
            isSuccess:false
        })

        const salt = await bcryptjs.genSalt(10)
        const hash = await bcryptjs.hash(req.body.password, salt)
        req.body.password = hash

        const newuser = new Users(req.body)
        await newuser.save()

        return res.status(201).json({
            message: "Account created successfully",
            isSuccess:true
        })

    } catch (error) {
        return res.status(400).json({
            error:error
        })
    }
})