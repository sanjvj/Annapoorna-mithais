import React, { useEffect, useState } from "react";
import axios from "axios";
const Admin = () => {
 
  const handleStatus = async (event) => {
    const value = event.target.value;
    const response = await axios.post(
      "https://annapoorna-backend.onrender.com/admin/manage-orders",
      {
        deliveryStatus: value,
      }
    );
    console.log(response);
  };

  const changeStatus = async (event) => {
    const value = event.target.value;
    const response = await axios.patch(
      "https://annapoorna-backend.onrender.com/admin/manage-orders",
      {
        order_id : 81,
        delivery_status : value
      }
    );
    console.log(response);
  };

  return (
    <div>
      <button value="processing" onClick={handleStatus}>
        Processing
      </button>
      <button value="shipped" onClick={handleStatus}>
        Shipped
      </button>
      <button value="delivered" onClick={handleStatus}>
        Delivered
      </button>
      <br></br>
      <button value="delivered" onClick={changeStatus}>Change to Delivered</button>
    </div>
  );
};

export default Admin;
