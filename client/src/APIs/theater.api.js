import axios from "axios";
import { EXPRESS_URL } from "./config";

const theater = axios.create({
    baseURL : EXPRESS_URL
})


export const add_theater = async(values) =>{
    try {
        const response = await theater.post('/theaters/add-theater', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
} 

export const get_theater_by_owner = async(value) =>{
    try {
        const response = await theater.get(`/theaters/owner/${value}`, {withCredentials:true})
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}