import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('home');
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (page) => {
    setSelected(page);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] p-5 border-b-2 border-[#E9D9C2] mb-10 lg:mb-0">
      {/* Hamburger Icon for Small and Medium Screens */}
      <div className="flex items-center lg:hidden">
        <GiHamburgerMenu
          className="w-[24px] h-[24px] text-amber-900 cursor-pointe rounded-lg"
          onClick={toggleMenu}
        />
      </div>

      {/* Logo */}
      <div className="ml-4">
        <img src="Logo.svg" alt="Logo" />
      </div>

      {/* Desktop Menu for Large Screens */}
      <div className="hidden lg:flex gap-24 font-Nunito">
        <h1
          className={`text-[#70513A] text-sm cursor-pointer ${selected === 'home' ? 'underline-animation font-bold' : 'font-semibold'}`}
          onClick={() => handleSelect('home')}
        >
          Home
        </h1>
        <h1
          className={`text-[#70513A] text-sm cursor-pointer ${selected === 'shop' ? 'underline-animation font-bold' : 'font-semibold'}`}
          onClick={() => handleSelect('shop')}
        >
          Shop Now
        </h1>
        <h1
          className={`text-[#70513A] text-sm cursor-pointer ${selected === 'about' ? 'underline-animation font-bold' : 'font-semibold'}`}
          onClick={() => handleSelect('about')}
        >
          About Us
        </h1>
        <h1
          className={`text-[#70513A] text-sm cursor-pointer ${selected === 'contact' ? 'underline-animation font-bold' : 'font-semibold'}`}
          onClick={() => handleSelect('contact')}
        >
          Contact Us
        </h1>
      </div>

      {/* Cart and Profile Icons */}
      <div className="flex gap-10 h-6 mr-4">
        <img src="Cart.svg" className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] text-[#70513A]" />
        <img src="Profile.svg" className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] text-[#70513A]" />
      </div>

      {/* Mobile and Medium Screen Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden"
        >
          <div className="flex flex-col items-center p-4">
            <h1 className="py-2 text-[#70513A]" onClick={() => handleSelect('home')}>Home</h1>
            <h1 className="py-2 text-[#70513A]" onClick={() => handleSelect('shop')}>Shop Now</h1>
            <h1 className="py-2 text-[#70513A]" onClick={() => handleSelect('about')}>About Us</h1>
            <h1 className="py-2 text-[#70513A]" onClick={() => handleSelect('contact')}>Contact Us</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;