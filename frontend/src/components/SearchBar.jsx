import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="flex items-center bg-[#F8F8F8] border-2 border-[#E6E6E6] rounded-full p-1 w-full max-w-lg mx-4 sm:mx-8 font-Nunito">
        <input
          type="text"
          placeholder="Search your favourite"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-3 py-2 text-gray-700 bg-[#F8F8F8] rounded-full focus:outline-none"
        />
        <FiSearch className="text-gray-500 w-6 h-6 mr-2 font-Nunito" />
      </div>
    </div>
  );
};

export default SearchBar;