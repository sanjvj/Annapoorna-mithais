import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Slider from '../../components/Slider/Slider';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Review from '../../components/Review';
import Story from '../../components/Story';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <ExploreMenu title1='What are you' title2='searching for?' />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FoodDisplay category={category} searchTerm={searchTerm} />
      <Review />
      <Story />
      <Footer />
    </div>
  );
};

export default Home;