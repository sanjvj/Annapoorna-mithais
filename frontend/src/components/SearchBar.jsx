import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#F8F8F8] border-2 border-[#E6E6E6] rounded-full shadow-md p-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search your favourite"
        className="flex-grow px-4 py-2 text-gray-700 bg-[#F8F8F8] rounded-full focus:outline-none"
      />
      <FiSearch className="text-gray-500 w-6 h-6 mr-2" />
    </div>
  );
};

export default SearchBar;