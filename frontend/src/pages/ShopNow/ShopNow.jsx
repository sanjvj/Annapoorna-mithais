import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';

import FooterBar from '../../components/FooterBar';

const ShopNow = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');
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
      <Slider />
      <ExploreMenu title1='What are you' title2='searching for?' />      
      <FoodDisplay searchTerm={searchTerm} />
      <ShopHero />
      <Footer />
      <FooterBar cartItemCount={cartItemCount} />
    </div>
  );
};

export default ShopNow;