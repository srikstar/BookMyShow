import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
function Protected({children}) {
  const { auth } = useSelector(state => state.auth)
    if(!auth){
        return <Navigate to='/signin' />
    }
    return children
}

export default Protected