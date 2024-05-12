import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Main2 from './Components/Main2'
import Footer from './Components/Footer'
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom'
import User from './Components/User'
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<User/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App