import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Slider/Slider';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Review from '../../components/Review';
import Story from '../../components/Story';
import Footer from '../../components/Footer';
import FooterBar from '../../components/FooterBar';

const Home = () => {
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
      <Hero />
      <Slider />
      <ExploreMenu title1='What are you' title2='searching for?' />
      <FoodDisplay category={category} setCategory={setCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Review />
      <Footer />
      <FooterBar cartItemCount={cartItemCount} />
    </div>
  );
};

export default Home;