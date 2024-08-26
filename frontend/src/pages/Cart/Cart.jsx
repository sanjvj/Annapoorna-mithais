import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index, change) => {
    const updatedCart = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDeleteItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateFinalAmount = () => {
    const subtotal = calculateSubtotal();
    const gst = subtotal * 0.12; // 12% GST
    const specialOffer = 400; // Fixed discount
    return {
      total: subtotal + gst - specialOffer,
      gst,
      specialOffer,
    };
  };

  const { total, gst, specialOffer } = calculateFinalAmount();

  return (
    <div>
    <Navbar></Navbar>
    <Slider />
        <div className="p-10 lg:border-2 rounded-lg lg:m-10">
      <h2 className="text-[16px] font-Nunito font-bold mb-2">Your Cart</h2>
      <p className='text-[12px] font-Nunito text-[#909090] mb-4'>Cart is looking good with these items!</p>
      {cartItems.length > 0 ? (
        <div className="lg:flex justify-between">
          <div className=" w-full lg:w-4/12">
          <div className='w-full h-[80px] bg-[#F8F8F8] rounded-lg '>
          <div className='flex justify-between px-3 pt-3 mb'>
          <p className='font-Nunito font-bold text-[14px] flex'><span><img src='delivery.svg' className='w-[16px] h-[16px]'></img></span>Delivery</p>
          <p className='font-Nunito font-bold text-[10px] text-[#909090] cursor-pointer'>CHANGE</p>
          </div>
          </div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between my-4 py-4 ">
                
                <div className='flex'>
                  <img src={item.image} alt={item.name} className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] mr-4 rounded" />
                  <div>
                  <h3 className="text-[12px] lg:text-[16px] font-bold">{item.name}</h3>
                  <p className='text-[10px] lg:text-[12px] font-bold text-[#909090]'>₹{item.price} per {item.weight}</p>
                  <p className='text-[10px] lg:text-[12px] font-bold text-[#F7AE1C]'>with offer ₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className='bg-[#F8F8F8] w-[83px] items-center flex justify-center rounded-lg'>
                  <button onClick={() => handleQuantityChange(index, -1)} className=" px-3 py-1 rounded">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, 1)} className="px-3 py-1 rounded">+</button>
                  </div>
                  <img src='delete.svg' onClick={() => handleDeleteItem(index)} className="cursor-pointer px-2 py-1 ml-2"></img>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-5/12 p-4 border rounded">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <p>Total Amount: ₹{calculateSubtotal()}</p>
            <p>GST (12%): ₹{gst.toFixed(2)}</p>
            <p>Special Offer: -₹{specialOffer}</p>
            <p>Delivery Fee: FREE</p>
            <h4 className="text-lg font-bold mt-4">Final Amount to Pay: ₹{total.toFixed(2)}</h4>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg mt-4">Place Your Order Now</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-bold">Your cart is empty.</p>
        </div>
      )}
    </div>
    <ShopHero />
    <Footer></Footer>
    </div>
  );
};

export default CartPage;