import React from 'react';
import { useState } from 'react';

const FooterBar = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around items-center py-[24px] sm:flex md:hidden lg:hidden">
      <div className="text-center">
        <img src="home.svg" alt="Home" className="mx-auto" />
        
      </div>
      <div className="text-center">
        <img src="shop.svg" alt="Food" className="mx-auto" />
      </div>
      <div className="relative cursor-pointer" >
          <img src="cart2.svg" className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px] text-[#70513A]" />
          {cartItemCount > 0 && (
            <div className="absolute top-[-6px] right-[-4px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>
      <div className="text-center">
        <img src="profile2.svg" alt="Profile" className="mx-auto" />
        
      </div>
    </div>
  );
};

export default FooterBar;