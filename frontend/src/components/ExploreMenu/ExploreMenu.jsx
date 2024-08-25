import React from 'react';
import SearchBar from '../SearchBar';

const ExploreMenu = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <div className="flex items-center justify-center gap-2 mt-10 mb-4">
        <img
          src="Line.svg"
          className="w-36 md:w-48 lg:w-96"
          alt="Decorative Line"
        />
        <img src="Flower.svg" alt="Decorative Flower" className='w-5' />
        <h1 className="font-Philosopher text-center text-xl lg:text-[32px] font-bold tracking-widest whitespace-nowrap mx-3 leading-[35.84px]">
          {props.title1} <br /> {props.title2}
        </h1>
        <img src="Flower.svg" alt="Decorative Flower" className='w-5' />
        <img
          src="Line 2.svg"
          className="w-36 md:w-48 lg:w-96"
          alt="Decorative Line"
        />
      </div>
    </div>
  );
};

export default ExploreMenu;