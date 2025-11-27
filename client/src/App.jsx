import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Signin from './Access/Signin'
import Signup from './Access/Signup'
import Home from './Home'
import { useEffect } from 'react'
import { user_api } from './APIs/auth.api'
import { setAuth } from './redux/auth.slice'
import Public from './Public'
import Protected from './Protected'

import Admin from './Admin'

function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
    const user = async() =>{
      try {
        const response = await user_api()
        if(response?.user){
          dispatch(setAuth(true))
        }
      } catch (error) {
        console.log(error)
      }
    }
    user()
  },[dispatch])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Public><Signin /></Public>} />
          <Route path='/signup' element={<Public><Signup /></Public>} />
          <Route path='/home' element={<Protected><Home /></Protected>} />
          <Route path='/admin' element={<Protected><Admin /></Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App