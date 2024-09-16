import React, { useContext, useState,useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';
import ProfileHero from '../../components/ProfileHero';

const ProfilePage = () => {
    const [cartItemCount, setCartItemCount] = useState(0);

    const updateCartItemCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = storedCart.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(count);
    };
  
    useEffect(() => {
      updateCartItemCount();
      window.addEventListener("storage", updateCartItemCount);
  
      return () => {
        window.removeEventListener("storage", updateCartItemCount);
      };
    }, []);
    return(
  <div>
    <Navbar cartItemCount={cartItemCount} />
    <Slider></Slider>
    <ProfileHero></ProfileHero>
    <ShopHero></ShopHero>
    <Footer></Footer>
  </div>)
};

export default ProfilePage;