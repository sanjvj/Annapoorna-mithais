import React from "react";
import { useNavigate } from "react-router-dom";
const OrderPlacedModal = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full flex flex-col items-center">
        <div className="w-20 h-20 relative mb-4">
          <div className="absolute inset-0 bg-[#589C39] opacity-10 rounded-full"></div>
          <div className="absolute inset-1 bg-[#589C39] opacity-20 rounded-full"></div>
          <div className="absolute inset-2 bg-[#589C39] rounded-full flex justify-center items-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-[#589C39] text-2xl font-bold mb-2">Order Placed</h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you! Your sweets are prepared and arrive soon.
        </p>

        <button
          onClick={() => {
            navigate("/orders");
          }}
          className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg mt-6 w-full lg:w-10/12"
        >
          
          View order details
        </button>
      </div>
    </div>
  );
};

export default OrderPlacedModal;
