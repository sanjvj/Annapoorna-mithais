import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA]'>
      <div className='flex gap-2'>
      <img src='Line.svg' className=' w-64'></img>
      <img src='Flower.svg'></img>
      <h1 className='font-Nunito text-xl font-bold'>FESTIVE DELIGHTS</h1>
      <img src='Flower.svg'></img>
      <img src='Line 2.svg' className='w-64'></img>
      </div>
      <h1 className='font-Philosopher text-4xl font-bold bg-gradient-to-r from-[#A5813B] to-[#8F6109] text-transparent bg-clip-text'>Festivities are Flat <br></br><span>Without Sweets</span></h1>

    </div>
  )
}

export default Hero
