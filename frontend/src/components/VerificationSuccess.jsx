import React from 'react'
import AddressForm from './AddressForm';
import { useState } from 'react';

const VerificationSuccess = ({ onClose,setShowAddressForm,setShowOTPVerification }) => {
    const handleProceedToAddress = () =>{
      setShowOTPVerification(false);
        setShowAddressForm(true);
        
    } 
    return (
      <div className="relative w-[400px] h-auto bg-white rounded-xl p-10 shadow-lg text-center">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2"
        >
          <img
            src="closeoverlay.svg"
            alt="Close"
            className="w-4 h-4"
          />
        </button>
        <img
          src="verificationsuccess.svg"
          alt="Verified"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h2 className="font-Nunito text-[18px] font-bold text-[#1E1E1E] mb-2">
          Verified Successfully!
        </h2>
        <p className="font-Nunito text-[14px] text-[#909090] mb-6">
          Please Select or Add an Address to Complete Your Order
        </p>
        <button
          className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg w-full"
          onClick={handleProceedToAddress}
        >
          + Add delivery details
        </button>
        
      </div>
    );
  };

export default VerificationSuccess