import React, { useState } from 'react'
import './Home.css'

import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Slider from '../../components/Slider/Slider'
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      {/* <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay> */}
    </div>
  )
}

export default Home
