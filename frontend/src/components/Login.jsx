import React, { useState } from "react";
import axios from "axios";

const Login = ({ setShowLogin, setShowOTPVerification,inputValue,setInputValue }) => {
  
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setInputValue(value);
      setShowError(false);
    }
  };
  const handleMobileNumber = async() => {
    if (inputValue.length === 10) {
      setShowLogin(false);
      setShowOTPVerification(true);
      
    } else {
      setShowError(true);
    }
    try{
      const response = await axios.post("http://localhost:8000/customers/send-otp",{
        mobile: inputValue,
      })
      console.log(response);
    }catch (error) {
      console.error("Error sending OTP:", error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  }

  

  return (
    <div className="relative w-[400px] h-auto bg-white rounded-xl p-10 shadow-lg">
      <img
        src="closeoverlay.svg"
        alt="Close"
        onClick={() => setShowLogin(false)}
        className="absolute top-[-17px] right-4 cursor-pointer"
      />
      <h1 className="font-Nunito text-[16px] font-bold text-[#1E1E1E] mb-1">
        Login to order
      </h1>
      <p className="font-Nunito text-[12px] text-[#909090] mb-4">
        Enter your email or mobile for a smooth checkout.
      </p>
      <h1 className="font-Nunito text-[12px] font-semibold text-[#FAAF40] mb-1">
        Mobile or Email
      </h1>
      <div className="flex items-center border-2 w-[320px] h-[48px] border-[#FAAF40] p-2 rounded-md">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="outline-none flex-grow text-[14px] font-Nunito font-bold"
        />
        {inputValue.length === 10 && (
          <img src="verified.svg" alt="Verified" />
        )}
      </div>
      {showError && (
        <p className="text-red-500 text-[12px] font-Nunito mt-2">
          Please enter a valid 10-digit mobile number.
        </p>
      )}
      <button 
        className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg mt-8 w-full" 
        onClick={handleMobileNumber}
      >
        Proceed to verify
      </button>
    </div>
  );
};

export default Login;