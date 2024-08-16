import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[92vh] bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-4">
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <img src="Line.svg" className="w-24 md:w-32 lg:w-48" alt="Decorative Line" />
          <img src="Flower.svg" alt="Decorative Flower" />
          <h1 className="font-Nunito text-base md:text-lg lg:text-xl font-extrabold tracking-widest whitespace-nowrap">
            FESTIVE DELIGHTS
          </h1>
          <img src="Flower.svg" alt="Decorative Flower" />
          <img src="Line 2.svg" className="w-24 md:w-32 lg:w-48" alt="Decorative Line" />
        </div>

        <div className="flex flex-col gap-4 text-center mt-4">
          <h1 className="font-Philosopher text-3xl md:text-5xl font-black bg-gradient-to-r from-[#A5813B] to-[#8F6109] text-transparent bg-clip-text">
            Festivities are Flat <br />
            <span>Without Sweets</span>
          </h1>
          <p className="font-Nunito text-lg md:text-2xl text-[#606060] font-normal">
            Order now to ensure your festivities <br />
            are filled with joy and flavor!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center lg:w-1/2 p-4 lg:mr-20">
        <div className="relative w-full flex flex-col gap-5 justify-center items-center">
          <img src="image.png" className="w-full h-auto" alt="Decorative Image" />
          <button className="bg-[#E5BC8470] border rounded-xl w-full p-3 mb-20 lg:mb-0">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;