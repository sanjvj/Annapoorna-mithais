import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);
  const menuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const path = location.pathname.substring(1);
    setSelected(path);
  }, [location]);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener('storage', updateCartItemCount);

    return () => {
      window.removeEventListener('storage', updateCartItemCount);
    };
  }, []);

  const handleSelect = (page) => {
    setSelected(page);
    navigate(`/${page}`);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFF9EA] p-5 border-b-2 border-[#E9D9C2] lg:mb-0">
      <div className="flex items-center lg:hidden">
        <GiHamburgerMenu
          className="w-[24px] h-[24px] text-amber-900 cursor-pointer rounded-lg"
          onClick={toggleMenu}
        />
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
            <div className="absolute top-[-6px] right-[-4px] bg-red-500 text-white text-xs rounded-full w-4 h-4 items-center"><p className="items-center text-center text-[11px]">{cartItemCount}</p></div>
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
          className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden"
        >
          <div className="flex flex-col items-center p-4 z-50">
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