import React from 'react'
import { useState,useContext } from 'react';
import { createContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProfileHero = () => {
    const { formData, updateFormData } = useContext(CartContext);
    const [localFormData, setLocalFormData] = useState(formData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLocalFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateFormData(localFormData);
      // You might want to add some feedback here, like a success message
    };
  
    return (
      <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
        {/* Left side - Profile Card */}
        <div className="md:w-1/3">
          <div className="bg-[#C2B280] rounded-lg p-6 text-center">
            <img src="/path-to-avatar-image.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">{formData.name || 'Your Name'}</h2>
            <p className="text-white mb-4">{formData.mobile || 'Your Phone '}</p>
            <button className="bg-white text-[#C2B280] px-4 py-2 rounded-full">Edit Profile</button>
          </div>
          <div className="mt-6 bg-white rounded-lg p-6 shadow">
            <ul className="space-y-4">
              <li className="flex items-center"><span className="mr-2">📍</span> Delivery Address</li>
              <li className="flex items-center"><span className="mr-2">📜</span> Order History</li>
              <li className="flex items-center"><span className="mr-2">🔔</span> Notifications <span className="ml-auto text-orange-500">ON</span></li>
              <li className="flex items-center"><span className="mr-2">🌐</span> Language <span className="ml-auto text-orange-500">English</span></li>
              <li className="flex items-center"><span className="mr-2">❓</span> Help & Support</li>
              <li className="flex items-center"><span className="mr-2">📞</span> Contact Us</li>
              <li className="flex items-center"><span className="mr-2">📄</span> T&C and Privacy policy</li>
              <li className="flex items-center"><span className="mr-2">🚪</span> Logout</li>
            </ul>
          </div>
        </div>
  
        {/* Right side - Address Form */}
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold mb-4">← Personal & Delivery Address</h2>
          <p className="text-sm text-gray-600 mb-6">Please enter the required details to create your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#FAAF40] mb-2">PERSONAL DETAILS*</h3>
              <input
                type="text"
                name="name"
                value={localFormData.name || ''}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="mobileOrEmail"
                value={localFormData.mobile || ''}
                onChange={handleChange}
                placeholder="Mobile"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#FAAF40] mb-2">DELIVERY DETAILS*</h3>
              <input
                type="text"
                name="pincode"
                value={localFormData.pincode || ''}
                onChange={handleChange}
                placeholder="Pin code"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="landmark"
                value={localFormData.landmark || ''}
                onChange={handleChange}
                placeholder="Landmark"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="addressLine1"
                value={localFormData.addressLine1 || ''}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="addressLine2"
                value={localFormData.email || ''}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg"
            >
              Save details
            </button>
          </form>
        </div>
      </div>
    );
}
export default ProfileHero
