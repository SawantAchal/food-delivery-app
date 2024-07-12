import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'

const PlaceOrderPage = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='flex items-start justify-between gap-12 mt-24'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-2xl font-bold mb-12'>Delivery Information</p>
        <div className='flex gap-3'>
          <input type='text' placeholder='First name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
          <input type='text' placeholder='Last name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
        </div>
        <input type='email' placeholder='Email Address' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
        <input type='text' placeholder='Street' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
        <div className='flex gap-3'>
          <input type='text' placeholder='City' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
          <input type='text' placeholder='State' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
        </div>
        <div className='flex gap-3'>
          <input type='text' placeholder='Zip code' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
          <input type='text' placeholder='Country' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
        </div>
        <input type='text' placeholder='phone' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600'/>
      </div>
      <div className='w-full max-w-[max(40%,500px)]'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-400'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mx-2.5'/>
            <div className='flex justify-between text-gray-400'>
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='mx-2.5'/>
            <div className='flex justify-between text-gray-400'>
              <strong>Total</strong>
              <strong>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</strong>
            </div>
          </div>
          <button className='border-none text-white bg-red-500 w-[max(15vw,200px)] rounded-md cursor-pointer px-3 py-0 mt-8'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrderPage