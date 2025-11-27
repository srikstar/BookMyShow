import { configureStore } from '@reduxjs/toolkit'

import authReducer from './auth.slice.js'
import moviesReducer from '../Redux/movies.slice.js'

export const store = configureStore({
    reducer:{
        'auth' : authReducer,
        'movies' : moviesReducer
    }
})