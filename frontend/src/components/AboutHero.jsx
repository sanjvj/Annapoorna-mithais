import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  md:mx-[100px] my-[40px] gap-10">
        <img src="PlaylistCover.svg" className="w-full md:h-auto md:w-auto"></img>
        <div className="mx-8">
          <h1 className="mb-1 font-Nunito text-[14px] font-bold text-[#606060]">About</h1>
          <p className="mb-6 font-[400px] text-[14px] font-Nunito text-[#606060]">
            Annapoorna Mithai is a Celebration hub for all Vegetarian and Sweet
            lovers, a cosy ambiance with party halls and private dining to
            leisure with yummy food. Our prime goal is to give a consistent
            quality and a lip smacking taste. We also showcase unique return
            gifts, such as Indoor plants, fancy planters and sweet gift boxes.
          </p>

          <h1 className="mb-1 font-Nunito text-[14px] font-bold text-[#606060]">Menu and Culture</h1>
          <p className="mb-6 font-[400px] text-[14px] font-Nunito text-[#606060]">
            Our Cuisines cater exclusive to North Indians, Jains & all vegan
            lovers. We have an elaborate menu available - from hot jalebi to
            cold Bengali sweets at your table with spongy rasgulla and malai
            roll, from crunchy Chaat to samosa, kachori, dhokla and pani poori.
            Along with pure veg Cakes, cookies, soups, sizzlers, pizzas, pasta,
            burgers and sandwiches besides Chinese and various Indian recipes.
            It is a paradise for foodies. The Price Ranges from Rs.15 to
            Rs.1250. The Weekend Chef’s special will make you discover new
            dishes emerging in the market.
          </p>

          <h1 className="mb-1 font-Nunito text-[14px] font-bold text-[#606060]">History</h1>
          <p className="mb-6 font-[400px] text-[14px] font-Nunito text-[#606060]">
            Our Legacy of Restaurant and Sweet business has crossed 4 decades.
            We, the 3rd Generation wanted to establish something different and
            as a result we Branded the best veg restaurant in Madurai from 10
            July 2016.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
