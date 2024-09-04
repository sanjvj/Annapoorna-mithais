import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = ({ cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const menuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setSelected(path);
  }, [location]);

  const handleSelect = (page) => {
    setSelected(page);
    navigate(`/${page}`);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] p-5 border-b-2 border-[#E9D9C2] lg:mb-0">
      <div className="flex items-center lg:hidden">
        {isOpen ? (
          <MdClose
            className="w-[24px] h-[24px] text-amber-900 cursor-pointer rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <GiHamburgerMenu
            className="w-[24px] h-[24px] text-amber-900 cursor-pointer rounded-lg"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      <div className="ml-4">
        <img src="Logo.svg" alt="Logo" />
      </div>

      <div className="hidden lg:flex gap-24 font-Nunito">
        <h1
          className={`text-[#70513A] text-sm cursor-pointer ${selected === '' ? 'underline-animation font-bold' : 'font-semibold'}`}
          onClick={() => handleSelect('')}
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

      <div className="flex gap-10 h-6 mr-4">
        <div className="relative cursor-pointer" onClick={() => handleSelect('cart')}>
          <img src="Cart.svg" className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px] text-[#70513A]" />
          {cartItemCount > 0 && (
            <div className="absolute top-[-6px] right-[-4px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>
        <div
          className={`cursor-pointer ${selected === 'profile' ? 'underline-animation' : ''}`}
          onClick={() => handleSelect('profile')}
        >
          <img src="Profile.svg" className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px] text-[#70513A]" />
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden h-1/3 overflow-y-auto z-50"
        >
          <div className="flex flex-col items-center p-4">
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('')}>Home</h1>
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('shop')}>Shop Now</h1>
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('about')}>About Us</h1>
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('contact')}>Contact Us</h1>
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('cart')}>Cart</h1>
            <h1 className="py-2 text-[#70513A] font-Nunito" onClick={() => handleSelect('profile')}>Profile</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;