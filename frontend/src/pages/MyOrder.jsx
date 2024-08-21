import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';

const MyOrder = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
        setData(response.data.data);
        // console.log(response.data.data);
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='max-w-4xl mx-auto px-4 py-12'>
            <h2 className='text-center text-4xl font-bold text-gray-800 mb-8'>My Orders</h2>
            <div className='flex flex-col gap-6'>
                {
                    data.length === 0 ? (
                        <p className='text-center text-gray-600'>You have no orders yet.</p>
                    ) : (
                        data.map((order, index) => (
                            <div key={index} className='flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white'>
                                <img src={assets.parcel_icon} alt='Order Icon' className='w-12 h-12'/>
                                <div className='flex-1'>
                                    <p className='text-gray-700 text-sm sm:text-base'>
                                        {
                                            order.items.map((item) => `${item.name} x ${item.quantity}`).join(', ')
                                        }
                                    </p>
                                    <p className='text-gray-900 font-semibold text-lg mt-2'>${order.amount}.00</p>
                                    <p className='text-gray-600 text-sm mt-1'> Items: {order.items.length}</p>
                                    <p className='mt-2 flex items-center text-gray-800 text-sm sm:text-base'>
                                        <span className='text-red-600 text-xl mr-2'>&#x25cf;</span>
                                        <b className='font-medium'>{order.status}</b>
                                    </p>
                                </div>
                            <button onClick={fetchOrders} className='mt-4 sm:mt-0 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base'>
                                Track Order
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MyOrder;
