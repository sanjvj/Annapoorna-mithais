import React, { useState, useEffect, useContext, createContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import ShopHero from '../../components/ShopHero';
import Footer from '../../components/Footer';
import Login from '../../components/Login';
import FooterBar from '../../components/FooterBar';
import OTPVerification from '../../components/OTPVerification';
import axios from "axios";
import { CartContext } from '../../context/CartContext';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import OrderPlacedModal from '../../components/OrderPlaced';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartUpdateTrigger,clearCart } = useContext(CartContext);

useEffect(() => {
  // This effect will run whenever cartUpdateTrigger changes
  // You can add any additional logic here if needed
}, [cartItems]);
  const [inputValue,setInputValue] = useState('');
  const [loggedin,setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showOrderPlaced,setShowOrderPlaced] = useState(false);
  const handleSendOtp = () => {
    setShowLogin(true);
    console.log(cartItems)
  }
  // const handlePlaceOrder = async () => {
    
  //   // Step 1: Create an order in your backend to get an order ID
  //   const response = await fetch(
  //     "https://annapoorna-backend.onrender.com/customers/create-order ",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
        
  //       body: JSON.stringify({
  //         totalPrice: total.toFixed(2), // Amount to be paid
  //         currency: "INR", // Currency
  //         name: "muhil",
  //         email: "muhil@gmail.com",
  //         mobile: "9342407556",
  //         role: "customer",
  //         orderItems: [{ name: "Demo", price: 200 }],
  //       }),
  //       credentials: "include",
  //     }
  //   );

  //   const order = await response.json();

  //   // Step 2: Initiate the Razorpay payment

  //   const options = {
  //     key: "rzp_test_ZyVKG8K6k1Gol1",
  //     amount: order.amount, // Amount in paise
  //     currency: "INR",
  //     name: "Your Store Name",
  //     description: "Order Payment",
  //     order_id: order.id, // Order ID from backend
  //     handler: async (response) => {
  //       // Payment successful - send payment details to backend to update order status
  //       const paymentResponse = await fetch(
  //         "http://localhost:8000/customers/verify-payment",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
            
  //           body: JSON.stringify({
  //             orderId: order.id,
  //             paymentId: response.razorpay_payment_id,
  //             razorpayOrderId: response.razorpay_order_id,
  //             razorpaySignature: response.razorpay_signature,
  //           }),
  //           credentials:"include"
  //         }
  //       );

  //       const result = await paymentResponse.json();
  //       if (result.success) {
  //         alert("Payment successful and order updated!");
  //         // Redirect to order confirmation page or show a success message
  //       } else {
  //         alert(
  //           "Payment successful but failed to update order. Please contact support."
  //         );
  //       }
  //     },
  //     prefill: {
  //       name: "muhil",
  //       email: "muhil@gmail.comm",
  //       contact: 934240756,
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };
  const handlePlaceOrder = async () => {
    
    try {
      
      console.log(document.cookie); // This might not show HttpOnly cookies
      console.log(cartItems)
      // Step 1: Create an order in your backend to get an order ID
      const authToken = localStorage.getItem("authToken");
      
      // Make sure authToken exists
      if (!authToken) {
        throw new Error("No authentication token found. Please log in.");
      }
      const cart = localStorage.getItem("cart");
      const response = await axios.post(
        "https://annapoorna-backend.onrender.com/customers/create-order",
        {
          totalPrice: total.toFixed(2),
          currency: "INR",
          name: "muhil",
          email: "muhil@gmail.com",
          mobile: "9342407556",
          role: "customer",
          orderItems: cartItems,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
  
      const order = response.data;
  
      // Step 2: Initiate the Razorpay payment
      const options = {
        key: "rzp_test_ZyVKG8K6k1Gol1",
        amount: order.amount,
        currency: "INR",
        name: "Your Store Name",
        description: "Order Payment",
        order_id: order.id,
        handler: async (response) => {
          try {
            setIsLoading(true);
            const paymentResponse = await axios.post(
              "https://annapoorna-backend.onrender.com/customers/verify-order",
              {
                orderId: order.id,
                paymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                orderItems: cartItems,
                totalAmount: total.toFixed(2)
              },
              {
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authToken}`, // Use authToken here, not token
                },
              }
            );
  
            const result = paymentResponse.data;
            if (result.status) {
              setShowOrderPlaced(true);
              clearCart();
              
              // Redirect to order confirmation page or show a success message
            } else {
              alert(
                "Payment successful but failed to update order. Please contact support."
              );
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment. Please contact support.");
          }finally {
            setIsLoading(false); // Stop loading regardless of outcome
          }
        },
        prefill: {
          name: "muhil",
          email: "muhil@gmail.com", // Fixed typo in email
          contact: "9342407556", // Changed to string for consistency
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      alert("Failed to create order. Please try again.");
    }
  };
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener('storage', updateCartItemCount);

    return () => {
      window.removeEventListener('storage', updateCartItemCount);
    };
  }, []);
  
  const [showLogin, setShowLogin] = useState(false);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCartItems(storedCart);
  // }, []);

  const handleQuantityChange = (index, change) => {
    updateQuantity(index, change);
  };

  const handleDeleteItem = (index) => {
    removeFromCart(index);
  };

  // const handleDeleteItem = (index) => {
  //   const updatedCart = cartItems.filter((_, i) => i !== index);
  //   setCartItems(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  //   triggerCartUpdate();
  // };

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
    const specialOffer = 0; // Fixed discount
    return {
      total: subtotal + gst - specialOffer,
      gst,
      specialOffer,
    };
  };

  const { total, gst, specialOffer } = calculateFinalAmount();

  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <Slider />
      {isLoading && <Loader />}
      {showOrderPlaced && <OrderPlacedModal />}
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
                    <img src={item.image} alt={item.name} className="w-[56px] h-[56px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] mr-4 rounded" />
                    <div>
                      <h3 className="text-[14px] lg:text-[16px] font-bold">{item.name}</h3>
                      <p className='text-[12px] lg:text-[12px] font-bold text-[#909090]'>₹{item.price} per {item.weight}</p>
                      <p className='text-[12px] lg:text-[12px] font-bold text-[#26A460]'>with offer ₹{item.price}</p>
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
                {/* <div className='flex justify-between mb-2'>
                  <p className='text-[#909090] text-[12px] font-semibold font-Nunito'>SPECIAL OFFER </p>
                  <p className='font-bold font-Nunito text-[#606060] text-[14px]'>-₹{specialOffer}</p>
                </div>  */}
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
              
                onClick={loggedin?handlePlaceOrder:handleSendOtp}
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
          <Login setShowLogin={setShowLogin} setShowOTPVerification={setShowOTPVerification} inputValue={inputValue} setInputValue={setInputValue} />
        </div>
      )}
      {showOTPVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <OTPVerification 
            setShowOTPVerification={setShowOTPVerification}
            onVerificationSuccess={handleVerificationSuccess}
            inputValue = {inputValue}
            setLoggedIn={setLoggedIn}
          />
        </div>
      )}

      <ShopHero />
      <Footer />
      <FooterBar cartItemCount={cartItemCount}></FooterBar>
    </div>
  );
};

export default CartPage;