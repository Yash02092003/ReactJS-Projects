import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-4">
        <div className='flex justify-center items-start gap-96'>
        <ul className="flex flex-col gap-3 font-medium">
            <li><h2 className='text-2xl text-green-700'>About The System</h2></li>
            <li>Home</li>
            <li>Become a customer</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Policy</li>
            <li>Contact Us</li>
        </ul>
        <ul className="flex flex-col gap-3 font-medium">
            <li className='text-2xl text-green-700'><h2>Availability</h2></li>
            <li>Delhi</li>
            <li>Gurgaon</li>
            <li>Mumbai</li>
            <li>Noida</li>
        </ul>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl text-green-700'>Get in touch</h2>
            <div className='flex mt-3 gap-4'>
                <img src="/images/icons8-facebook-48.png" alt="" />
                <img src="/images/icons8-instagram-48.png" alt="" />
                <img src="/images/icons8-twitter-48.png" alt="" />
            </div>
        </div>
    </div>
    <div className='flex justify-center items-center gap-10 mt-5 text-gray-500 text-lg font-medium'>
        <h3>Terms & Conditions</h3>
        <h3>Security & Purchase</h3>
        <h3>Newsletter</h3>
    </div>
    </footer>
  )
}

export default Footer