import React from 'react'
import SearchBar from '../SearchBar'

const ExploreMenu = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <div className="flex items-center justify-center gap-2 mt-16">
          <img
            src="Line.svg"
            className="w-36 md:w-48 lg:w-96"
            alt="Decorative Line"
          />
          <img src="Flower.svg" alt="Decorative Flower" className='w-5'/>
          <h1 className="font-Philosopher text-xl md:text-xl lg:text-3xl font-extrabold tracking-widest whitespace-nowrap mx-3   ">
            What are You <br></br> Searching for?
          </h1>
          <img src="Flower.svg" alt="Decorative Flower" className='w-5' />
          <img
            src="Line 2.svg"
            className="w-36 md:w-48 lg:w-96"
            alt="Decorative Line"
          />
        </div>
        <SearchBar></SearchBar>
    </div>
  )
}

export default ExploreMenu
