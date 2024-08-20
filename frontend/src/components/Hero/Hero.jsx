import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";

const Hero = () => {
  const slides = [
    { url: "image.png" },
    {
      url: "https://img.freepik.com/premium-photo/bowl-colorful-balls-with-red-yellow-sponge-table_662214-166093.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/free-photo/still-life-spanish-tortilla_23-2150166710.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
    },
    {
      url: "https://img.freepik.com/premium-photo/indian-traditional-sweet-gulab-jamun-black-table_1234738-385633.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col lg:flex-row lg:h-[92vh] bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 p-4">
        <div className="flex items-center justify-center gap-2">
          <img
            src="Line.svg"
            className="w-36 md:w-36 lg:w-48"
            alt="Decorative Line"
          />
          <img src="Flower.svg" alt="Decorative Flower" className="w-5" />
          <h1 className="font-Nunito text-base md:text-lg lg:text-xl font-extrabold tracking-widest whitespace-nowrap">
            FESTIVE DELIGHTS
          </h1>
          <img src="Flower.svg" alt="Decorative Flower" className="w-5" />
          <img
            src="Line 2.svg"
            className="w-36 md:w-24 lg:w-48"
            alt="Decorative Line"
          />
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
      <div
        {...handlers}
        className="relative flex items-center justify-center lg:w-1/2 p-4 lg:mr-20"
      >
        <div className="relative max-w-[1440px] h-[780px] w-full m-auto py-16 px-4 flex flex-col gap-5 justify-center items-center group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            alt="Decorative Image"
          />
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft
              onClick={prevSlide}
              size={30}
            ></BsChevronCompactLeft>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight
              onClick={nextSlide}
              size={30}
            ></BsChevronCompactRight>
          </div>

          <div className="flex justify-center mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "w-10 bg-[#F7AE1C]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <button className="bg-[#E5BC8470] border rounded-xl w-full p-3 mb-20 lg:mb-0">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;