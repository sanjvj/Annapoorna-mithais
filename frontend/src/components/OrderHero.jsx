import axios from 'axios'
import React from 'react'

const OrderHero = () => {
  const handleGetRequest = async() => {
    const response = await axios.get("http://localhost:3000/get-orders?mobileNumber=1234567890");
  }
  return (
    <div>
      
    </div>
  )
}

export default OrderHero
