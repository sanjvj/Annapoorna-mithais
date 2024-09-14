import React from 'react';

const OrdersPage = () => {
  const completedOrders = [
    {
      id: '66765664',
      date: 'Delivered on 17 sep, 2023 | 12:00 am',
      status: 'DELIVERED',
      address: 'Old No. 130, 130, Dr MGR Salai, Near Periyar Kaladar Nagar, Nungambakkam, Chennai',
      items: [
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
      ],
      total: '₹1160',
      savings: '₹499',
    },
    {
      id: '66785664',
      date: 'Delivered on 17 sep, 2023 | 12:00 am',
      status: 'DELIVERED',
      address: 'Old No. 130, 130, Dr MGR Salai, Near Periyar Kaladar Nagar, Nungambakkam, Chennai',
      items: [
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
      ],
      total: '₹1160',
      savings: '₹499',
    },
    // Add more completed orders as needed
  ];

  const ongoingOrders = [
    {
      id: '66765664',
      date: 'Ordered on 17 sep, 2023 | 12:00 am',
      status: 'ORDER SHIPPED',
      address: 'HOME | Old No. 130, 130, Dr MGR Salai, Near Periyar Kaladar Nagar, Nungambakkam, Chennai',
      items: [
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
        { name: 'Product name', price: '₹1400/KG', offer: '₹1400', quantity: '2kg' },
      ],
      total: '₹1160',
      savings: '₹499',
    },
  ];

  const OrderCard = ({ order, isOngoing }) => (
    <div className="bg-white rounded-lg p-4 mb-4 font-Nunito">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-semibold">ORDER ID: {order.id}</p>
          <p className="text-xs text-gray-500">{order.date}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${isOngoing ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
          {order.status}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-xs text-gray-600 mb-1">DELIVERY ADDRESS</p>
        <p className="text-xs">{order.address}</p>
      </div>
      {isOngoing && (
        <button className="w-full py-2 bg-[#F6EFE2] text-[#332D21] rounded text-sm font-semibold mb-2">
          Track order
        </button>
      )}
      {order.items.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-2 border-t">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-md mr-2"></div>
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.price}</p>
              <p className="text-xs text-yellow-500">with offer {item.offer}</p>
            </div>
          </div>
          <p className="text-xs">QTY: {item.quantity}</p>
        </div>
      ))}
      {!isOngoing && (
        <button className="w-full mt-2 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
          Order Again
        </button>
      )}
      <div className="mt-2 bg-gray-50 p-2 rounded">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-semibold">{isOngoing ? 'FINAL AMOUNT' : 'TOTAL ORDER AMOUNT'}</span>
          <span className="text-sm font-semibold">{order.total}</span>
        </div>
        <p className="text-xs text-green-600 mb-1">You saved {order.savings} in this order!</p>
        <div className="text-xs">
          <div className="flex justify-between">
            <span>TOTAL AMOUNT</span>
            <span>₹1500</span>
          </div>
          <div className="flex justify-between">
            <span>GST(12%)</span>
            <span>+ ₹40</span>
          </div>
          <div className="flex justify-between">
            <span>SPECIAL OFFER(25%)</span>
            <span>- ₹400</span>
          </div>
          <div className="flex justify-between">
            <span>DELIVERY FEE</span>
            <span className="text-green-600">FREE</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-10 border rounded-lg m-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-xl font-bold mb-4">Order History</h1>
          {completedOrders.map((order) => (
            <OrderCard key={order.id} order={order} isOngoing={false} />
          ))}
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">
            Ongoing orders <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{ongoingOrders.length}</span>
          </h1>
          {ongoingOrders.map((order) => (
            <OrderCard key={order.id} order={order} isOngoing={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;