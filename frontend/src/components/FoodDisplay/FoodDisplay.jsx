import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className='p-4' id='food-display'>
      <div className='grid gap-6 md:gap-8 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 mx-auto max-w-screen-2xl'>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;