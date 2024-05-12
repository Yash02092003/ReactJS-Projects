import React from 'react'

function User() {
  return (
    <div className='h-[100vh]'>
        <div className='h-[40vh] flex flex-wrap justify-between items-start m-4'>
            <div className='h-[40%] w-1/6 bg-gradient-to-r from-green-600 to-green-700 flex justify-center items-center gap-5'>
                <img className='w-10' src="/icons/user.png" alt="" />
                <h1>Nitin Sharma</h1>
            </div>
            <div  className='h-[40%] w-1/6 bg-gradient-to-r from-green-600 to-green-700 flex justify-center items-center gap-5'>
                <img className= 'w-10'src="/icons/phone-call.png" alt="" />
                <h1>Contact No : </h1>
            </div>
            <div className='h-[40%] w-1/6 bg-gradient-to-r from-green-600 to-green-700 flex justify-center items-center gap-5'>
                <img className="w-10"src="/icons/car.png" alt="" />
                <h1>Lobby No : </h1>
            </div>
            <div className='h-[40%] w-1/6 bg-gradient-to-r from-green-600 to-green-700 flex justify-center items-center gap-5'>
                <img className='w-10' src="/icons/license-plate.png" alt="" />
                <h1>Vehicle No : </h1>
            </div>
            <div  className='h-[40%] w-1/6 bg-gradient-to-r from-green-600 to-green-700 flex justify-center items-center gap-5'>
                <img className= "w-10"src="/icons/gross.png" alt="" />
                <h1>Amount : </h1>
            </div>
        </div>

        <div className='h-[47vh] flex flex-col m-4 gap-1'>
            <div className='h-[40%] flex'>
                <div className='h-[100%] bg-green-600 w-[25%]'></div>
                <div  className='h-[100%] bg-blue-400 w-[25%] flex justify-center items-center'>
                    <img src="/icons/car.png" alt="" className='w-20'/>
                </div>
                <div  className='h-[100%] bg-green-700 w-[25%]'></div>
                <div  className='h-[100%] bg-blue-400 w-[25%] flex justify-center items-center'>
                <img src="/icons/car.png" alt="" className='w-20'/>
                </div>
            </div>
            <div className='h-[20%] w-full bg-black flex items-center justify-between'>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
                <div className='bg-yellow-400 h-2 w-5'></div>
            </div>
            <div className='h-[40%] flex'>
                <div  className='h-[100%] bg-green-600 w-[25%]'></div>
                <div  className='h-[100%] bg-blue-400 w-[25%] flex justify-center items-center'>
                <img src="/icons/car.png" alt="" className='w-20'/>
                </div>
                <div  className='h-[100%] bg-green-600 w-[25%]'></div>
                <div  className='h-[100%] bg-blue-400 w-[25%] flex justify-center items-center'>
                <img src="/icons/car.png" alt="" className='w-20'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User