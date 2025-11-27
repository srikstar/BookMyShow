import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'auth',
    initialState:{
        auth : false,
        user : null
    },
    reducers:{
        setAuth: (state, action) =>{
            state.auth = action.payload
        },
        setUserData:(state, action) =>{
            state.user = action.payload
        }
    }
})

export const { setAuth, setUserData } = authSlice.actions
export default authSlice.reducer