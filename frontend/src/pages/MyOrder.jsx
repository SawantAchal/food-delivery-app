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
        console.log(response.data.data);
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-12 mx-0'>
            <h2 className='text-center text-3xl'>My Orders</h2>
            <div className='flex flex-col gap-5 mt-7'>
                {
                    data.length === 0 ? (
                        <p className='text-center text-gray-500'>You have no orders yet.</p>
                    ) : (
                        data.map((order, index) => (
                            <div key={index} className='grid md:grid-cols-custom-layout-for-myorder custom-layout-for-myorder-small  items-center gap-7 text-sm text-gray-500 border border-solid border-red-700 px-5 py-2.5'>
                                <img src={assets.parcel_icon} alt='' className='w-12' />
                                <p>
                                    {order.items.map((item, index) => {
                                        if (index === order.items.length - 1) {
                                            return item.name + " X " + item.quantity;
                                        } else {
                                            return item.name + " X " + item.quantity + ", ";
                                        }
                                    })}
                                </p>
                                <p>
                                    ${order.amount}.00
                                </p>
                                <p>
                                    Items: {order.items.length}
                                </p>
                                <p><span className='text-red-700'>&#x25cf;</span> <b className='font-medium text-gray-800'>{order.status}</b></p>
                                <button onClick={fetchOrders} className='border-none px-3 py-0 rounded bg-yellow-50 cursor-pointer '>Track order</button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default MyOrder;
