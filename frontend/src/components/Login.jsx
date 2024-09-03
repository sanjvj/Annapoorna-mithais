import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setInputValue(value);
    }
  };

  return (
    <div className="relative w-[400px] h-auto bg-white rounded-xl p-10 shadow-lg">
      <img
        src="closeoverlay.svg"
        alt="Close"
        onClick={() => setShowLogin(false)}
        className="absolute top-4 right-4 cursor-pointer"
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
          <span className="text-green-500 text-lg ml-2">✔</span>
        )}
      </div>
      <button className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg mt-8 w-full">
        Proceed to verify
      </button>
    </div>
  );
};

export default Login;