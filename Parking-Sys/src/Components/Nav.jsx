import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  let navigate = useNavigate();
  return (
    <nav className="flex gap-10 items-center h-20 px-5 bg-slate-800 text-white">
        <h1 className="w-1/4" onClick={() => navigate('/')}>ParkZY Plus</h1>
        <div className="flex justify-between w-3/4 items-center">
        <ul className="flex gap-5 justify-items-start">
            <li>How it Works</li>
            <li>NearBy Locations</li>
            <li>Popular Locations</li>
        </ul>
        <div className="flex gap-7">
            <button className="outline-none bg-green-700 p-2 hover:cursor-pointer shadow-lg">Assign Your Parking Space Free</button>
            <button className="outline-none bg-green-700 p-2 " onClick={ () => navigate('/login')}>Login</button>
        </div>
        </div>
    </nav>
  )
}

export default Nav