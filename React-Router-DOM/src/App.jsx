import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Components/Contactus'
import GitHub from './Components/GitHub'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<Aboutus/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/contact' element = {<Contactus/>}/>
        <Route path='/github' element = {<GitHub/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App