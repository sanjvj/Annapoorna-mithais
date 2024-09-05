import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import ContactHero from '../../components/ContactHero'
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
    </div>
  )
}

export default Contact
