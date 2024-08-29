import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";

const Hero = () => {
  const slides = [
    {
      url: "image.png",
      name: "Product 1",
      price: "₹1400/kg",
    },
    {
      url: "https://img.freepik.com/premium-photo/bowl-colorful-balls-with-red-yellow-sponge-table_662214-166093.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
      name: "Product 2",
      price: "₹1500/kg",
    },
    {
      url: "https://img.freepik.com/free-photo/still-life-spanish-tortilla_23-2150166710.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
      name: "Product 3",
      price: "₹1600/kg",
    },
    {
      url: "https://img.freepik.com/premium-photo/indian-traditional-sweet-gulab-jamun-black-table_1234738-385633.jpg?uid=R151607001&ga=GA1.1.1345988329.1724190548&semt=ais_hybrid",
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
    <div className="flex flex-col items-center h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] overflow-hidden">
      {/* Text Section */}
      <div className="w-full pt-[32px] pb-[32px]" style={{ backgroundImage: 'url(background.svg)' }}>
        <div className="gap-4 text-center mt-4">
          <h1 className="font-Philosopher text-[32px] font-black bg-gradient-to-r from-[#A5813B] to-[#8F6109] text-transparent bg-clip-text leading-[35.84px] pb-[12px]">
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
        className="relative flex items-center justify-center w-full h-full"
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          alt="Decorative Image"
        />
        <div className="absolute top-8 left-8 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">
          75% OFF
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-[#876115] backdrop-blur-md flex justify-between items-center px-10 py-4">
          <div>
            <h2 className="text-white font-semibold">{slides[currentIndex].name}</h2>
            <p className="text-white font-bold">{slides[currentIndex].price}</p>
          </div>
          <button className="bg-[#E9DEC6] text-[#6B4B34] font-bold rounded-full px-4 py-2 flex items-center gap-2">
            <img src="Cart.svg" className="w-[20px] h-[20px]" alt="Cart Icon" />
            Add to cart
          </button>
        </div>
        <div className="absolute top-14 right-16 flex space-x-1">
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