import React, { useState } from "react";
import "../App.css";

const FilterComponent = ({ isOpen, applyFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [flavors, setFlavors] = useState([]);
  const [activeItem, setActiveItem] = useState(""); // State to track active item button
  const [activeFlavor, setActiveFlavor] = useState(""); // State to track active flavor button

  const handleApplyFilters = () => {
    applyFilters({ selectedCategory, priceRange, flavors });
  };

  const toggleActiveItem = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? "" : item));
  };

  const toggleActiveFlavor = (flavor) => {
    setActiveFlavor((prevFlavor) => (prevFlavor === flavor ? "" : flavor));
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 md:w-[324px] h-[747px] rounded-xl shadow-2xl mt-14 ease-in-out bg-white z-50 md:static md:translate-y-0`}
    >
      <div className="p-[32px] rounded-2xl">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-Nunito font-bold mb-4">
            Filter items
          </h2>
          <h2 className="text-[16px] font-Nunito font-bold mb-4 text-[#F7AE1C]">
            Clear all
          </h2>
        </div>
        <div className="mb-4">
          <label className="font-Nunito text-[10px] text-[#909090] font-bold">
            ITEMS
          </label>
          <div className="flex gap-2 mt-2">
            {["All", "Sweets", "Savouries"].map((item) => (
              <button
                key={item}
                onClick={() => toggleActiveItem(item)}
                className={`rounded-full py-[4px] px-[16px] border border-[#E6E6E6] font-Nunito text-[12px] font-semibold ${
                  activeItem === item ? "bg-[#F7AE1C] text-white" : "text-[#606060]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="font-Nunito text-[10px] text-[#909090] font-bold">
            FLAVOURS
          </label>
          <div className="flex gap-2 mt-2">
            {["All", "Best Sellers", "Combos"].map((flavor) => (
              <button
                key={flavor}
                onClick={() => toggleActiveFlavor(flavor)}
                className={`rounded-full py-[4px] px-[16px] border border-[#E6E6E6] font-Nunito text-[12px] font-semibold ${
                  activeFlavor === flavor ? "bg-[#F7AE1C] text-white" : "text-[#606060]"
                }`}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="font-Nunito text-[10px] text-[#909090] font-bold">
            PRICE RANGE
          </label>
          <input
            type="range"
            min="100"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([100, e.target.value])}
            className="w-full"
            style={{
              background: `linear-gradient(to right, #F7AE1C 0%, #F7AE1C ${
                (priceRange[1] - 100) / 19
              }%, #D9D9D9 ${(priceRange[1] - 100) / 19}%, #D9D9D9 100%)`,
              WebkitAppearance: "none",
              appearance: "none",
              height: "8px",
              borderRadius: "5px",
              outline: "none",
              transition: "background 0.3s ease-in-out",
            }}
          />
          <span>{`₹${priceRange[0]} - ₹${priceRange[1]}`}</span>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-[#332D21] rounded-lg text-white py-2 mt-4"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;