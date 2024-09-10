// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
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

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};