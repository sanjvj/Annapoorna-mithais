import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import SearchWithFilter from '../../components/SearchWithFilter';

const ShopNow = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar />
      <Slider />
      <ExploreMenu title1='What are you' title2='searching for?' />
      <SearchWithFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchWithFilter>
      
      
      <FoodDisplay searchTerm={searchTerm} />
      <ShopHero />
      <Footer />
    </div>
  );
};

export default ShopNow;