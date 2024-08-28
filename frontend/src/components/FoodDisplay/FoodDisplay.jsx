import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category, searchTerm }) => {
  const { food_list } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('1/2 KG');

  const filteredFoodList = food_list.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedWeight('1/2 KG');
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const getWeightPrice = () => {
    switch (selectedWeight) {
      case '1/4 KG': return selectedItem.price * 0.25;
      case '1/2 KG': return selectedItem.price * 0.5;
      case '1 KG': return selectedItem.price;
      default: return selectedItem.price;
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      name: selectedItem.name,
      quantity,
      weight: selectedWeight,
      price: getWeightPrice() * quantity,
      image: selectedItem.image,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Trigger a custom event to update the cart count in Navbar
    const event = new Event('storage');
    window.dispatchEvent(event);

    alert('Item added to cart!');
  };

  return (
    <div className='p-4' id='food-display'>
      {filteredFoodList.length > 0 ? (
        <div className='grid gap-6 md:gap-8 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 mx-auto max-w-screen-xl'>
          {filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              item={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center mt-20'>
          <h2 className='text-2xl font-bold text-gray-700 mb-4'>No Products Found</h2>
          <p className='text-gray-500'>Try adjusting your search or filter to find what you're looking for!</p>
        </div>
      )}

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50" onClick={handleCloseOverlay}>
          <div className="bg-white rounded-t-lg md:rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 relative transform md:translate-y-0 translate-y-full md:h-auto h-1/2" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseOverlay} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">&times;</button>
            <div className="flex flex-col md:flex-row gap-4">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-auto md:w-1/2 rounded-lg" />
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-bold">{selectedItem.name}</h2>
                <p className="text-gray-700">{selectedItem.description}</p>
                <p className="text-lg font-bold text-yellow-600">
                  ₹{getWeightPrice() * quantity} <span className="line-through text-gray-500">₹{selectedItem.offer * quantity}</span>
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button onClick={() => handleQuantityChange(-1)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                </div>
                <div className="flex gap-2 mt-4">
                  {['1/4 KG', '1/2 KG', '1 KG'].map(weight => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-2 py-1 rounded ${selectedWeight === weight ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="bg-[#E9DEC6] text-black font-bold py-2 px-4 rounded-lg" onClick={handleAddToCart}>Add to cart</button>
                  <button className="bg-black text-white font-bold py-2 px-4 rounded-lg">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;