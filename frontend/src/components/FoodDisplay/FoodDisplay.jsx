import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import SearchBar from '../SearchBar';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoodList = food_list.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-4' id='food-display'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredFoodList.length > 0 ? (
        <div className='grid gap-6 md:gap-8 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 mx-auto max-w-screen-2xl'>
          {filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              offer={item.offer}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-20'>
          <h2 className='text-2xl font-bold text-gray-700 mb-4'>No Products Found</h2>
          <p className='text-gray-500'>Try adjusting your search or filter to find what you're looking for!</p>
          
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;