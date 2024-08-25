import React from 'react';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image,offer }) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden h-[370px] w-[218px] flex flex-col gap-auto'>
      <div className='relative'>
        <img className='w-[218px] h-[217px] object-cover rounded-lg' src={image} alt='Food item' />
        <span className='absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded'>
          75% OFF
        </span>
      </div>
      <div className='mt-3'>
        <p className=' font-Nunito font-bold text-[16px] truncate'>{name}</p>
        <p className='font-Nunito font-[300px] text-[#909090] text-sm overflow-hidden line-clamp-1 mb-2'>
          {description}
        </p>
        <p className='flex gap-2 font-Nunito font-bold text-sm text-[#606060] mb-[0px]'>₹{price} <span><p className='text-[#F7AE1C]'>with offer {offer}</p></span></p>
        <button className='flex gap-2 items-center justify-center font-Nunito mt-2 bg-[#E9DEC6] text-black font-bold  text-[14px] py-3 px-4 rounded-lg w-[198.17px] '>
        <span><img src='Cart.svg' className='h-[24px] w-[24px]'></img></span> Add to cart 
        </button>
      </div>
    </div>
  );
};

export default FoodItem;