import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import AboutHero from '../../components/AboutHero'
import Footer from '../../components/Footer'
import ShopHero from '../../components/ShopHero'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <AboutHero></AboutHero>
      <ShopHero></ShopHero>
      <Footer></Footer>
    </div>
  )
}

export default About
