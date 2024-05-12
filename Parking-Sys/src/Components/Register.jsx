import React, { useState } from 'react'

function Register() {
    let [name , setName] = useState('');
    let [email , setEmail] = useState('');
    let [vehicle , setVehicle] = useState('');
    let [password , setPassword] = useState('');

    let emailFunc = (e) =>{
        setEmail(e.target.value)
    }

    let nameFunc = (e) => {
        setName(e.target.value)
    }

    let vehicleFunc = (e) =>{
        setVehicle(e.target.value)
    }

    let passFunc = (e) => {
        setPassword(e.target.value)
    }

    let sub = (e) =>{
        e.preventDefault();

    }

  return (
    <div className='h-[50vh] flex items-center justify-center m-5'>
        <form action="#" method='' className='flex flex-col h-full justify-between p-4 w-1/3 bg-white-600 shadow-2xl items-center' style={{borderRadius : '8px'}}>
            <h1 className='font-medium text-black-700 text-2xl'>Hello , Parker</h1>
            <input className='p-2 h-8 w-[50%]' style={{borderRadius : '8px'}} type="text" placeholder='Full Name' value={name} onChange={nameFunc}/>
            <input  className='p-2 h-8 w-[50%]' style={{borderRadius : '8px'}} type="email" placeholder='Enter Email' value={email} onChange={emailFunc}/>
            <input  className='p-2 h-8 w-[50%]' style={{borderRadius : '8px'}} type="text" placeholder='Enter Vehicle No' value={vehicle} onChange={vehicleFunc}/>
            <input  className='p-2 h-8 w-[50%]' style={{borderRadius : '8px'}} type="password" placeholder='Enter New Password' value={password} onChange={passFunc}/>
            <button  className = "w-[30%] bg-green-700 p-1 font-medium"type='submit' onSubmit={sub}>Create Account</button>
        </form>
        <div className='w-1/3 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-full shadow-2xl'>
            <h1 className='font-medium text-white font-sans text-xl'>GLAD TO SEE YOU HERE</h1>
        </div>
    </div>
  )
}

export default Register