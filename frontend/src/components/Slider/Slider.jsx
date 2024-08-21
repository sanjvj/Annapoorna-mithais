import React from "react";

const Slider = () => {
  return (
    <div className="overflow-hidden py-6 bg-[#AF2126] relative">
      <div className="flex w-[200%] animate-slide">
        <div className="flex w-1/2 justify-around">
          {/* Flex container for image and text */}
          <div className="flex items-center">
            <img
              src="Affordable.svg"
              className="h-5 w-5"
              alt="Affordable Icon"
            />
            <h1 className="ml-2 text-base md:text-lg lg:text-xl font-normal text-white">Affordable</h1>
          </div>
          <div className="flex items-center">
            <img
              src="Dailymade.svg"
              className="h-5 w-5"
              alt="Daily Made Icon"
            />
            <h1 className="ml-2 text-base md:text-lg lg:text-xl font-normal text-white">Daily Made</h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-base md:text-lg lg:text-xl font-normal text-white">No chemicals</h1>
          </div>
        </div>

        <div className="flex w-1/2 justify-around">
          <div className="flex items-center">
            <img
              src="Affordable.svg"
              className="h-5 w-5"
              alt="Affordable Icon"
            />
            <h1 className="ml-2 text-base md:text-lg lg:text-xl font-normal text-white">Affordable</h1>
          </div>
          <div className="flex items-center">
            <img
              src="Dailymade.svg"
              className="h-5 w-5"
              alt="Daily Made Icon"
            />
            <h1 className="ml-2 text-xs md:text-lg lg:text-xl font-normal text-white">Daily Made</h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-base md:text-lg lg:text-xl font-normal text-white">No chemicals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;