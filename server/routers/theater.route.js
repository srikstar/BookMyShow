const express = require('express')
const Theaters = require('../models/theaters.model.js')

const theater = express.Router()

// GET
theater.get('/get-theaters', async(req,res) =>{
    try {
        const theater = await Theaters.find()
        return res.status(200).json(
            {
                theater : theater
            }
        )
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error : error
        })
    }
}) 

// POST
theater.post('/add-theater', async(req,res) =>{
    try {
        const theater = await Theaters.findOne({name:req.body.name})
        if(theater) return res.status(400).json({
            message: 'Theater already in the queue'
        })

        const addTheater = new Theaters(req.body)
        await addTheater.save()

        return res.status(201).json({
            message : 'Theater added successfully',
            isSucess : true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error : error
        })      
    }
})

// UPDATE

theater.put('/update-theater/:id', async(req,res) => {
    try {
        const updateTheater = await Theaters.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!updateTheater) return res.status(404).json({ message: 'Theater not found' });

        return res.status(200).json({
            message: 'Theater updated successfully',
            movie: updateTheater
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });       
    }

})

// DELETE
theater.delete('/delete-theater/:id', async(req,res) => {
    try {
        const deleteTherater = await Theaters.findByIdAndDelete(req.params.id)
        if(!deleteTherater) return res.status(404).json({ message: 'Theater not found' });

        return res.status(200).json({
            message: 'Theater deleted successfully',
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });       
    }

})


module.exports = theater