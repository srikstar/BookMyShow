import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signin from './Access/Signin'
import Signup from './Access/Signup'
import Home from './Home'

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App