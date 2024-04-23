import React from 'react'

function Hero() {
  return (
    <main className='hero'>
        <div className='heroContent'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>


            <div className='heroButton'>
            <button>SHOP NOW</button>
            <button className='secondaryBtn'>CATEGORY</button>
            </div>

            <div className='shopping'>
                <p>available on</p>
                <div className='shoppingImage'>
                    <img src="../public/Images/flipkart.png" alt="" />
                    <img src="../public/Images/amazon.png" alt="" />
                </div>
            </div>
        </div>

        <div className='heroImage'>
            <img src="../public/Images/shoe_image.png" alt="" />
        </div>


    </main>
  )
}

export default Hero