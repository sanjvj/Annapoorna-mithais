import React, { useState } from 'react'
import './Home.css'

import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Slider from '../../components/Slider/Slider'
import Review from '../../components/Review'
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <ExploreMenu title1='What are you' title2='searching for?'></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <Review></Review>
      <ExploreMenu title1='The Story Behind' title2='Your Sweets'></ExploreMenu>
    </div>
  )
}

export default Home
