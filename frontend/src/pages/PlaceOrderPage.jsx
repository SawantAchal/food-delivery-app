import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrderPage = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() * 100 + 2 * 100,
    };

    try {
      let response = await axios.post(`${url}/api/order/placeorder`, orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        const errorMessage = typeof response.data.message === 'string'
          ? response.data.message
          : JSON.stringify(response.data.message);
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };



  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='flex flex-col md:flex-row items-start justify-between gap-12 mt-16 md:mx-10 mx-5'>
      {/* Delivery Information Section */}
      <div className='w-full max-w-[500px]'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Delivery Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
        </div>
        <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' className='mt-4 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
        <input type='text' name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mt-4 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <input type='text' name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
          <input type='text' name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <input type='text' name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
          <input type='text' name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
        </div>
        <input type='text' name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mt-4 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600' required />
      </div>

      {/* Cart Totals Section */}
      <div className='w-full max-w-[500px]'>
        <div className='flex flex-col bg-gray-50 p-6 rounded-md shadow-sm'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Cart Totals</h2>
          <div className='flex justify-between text-gray-500'>
            <span>Subtotal</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <hr className='my-4 border-gray-200' />
          <div className='flex justify-between text-gray-500'>
            <span>Delivery fee</span>
            <span>${getTotalCartAmount() === 0 ? 0 : 2}</span>
          </div>
          <hr className='my-4 border-gray-200' />
          <div className='flex justify-between font-semibold text-gray-700'>
            <span>Total</span>
            <span>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</span>
          </div>
          <button type='submit' className='mt-6 bg-red-600 text-white py-3 rounded-md w-full hover:bg-red-700 transition duration-200'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrderPage;
