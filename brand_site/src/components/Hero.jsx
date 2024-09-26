import React from 'react'

export default function Hero() {
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
          <button>Shop Now</button>
          <button className='secondary_btn'>Category</button>
        </div>

        <div className="hero-shopping">
          <p>Also Available On</p>
        </div>

        <div className='shopping_icons'>
          <img src="/public/image/amazon.png" alt="amazon" />
          <img src="/public/image/flipkart.png" alt="flipkart" />
        </div>

      </div>
      <div className='hero-image'>
        <img src="/public/image/shoe_image.png" alt="flipkart" />
      </div>
    </main>
  )
}
