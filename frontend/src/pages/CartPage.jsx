import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const CartPage = () => {
  // access all this from store context 
  const {cartItems ,food_list,removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='md:mt-24 mt-16 '>
      <div>
        <div className='grid grid-cols-3 sm:grid-cols-custom-layout-for-cart items-center text-gray-500 text-xs sm:text-sm md:ml-5'>
          <p>Items</p>
          <p>Title</p>
          <p className='hidden sm:block'>Price</p>
          <p>Quantity</p>
          <p className='hidden sm:block'>Total</p>
          <p>Remove</p>
        </div>
        <hr className='my-4'/>
        {
          food_list.map((item , index) =>{
            // to check if item in cart then it should display in cart
            if (cartItems[item._id]>0) {
              return (
                <div>
                  <div className='grid grid-cols-3 sm:grid-cols-custom-layout-for-cart items-center text-sm sm:text-base mx-4 my-2 text-black p-2 gap-2 bg-white rounded-lg shadow-md'>
                    <img src={url+"/images/"+item.image} alt={item.name} className='w-16 h-16 object-cover rounded'/>
                    <p className='truncate'>{item.name}</p>
                    <p className='hidden sm:block'>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p className='hidden sm:block'>${item.price*cartItems[item._id]}</p>
                    {/* add onclick to removeCart function to remove item from cart one by one */}
                    <p onClick={() => removeFromCart(item._id)} className='cursor-pointer text-red-500 hover:text-red-700'>X</p>
                  </div>
                  <hr className='h-0.5 bg-gray-200 border-none my-2'/>
                </div>
              )
            }
          })
        }
      </div>
      <div className='mt-20 flex flex-col-reverse sm:flex-row justify-between gap-6 sm:gap-12'>
        {/* for bill */}
        <div className='flex-1 flex flex-col gap-5 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-lg font-semibold'>Cart Totals</h2>
          <div className='text-sm'>
            <div className='flex justify-between text-gray-500'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-gray-500'>
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-gray-800 font-semibold'>
              <strong>Total</strong>
              <strong>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</strong>
            </div>
          </div>
          <button className='bg-red-500 text-white w-full rounded-md py-2 mt-4 hover:bg-red-600 transition-all duration-300' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        {/* for promo code */}
        <div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
          <div>
            <p className='text-gray-500 text-sm'>If you have a promo code, Enter it here</p>
            <div className='mt-4 flex'>
              <input type='text' placeholder='promo code' className='flex-grow bg-gray-100 text-gray-700 p-2 rounded-l-md border border-gray-300 outline-none focus:ring-2 focus:ring-red-500'/>
              <button className='bg-red-500 text-white rounded-r-md px-4 py-2 hover:bg-red-600 transition-all duration-300'> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage