import React, { useState, useEffect } from 'react';

const AddressForm = ({ onClose }) => {
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    mobileOrEmail: '',
    pincode: '',
    landmark: '',
    addressLine1: '',
    addressLine2: '',
  });

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    setAddresses(storedAddresses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddresses = [...addresses, formData];
    setAddresses(newAddresses);
    localStorage.setItem('addresses', JSON.stringify(newAddresses));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 w-[400px] relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src="closeoverlay.svg" alt="Close" />
        </button>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">←</span> Personal & Delivery Address
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please enter the required details to create your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#FAAF40] mb-2">PERSONAL DETAILS*</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
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
              value={formData.mobileOrEmail}
              onChange={handleChange}
              placeholder="Mobile or Email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#FAAF40] mb-2">DELIVERY DETAILS*</h3>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
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
              value={formData.landmark}
              onChange={handleChange}
              placeholder="Landmark"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Address line 1"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Address line 2"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg"
          >
            Proceed to next
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;