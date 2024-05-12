import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main2() {
  let navigate = useNavigate();
  return (
    <div className='w-full h-[80vh] flex items-center justify-center gap-5'>
            <div className='w-1/5 flex flex-col items-center justify-center gap-2 p-1 h-3/4 hover:cursor-pointer' >
                <img className='h-3/4 w-full border border-gray-200' style={{border : "1px solid gray" , borderRadius : "10px"}} src="https://img.freepik.com/free-vector/parking-service-touch-map_24908-60893.jpg?size=626&ext=jpg&ga=GA1.1.565321329.1711215979&semt=ais" alt="" />
                <h1 className='font-medium text-green-700 text-lg'>LOCATE</h1>
                <p className='text-center'>Lost car? Use our system to locate it effortlessly!</p>
            </div>
            <div className='w-1/5 flex flex-col items-center justify-center gap-2 p-1 h-3/4 hover:cursor-pointer' onClick={() => navigate('/register')}>
                <img className='h-3/4 w-full border border-gray-200' style={{border : "1px solid gray" , borderRadius : "10px"}} src="https://img.freepik.com/free-vector/carsharing-isometric-concept-with-car-rental-share-symbols-isometric_1284-33391.jpg?size=626&ext=jpg&ga=GA1.1.565321329.1711215979&semt=ais" alt="" />
                <h1 className='font-medium text-green-700 text-lg'>REGISTER</h1>
                <p className='text-center'>Want to Have Hassel Free Parking ? Register Now</p>
            </div>
            <div className='w-1/5 flex flex-col items-center justify-center gap-2 p-1 h-3/4 hover:cursor-pointer' onClick={ () => navigate('/login')}>
                <img className='h-3/4 w-full border border-gray-200' style={{border : "1px solid gray" , borderRadius : "10px"}} src="https://img.freepik.com/premium-vector/selfparking-car-system-abstract-concept-vector-illustration_107173-25420.jpg?size=626&ext=jpg&ga=GA1.1.565321329.1711215979&semt=ais" alt="" />
                <h1 className='font-medium text-green-700 text-lg' >LOGIN</h1>
                <p className='text-center'>LOGIN to know your details and Reacharge </p>
            </div>
    </div>
  )
}

export default Main2