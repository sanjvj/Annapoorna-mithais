import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] p-5'>

      <div className='ml-4'>
        <img src='Logo.png'></img>
      </div>
      <div className='flex gap-24 font-Nunito'>
        <h1>Home</h1>
        <h1>Shop Now</h1>
        <h1>About Us</h1>
        <h1>Contact Us</h1>
      </div>
      <div className='flex gap-10 h-6 mr-4'>
        <FiShoppingCart className='w-8 h-8 text-amber-900' ></FiShoppingCart>
        <FaRegUserCircle className='w-8 h-8 text-amber-900'></FaRegUserCircle>
      </div>
    </div>
  )
}

export default Navbar
