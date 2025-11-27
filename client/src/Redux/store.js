import { configureStore } from "@reduxjs/toolkit";

import authReducer from './auth.slice.js'
import movieReducer from '../Redux/movies.slice.js'

export const store = configureStore({
    reducer:{
        'auth' : authReducer,
        "movies" : movieReducer
    }
})