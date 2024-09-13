import React from 'react';

const OrderPlacedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full flex flex-col items-center">
        <div className="w-20 h-20 relative mb-4">
          <div className="absolute inset-0 bg-green-500 opacity-10 rounded-full"></div>
          <div className="absolute inset-1 bg-green-500 opacity-20 rounded-full"></div>
          <div className="absolute inset-2 bg-green-500 rounded-full flex justify-center items-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-green-500 text-2xl font-bold mb-2">Order Placed</h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you! Your sweets are prepared and arrive soon.
        </p>
        
        <button 
          onClick={onClose}
          className="bg-gray-800 text-white py-2 px-6 rounded-lg flex items-center"
        >
          <span className="mr-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          View order details
        </button>
      </div>
    </div>
  );
};

export default OrderPlacedModal;