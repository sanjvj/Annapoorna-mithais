import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== "dashboard") {
      fetchOrders(activeTab);
    }
  }, [activeTab]);

  const fetchOrders = async (status) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://annapoorna-backend.onrender.com/admin/manage-orders",
        {
          deliveryStatus: status,
        }
      );
      setOrders(Array.isArray(response.data.result) ? response.data.result : []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const changeStatus = async (orderId, newStatus) => {
    setIsLoading(true);
    try {
      await axios.patch(
        "https://annapoorna-backend.onrender.com/admin/manage-orders",
        {
          order_id: orderId,
          delivery_status: newStatus,
        }
      );
      await fetchOrders(activeTab);
    } catch (error) {
      console.error("Error changing order status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const OrderCard = ({ order }) => (
    <div className="flex flex-col lg:flex-row justify-between bg-white shadow-md rounded-lg p-4 mb-4 w-full">
      <div className="lg:w-3/4">
        <h3 className="font-bold">Order ID: {order.order_id}</h3>
        <p>Customer: {order.name}</p>
        <p>Mobile: {order.mobile}</p>
        <p>Address: {order.address}</p>
        <p>Total: ₹{order.total_price}</p>
        <p>Payment: {order.payment_status}</p>
        <div className="mt-4">
          <h4 className="font-semibold">Order Items:</h4>
          {order.order_items && order.order_items.length > 0 ? (
            <ul className="list-disc pl-5">
              {order.order_items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.weight || 'N/A'} - Qty: {item.quantity || 1}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items</p>
          )}
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:w-1/4">
        <select
          defaultValue={order.delivery_status}
          onChange={(e) => changeStatus(order.order_id, e.target.value)}
          className="border rounded p-2 w-full lg:w-[120px]"
        >
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out lg:block w-64 bg-white shadow-md z-40`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 mt-8 lg:mt-0">Admin Dashboard</h2>
          <ul>
            {["dashboard", "processing", "shipped", "delivered"].map((tab) => (
              <li key={tab} className="mb-2">
                <button
                  onClick={() => {
                    setActiveTab(tab);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 lg:p-8">
        <h1 className="text-2xl font-bold mb-4 mt-6 lg:mt-0">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Orders
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : activeTab === "dashboard" ? (
          <p>Welcome to the admin dashboard. Select a category to view orders.</p>
        ) : orders.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {orders.map((order) => (
              <OrderCard key={order.order_id} order={order} />
            ))}
          </div>
        ) : (
          <p>No orders found for this status.</p>
        )}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Admin;