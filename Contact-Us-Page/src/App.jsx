import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import ContactHeader from './Components/ContactHeader'
import ContactForm from './Components/ContactForm'

function App() {
  return (
    <div>
      <NavBar/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App