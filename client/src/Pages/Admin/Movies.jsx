import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { movie_delete } from "../../APIs/movies.api";
import "./Admin.css";


function Movies() {
    const moviesData = useSelector((state) => state.movies);
    const movies = moviesData?.movies

    const [deleteMovie , setDelete] = useState(null)

    useEffect(() =>{
        if(!deleteMovie) return;
        const handleDelete = async() =>{
            console.log(deleteMovie)
            try {
                const response = await movie_delete(deleteMovie)
                return response?.data
            } catch (error) {
                return error
            }
        }
        handleDelete()
    },[deleteMovie])

    return (
        <>
            <div className="movie-table-container">
                <table className="movie-table">
                    <thead>
                        <tr>
                            <th>Poster</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Genre</th>
                            <th>Duration</th>
                            <th>Ratings</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie._id}>
                                <td>{movie._id}</td>
                                <td>
                                    <img src={movie.poster} alt={movie.title} className="movie-table-poster" />
                                </td>

                                <td>{movie.title}</td>

                                <td className="movie-description">
                                    {movie.description.slice(0, 80)}...
                                </td>

                                <td>{movie.language}</td>

                                <td>{movie.genres}</td>

                                <td>{movie.duration}</td>

                                <td>⭐ {movie.rating}</td>

                                <td>
                                    {/* EDIT BUTTON */}
                                    <button
                                        className="edit-btn"
                                    >
                                        Edit
                                    </button>

                                    {/* DELETE BUTTON */}
                                    <button
                                        className="delete-btn"
                                        onClick={() => setDelete(movie._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
}

export default Movies;
