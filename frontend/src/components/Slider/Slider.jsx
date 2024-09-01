import React from "react";

const Slider = () => {
  return (
    <div className="overflow-hidden py-6 bg-[#AF2126] relative">
      <div className="flex w-[500%] lg:w-[200%] animate-slide">
        <div className="flex w-1/2 justify-around">
          {/* Flex container for image and text */}
          <div className="flex items-center">
            <img
              src="Affordable.svg"
              className="h-5 w-5"
              alt="Affordable Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Synthetic Colors
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Dailymade.svg"
              className="h-5 w-5"
              alt="Daily Made Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Artificial Flavours
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              Natural Aroma
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              100% Vegetarian
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Gimmicks
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              True Ingredients
            </h1>
          </div>
        </div>

        <div className="flex w-1/2 justify-around">
          <div className="flex items-center">
            <img
              src="Affordable.svg"
              className="h-5 w-5"
              alt="Affordable Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Synthetic Colors
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Dailymade.svg"
              className="h-5 w-5"
              alt="Daily Made Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Artificial Flavours
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              Natural Aroma
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              100% Vegetarian
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Gimmicks
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              True Ingredients
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;