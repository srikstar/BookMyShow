import axios from 'axios'
import { EXPRESS_URL } from './config.js'

const api = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})

//Sign In
export const signin_api = async(values) =>{
    try {
        const response = await api.post('/api/auth/signin', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

//Sign Up
export const signup_api = async(values) =>{
    try {
        const response = await api.post('/api/auth/signup', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}


//Signin
export const user_api = async() =>{
    try {
        const response = await api.get('/api/auth/profile', {withCredentials:true})
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}