import axios from "axios";
import { EXPRESS_URL } from "./config";

const movie = axios.create({
    baseURL : EXPRESS_URL
})

// GET
export const movie_get = async() =>{
    try {
        const response = await movie.get('/explore/movies')
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// POST
export const add_movies_api = async(values) =>{
    try {
        const respnse = await movie.post('explore/add-movies',values)
        return respnse?.data
    } catch (error) {
        return error?.respnse?.data
    }
}

// DELETE
export const movie_delete = async(id) =>{
    try {
        const response = await movie.delete(`explore/delete-movie/${id}`)
        return response?.data
    } catch (error) {
        return error?.respnse?.data
    }
}

// UPDATE
export const movie_update = async (id, values) => {
  try {
    const response = await movie.put(`/explore/update-movie/${id}`, values);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};