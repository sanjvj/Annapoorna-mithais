import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchWithFilter = ({ searchTerm, setSearchTerm, toggleFilter }) => {
  return (
    <div className='flex w-full md:w-full justify-center'>
      <div className="flex justify-center w-[580px] mt-4">
        <div className="flex items-center bg-[#F8F8F8] border-2 border-[#E6E6E6] rounded-full p-1 w-full max-w-lg mx-4 sm:mx-8 font-Nunito">
          <input
            type="text"
            placeholder="Search your favourite"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-3 py-2 text-gray-700 bg-[#F8F8F8] rounded-full focus:outline-none"
          />
          <FiSearch className="text-gray-500 w-6 h-6 mr-2" />
        </div>
      </div>
      <div
        onClick={toggleFilter}
        className='w-[80px] md:w-[48px] h-40px md:h-[48px] mt-4 bg-[#F8F8F8] items-center flex justify-center rounded-lg cursor-pointer'
      >
        <img src='filter.svg' className='items-center w-[20px] h-[20px]' alt="Filter" />
      </div>
    </div>
  );
};

export default SearchWithFilter;