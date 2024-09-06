import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import ContactHero from '../../components/ContactHero'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero/Hero'
import ShopHero from '../../components/ShopHero'
import FooterBar from '../../components/FooterBar'
const Contact = () => {
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
      <Navbar cartItemCount={cartItemCount}/>
      <Slider></Slider>
      <ContactHero></ContactHero>
      <ShopHero></ShopHero>
      <Footer></Footer>
      <FooterBar cartItemCount={cartItemCount}></FooterBar>
    </div>
  )
}

export default Contact
