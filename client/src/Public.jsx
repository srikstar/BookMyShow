import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Public({children}) {
    const { auth } = useSelector(state => state.auth)
    if(auth){
        return <Navigate to='/home' />
    }
    return children
}

export default Public