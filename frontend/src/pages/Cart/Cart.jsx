import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';
import Login from '../../components/Login';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

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
    triggerCartUpdate();
  };

  const handleDeleteItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    triggerCartUpdate();
  };

  const triggerCartUpdate = () => {
    const event = new Event('storage');
    window.dispatchEvent(event);
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
      <Navbar />
      <Slider />
      <div className="p-10 lg:border-2 rounded-lg lg:m-10">
        {cartItems.length > 0 ? (
          <div className="lg:flex justify-between">
            <div className="w-full lg:w-5/12">
              <h2 className="text-[16px] font-Nunito font-extrabold mb-2">Your Cart</h2>
              <p className='text-[12px] font-Nunito text-[#909090] mb-4'>Cart is looking good with these items!</p>
              <div className='w-full h-[80px] bg-[#F8F8F8] rounded-lg'>
                <div className='flex justify-between px-3 pt-3 mb'>
                  <p className='font-Nunito font-bold text-[14px] flex'><span><img src='delivery.svg' className='w-[16px] h-[16px]'></img></span>Delivery</p>
                  <p className='font-Nunito font-bold text-[10px] text-[#909090] cursor-pointer'>CHANGE</p>
                </div>
              </div>
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between my-4 py-4">
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
                      <button onClick={() => handleQuantityChange(index, -1)} className="font-Nunito font-extrabold px-3 py-1 rounded">-</button>
                      <span className="mx-2 font-semibold font-Nunito">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(index, 1)} className="px-3 py-1 rounded font-extrabold font-Nunito">+</button>
                    </div>
                    <img src='delete.svg' onClick={() => handleDeleteItem(index)} className="cursor-pointer px-2 py-1 ml-2" />
                  </div>
                </div>
              ))}
            </div>
            <div className='border border-[#70513A30] h-auto mb-6 lg:mb-0'></div>
            <div className="w-full lg:w-6/12">
              <h3 className="text-[16px] font-extrabold font-Nunito mb-4">Cart Summary</h3>
              <div className='bg-[#F8F8F8] w-full lg:w-10/12 p-6 rounded-lg'>
                <div className='flex justify-between my-2'>
                  <p className='text-[#909090] text-[12px] font-semibold font-Nunito'>TOTAL AMOUNT</p>
                  <p className='font-bold font-Nunito text-[#606060] text-[14px]'>₹{calculateSubtotal()}</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-[#909090] text-[12px] font-semibold font-Nunito'>GST (12%) </p>
                  <p className='font-bold font-Nunito text-[#606060] text-[14px]'>₹{gst.toFixed(2)}</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-[#909090] text-[12px] font-semibold font-Nunito'>SPECIAL OFFER </p>
                  <p className='font-bold font-Nunito text-[#606060] text-[14px]'>-₹{specialOffer}</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-[#909090] text-[12px] font-semibold font-Nunito'>DELIVERY FEE </p>
                  <p className='font-Nunito text-[#D31B21] text-[14px] font-extrabold'>FREE</p>
                </div>
                <div className='flex justify-between p-4 mt-4 bg-[#EDEDED] rounded-lg'>
                  <h4 className="text-[12px] font-extrabold font-Nunito">FINAL AMOUNT TO PAY</h4>
                  <p className='text-[16px] font-extrabold font-Nunito'>₹{total.toFixed(2)}</p>
                </div>
                <div className='flex gap-1 mt-3'>
                  <img src='saving.svg'></img>
                  <p className='text-[#26A460] text-[14px] font-bold font-Nunito'>You saved ₹499 in this order!</p>
                </div>
              </div>
              <button 
                onClick={() => setShowLogin(true)}
                className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg mt-6 w-full lg:w-10/12"
              >
                Place Your Order Now
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl font-bold">Your cart is empty.</p>
          </div>
        )}
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Login setShowLogin={setShowLogin} />
        </div>
      )}

      <ShopHero />
      <Footer />
    </div>
  );
};

export default CartPage;