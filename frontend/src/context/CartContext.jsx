import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return storedCart;
  });
  const [cartUpdateTrigger, setCartUpdateTrigger] = useState(0);
  
  // Load inputValue and formData from localStorage
  const [inputValue, setInputValue] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('userInfo')) || {};
    return storedData.inputValue || '';
  });
  
  const [formData, setFormData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('userInfo')) || {};
    return storedData.formData || {
      name: '',
      mobile: '',
      pincode: '',
      landmark: '',
      addressLine1: '',
      email: '',
    };
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
    };
  
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Update localStorage whenever inputValue or formData changes
  useEffect(() => {
    const userInfo = { inputValue, formData };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [inputValue, formData]);

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
    setFormData(prevData => {
      const updatedData = { ...prevData, ...newData };
      const userInfo = { inputValue, formData: updatedData };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      return updatedData;
    });
  };

  const setInputValueAndStore = (value) => {
    setInputValue(value);
    const userInfo = { inputValue: value, formData };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const addAddress = () => {
    console.log("Address added:", formData);
    // You can add any additional logic here if needed
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
      setInputValue: setInputValueAndStore,
      formData,
      updateFormData,
      addAddress
    }}>
      {children}
    </CartContext.Provider>
  );
};