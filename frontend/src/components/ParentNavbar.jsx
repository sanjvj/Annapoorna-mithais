import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FooterBar from './FooterBar';

const ParentNavbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

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

  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <FooterBar cartItemCount={cartItemCount} />
    </div>
  );
};

export default ParentNavbar;