const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const isAuth = require('../middlewares/auth.js')
const Users = require('../models/user.model.js')

const auth = express.Router()

// Sign In

auth.post('/signin', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (!user) return res.status(400).json({
            message: "Invalid Credientials",
            isLogin: false
        })

        const verifyPass = await bcryptjs.compare(req.body.password, user.password)

        if (!verifyPass) return res.status(400).json({
            message: "Invalid Credientials",
            isLogin: false
        })

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
    
        res.cookie("token", token, {
            httpOnly: true
        });

        return res.status(200).json({
            message: "Login Successfull",
            isLogin: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            isLogin: false,
            error: error.message
        })
    }
})


// Sign Up
auth.post('/signup', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (user) return res.status(400).json({
            message: "Email already in use",
            isSuccess: false
        })

        const salt = await bcryptjs.genSalt(10)
        const hash = await bcryptjs.hash(req.body.password, salt)
        req.body.password = hash

        const newUser = new Users(req.body)
        await newUser.save()

        return res.status(201).json({
            message: "Account created successful!",
            isSuccess: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            isLogin: false,
            error: error
        })
    }
})

// Home
auth.get('/profile', isAuth, async (req, res) => {
    try {
        const ID = req.userID
        const user = await Users.findById(ID).select('-password')
        if (!user) return res.status(400).json({
            message: 'No user find',
            isLogin: false
        })

        return res.status(200).json({
            user: user
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            isLogin: false,
            error: error
        })
    }
})

module.exports = auth