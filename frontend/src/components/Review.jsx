import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { review } from '../assets/assets'; // Assuming 'review' is exported from assets.js
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Review = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className='w-full bg-[#F6EFE2] mt-[64px] py-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className="flex items-center justify-center gap-2 mb-10">
          <img
            src="Line.svg"
            className="w-36 md:w-36 lg:w-48"
            alt="Decorative Line"
          />
          <img src="Flower.svg" alt="Decorative Flower" className='w-5' />
          <h1 className="font-Nunito text-[10px] lg:text-[12px] font-bold tracking-widest whitespace-nowrap mx-3 leading-[35.84px]">
            CUSTOMER REVIEWS
          </h1>
          <img src="Flower.svg" alt="Decorative Flower" className='w-5' />
          <img
            src="Line 2.svg"
            className="w-36 md:w-36 lg:w-48"
            alt="Decorative Line"
          />
        </div>

        <div className='relative w-full' {...handlers}>
          <div ref={scrollRef} className='flex overflow-hidden px-4'>
            {review.map(item => (
              <div key={item._id} className='bg-white rounded-lg shadow-md p-6 mx-2' style={{ minWidth: '409px', height: '202px' }}>
                <p className='text-gray-700 mb-4'>{item.content}</p>
                <div className='flex items-center'>
                  <img src="avatar.svg" alt="Avatar" className='w-8 h-8 rounded-full mr-3' />
                  <div>
                    <p className='font-bold'>{item.name}</p>
                    <div className='flex'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <img key={i} src={item.stars} alt="Star" className='w-4 h-4' />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='hidden lg:flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4'>
            <button onClick={() => scroll('left')} className='bg-white p-2 rounded-full shadow-md opacity-0 hover:opacity-100 transition-opacity'>
              <BsChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className='bg-white p-2 rounded-full shadow-md opacity-0 hover:opacity-100 transition-opacity'>
              <BsChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;