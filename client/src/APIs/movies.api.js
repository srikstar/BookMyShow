import axios from "axios";
import { EXPRESS_URL } from "./config";

const movie = axios.create({
    baseURL : {EXPRESS_URL}
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