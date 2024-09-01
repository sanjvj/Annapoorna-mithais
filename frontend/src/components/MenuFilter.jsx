import React, { useState } from 'react';
import FoodDisplay from './FoodDisplay/FoodDisplay'; // Ensure this import is correct

const MenuFilter = () => {
  const [selectedItem, setSelectedItem] = useState('All Items'); // State to track the selected item

  const menuItems = [
    { name: 'All Items', icon: 'AllItems.svg' },
    { name: 'Sweets', icon: 'Sweets.svg' },
    { name: 'Savouries', icon: 'Savouries.svg' },
    { name: 'Festive Combos', icon: 'FestiveCombos.svg' },
  ];

  return (
    <div>
      <div className="flex gap-10 mt-8 items-center justify-center">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex gap-2 cursor-pointer ${selectedItem === item.name ? 'font-bold' : ''}`} // Apply bold font if selected
            onClick={() => setSelectedItem(item.name)} // Update selected item on click
          >
            <img 
              src={item.icon} 
              alt={item.name}
              className={selectedItem === item.name ? 'filter-yellow' : ''} // Apply CSS class to change SVG color
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <FoodDisplay category={selectedItem} /> {/* Pass selected category to FoodDisplay */}
    </div>
  );
};

export default MenuFilter;