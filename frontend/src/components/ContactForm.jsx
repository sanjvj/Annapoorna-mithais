import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, mobile, message });
  };

  return (
    <div className="w-full h-[521px] max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-[#E6E6E6]">
      <div className="p-8 border-b border-[#DADADA]">
        <h1 className="text-3xl font-bold text-[#202020] font-inter">Contact us!</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name here"
            className="w-full h-12 px-4 py-3 text-base font-semibold text-[#909090] bg-white border border-[#DADADA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#332D21] font-Nunito"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mobile" className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito">
            Mobile Number
          </label>
          <div className="flex items-center h-12 bg-white border border-[#DADADA] rounded-lg overflow-hidden">
            <span className="px-3 text-base font-bold text-[#202020] opacity-20 font-Nunito">+91</span>
            <div className="w-px h-4 bg-[#DADADA]"></div>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="88383 84456"
              className="flex-1 h-full px-4 text-base font-bold text-[#8D8D8D] opacity-20 focus:outline-none font-Nunito"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito">
            Your Message
          </label>
          <input
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            className="w-full px-4 py-3 text-sm text-[#8D8D8D] bg-white border border-[#DADADA] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#332D21] font-Nunito"
          ></input>
        </div>
      </form>

      <div className="px-8">
        <button
          type="submit"
          className="w-full px-10 py-4 bg-[#332D21] text-white text-base font-bold rounded-full font-Nunito"
        >
          Confirm & Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;