const express = require('express')

const Movies = require('../models/movies.models.js')

const movie = express.Router()

// GET
movie.get('/movies', async(req,res) =>{
    try {
        const movies = await Movies.find()
        return res.status(200).json({
            movies : movies
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error : error
        })
    }
})


// POST
movie.post('/add-movies', async(req,res) =>{
    try {
        const movie = await Movies.findOne({title:req.body.title})
        if(movie) return res.status(400).json({
            message: 'Movies already in the queue'
        })

        const addMovie = new Movies(req.body)
        await addMovie.save()

        return res.status(201).json({
            message : 'Movie added successfully',
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
movie.put('/update-movie/:id', async(req,res) => {
    try {
        const updateMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!updateMovie) return res.status(404).json({ message: 'Movie not found' });

        return res.status(200).json({
            message: 'Movie updated successfully',
            movie: updateMovie
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });       
    }

})


// DELETE
movie.delete('/delete-movie/:id', async(req,res) => {
    try {
        const updateMovie = await Movies.findByIdAndDelete(req.params.id)
        if(!updateMovie) return res.status(404).json({ message: 'Movie not found' });

        return res.status(200).json({
            message: 'Movie deleted successfully',
        });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });       
    }

})



module.exports = movie