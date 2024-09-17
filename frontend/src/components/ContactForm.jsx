import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://annapoorna-backend.onrender.com/customers/contact-us",
        {
          name,
          mobile,
          message,
        }
      );
      console.log(response);
      setSuccessMessage("Your message has been sent successfully!");
      // Clear the form
      setName("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-auto max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-[#E6E6E6]">
      <div className="p-8 border-b border-[#DADADA]">
        <h1 className="text-3xl font-bold text-[#202020] font-inter">
          Contact us!
        </h1>
      </div>


      <form className="p-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name here"
            className="w-full h-12 px-4 py-3 text-base font-semibold text-[#909090] bg-white border border-[#DADADA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#332D21] font-Nunito"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="mobile"
            className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito"
          >
            Mobile Number
          </label>
          <div className="flex items-center h-12 bg-white border border-[#DADADA] rounded-lg overflow-hidden">
           
            
            <input
            type="tel"
            id="mobile"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full h-12 px-4 py-3 text-base font-semibold text-[#909090] bg-white border border-[#DADADA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#332D21] font-Nunito"
          />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-[10px] font-bold text-[#8D8D8D] uppercase font-Nunito"
          >
            Your Message
          </label>
          <input
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            className="w-full px-4 py-3 text-sm text-[#8D8D8D] bg-white border border-[#DADADA] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#332D21] font-Nunito "
          ></input> </div>
         <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-10 py-4 bg-[#332D21] text-white text-base font-bold rounded-full font-Nunito disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Confirm & Send"
            )}
          </button>
       
        </div>
      </form>

     

      {successMessage && (
        <div className="px-4 pb-4">
          <p className={`text-center ${successMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'} font-semibold mt-4`}>
            {successMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;