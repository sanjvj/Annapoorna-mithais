import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";

const Hero = () => {
  const slides = [
    {
      url: "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/Banner%20image%201.png",
      name: "Product 1",
      price: "₹1400/kg",
    },
    {
      url: "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/Banner%20image%202.png",
      name: "Product 2",
      price: "₹1500/kg",
    },
    {
      url: "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/Banner%20image%203.png",
      name: "Product 3",
      price: "₹1600/kg",
    },
    {
      url: "https://raw.githubusercontent.com/sanjvj/Annapoorna_images/refs/heads/main/Banner%20image%204.png",
      name: "Product 4",
      price: "₹1700/kg",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center h-auto  md:h-[80vh] lg:h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] overflow-hidden">
      {/* Text Section */}
      <div className="w-full pt-[10px] pb-10 md:pt-[32px] pb-[32px]" style={{ backgroundImage: 'url(background.svg)' }}>
        <div className="gap-4 text-center md:mt-4">
          <h1 className="font-Philosopher text-[24px] md:text-[32px] font-black bg-gradient-to-r from-[#A5813B] to-[#8F6109] text-transparent bg-clip-text leading-[35.84px] pb-[12px]">
            Festivities are Flat <br />
            <span>Without Sweets</span>
          </h1>
          <p className="font-Nunito text-[12px] text-[#606060] font-normal leading-[16px]">
            Order now to ensure your festivities are filled with joy and flavor!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        {...handlers}
        className="relative flex items-center justify-center w-full h-auto lg:h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] overflow-hidden"
      >
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].name}
          className="w-full h-full object-contain md:object-cover"
        />
        <div className="absolute top-2  lg:top-8 left-8 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
          75% OFF
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-[#876115] backdrop-blur-md flex justify-between items-center px-10 py-2 md:py-4">
          <div>
            <h2 className="text-white font-semibold text-[16px] font-Nunito">{slides[currentIndex].name}</h2>
            <p className="text-white font-bold text-[14px] font-Nunito">{slides[currentIndex].price}</p>
          </div>
          <button className="bg-[#E9DEC6] text-[#6B4B34] text-[14px] font-Nunito font-bold rounded-full px-4 py-2 flex items-center gap-2">
            <img src="Cart.svg" className="w-[20px] h-[20px]" alt="Cart Icon" />
            Add to cart
          </button>
        </div> */}
        <div className="absolute top-4 right-4 lg:top-14 lg:right-16 flex space-x-1">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-all duration-300 shadow-md ${
                index === currentIndex ? "w-[32px] bg-[#F7AE1C] h-[6px]" : "bg-gray-300 w-[12px] h-[6px]"
              }`}
            />
          ))}
        </div>
        <div className="hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Hero;