import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiClock } from 'react-icons/fi';

const CartHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex justify-start border-b border-gray-200 font-Nunito lg:mx-10 mt-5 ">
            <div className="flex w-full max-w-sm">
                <button 
                    onClick={() => navigate('/cart')}
                    className={`flex items-center justify-center py-3  flex-1 text-sm ${
                        isActive('/cart') ? 'text-[#1E1E1E] font-bold border-b-2 border-[#F7941D]' : 'text-[#909090] font-semibold'
                    }`}
                >
                    <FiShoppingCart className="mr-2" />
                    My Cart
                </button>
                <button 
                    onClick={() => navigate('/orders')}
                    className={`flex items-center justify-center py-3 flex-1 text-sm  ${
                        isActive('/orders') ? 'text-[#1E1E1E] font-bold border-b-2 border-[#F7941D]' : 'text-[#909090] font-semibold'
                    }`}
                >
                    <FiClock className="mr-2" />
                    Orders & History
                </button>
            </div>
        </div>
    );
}

export default CartHeader;