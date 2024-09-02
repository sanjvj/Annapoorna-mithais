import React, { useState } from 'react';

const FilterComponent = ({ isOpen, applyFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [flavors, setFlavors] = useState([]);

  const handleApplyFilters = () => {
    applyFilters({ selectedCategory, priceRange, flavors });
  };

  return (
    <div className={`fixed inset-x-0 bottom-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out bg-white z-50  md:static md:translate-y-0`}>
      <div className="p-4 border-t-2 border-gray-200 h-full">
        <h2 className="text-lg font-bold mb-4">Filter Options</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 "
          >
            <option value="">All</option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, e.target.value])}
            className="w-full"
          />
          <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Flavors</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Flavor1"
                checked={flavors.includes('Flavor1')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFlavors([...flavors, 'Flavor1']);
                  } else {
                    setFlavors(flavors.filter((flavor) => flavor !== 'Flavor1'));
                  }
                }}
              />
              Flavor1
            </label>
            <label>
              <input
                type="checkbox"
                value="Flavor2"
                checked={flavors.includes('Flavor2')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFlavors([...flavors, 'Flavor2']);
                  } else {
                    setFlavors(flavors.filter((flavor) => flavor !== 'Flavor2'));
                  }
                }}
              />
              Flavor2
            </label>
            {/* Add more flavors as needed */}
          </div>
        </div>
        <button onClick={handleApplyFilters} className="w-full bg-blue-500 text-white py-2 rounded">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;