import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });
  const [cartUpdateTrigger, setCartUpdateTrigger] = useState(0);
  
  // New state for address form
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    landmark: '',
    addressLine1: '',
    email: '',
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    };
  
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartUpdateTrigger(prev => prev + 1);
    const event = new Event('storage');
    window.dispatchEvent(event);
  };

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    updateCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const updateQuantity = (index, change) => {
    const updatedCart = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    updateCart(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setCartUpdateTrigger(prev => prev + 1);
    const event = new Event('storage');
    window.dispatchEvent(event);
  };

  // New functions for address form
  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  const addAddress = () => {
    // Here you can handle what happens when an address is added
    // For example, you might want to send it to an API or use it elsewhere
    console.log("Address added:", formData);
    // Reset the form after adding
    
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      cartUpdateTrigger, 
      clearCart,
      inputValue,
      setInputValue,
      formData,
      updateFormData,
      addAddress
    }}>
      {children}
    </CartContext.Provider>
  );
};