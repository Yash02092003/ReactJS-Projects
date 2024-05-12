import React from 'react'
import Main2 from './Main2'

function Main() {
  return (
    <>
    <main className="w-full h-[80vh] bg-no-repeat bg-cover bg-center flex justify-center items-center" style={{backgroundImage : `url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D")` , backdropFilter : "blure(16px)"}}>
        <div>
            <div>
                <h1 className="text-5xl font-bold text-white">FIND <span className="text-green-700">PARKING </span>IN ONE CLICK</h1>
                <h3 className='text-xl font-medium text-center mt-2 text-white'>SIMPLE, <span className="text-green-700">SECURED</span> & SMART</h3>
            </div>
            <div className="flex justify-around mt-4">
                <div className="flex gap-3 text-xl items-center font-bold justify-center text-green-900">
                <input type="radio" name='search' id='search'/>
                <label htmlFor="search">QUICK SEARCH</label>
                </div>
                <div className="flex gap-3 text-xl items-center font-bold justify-center text-black-700">
                <input type="radio" name='search' id='advsearch'/>
                <label htmlFor="advsearch">ADVANCED SEARCH</label>
                </div>
            </div>
            <div className="flex gap-5 mt-5">
                <input type="text" name='VehcilceNO' placeholder='Vehicle NO' className="w-full px-4"/>
                <button className="outline-none bg-green-700 p-2 hover:cursor-pointer shadow-lg w-16">GO</button>
            </div>
        </div>

    </main>
    <Main2/>
    </>
  )
}

export default Main