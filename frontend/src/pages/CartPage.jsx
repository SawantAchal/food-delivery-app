import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const CartPage = () => {
  // access all this from store context 
  const {cartItems ,food_list,removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='md:mt-24 mt-16 '>
      <div className=''>
        <div className='grid grid-cols-custom-layout-for-cart items-center text-gray-500 text-[max(1vw,12px)] md:ml-5'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item , index) =>{
            // to check if item in cart then it should display in cart
            if (cartItems[item._id]>0) {
              return (
                <div>
                  <div className='grid grid-cols-custom-layout-for-cart items-center  text-[max(1vw,12px)] mx-4 my-0 text-black p-2 gap-1'>
                    <img src={url+"/images/"+item.image} alt={item.name} className='w-12'/>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price*cartItems[item._id]}</p>
                    {/* add onclick to removeCart function to remove item from cart one by one */}
                    <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
                  </div>
                  <hr className='h-1 bg-slate-950 border-none'/>
                </div>
              )
            }
          })
        }
      </div>
      <div className='mt-20 flex flex-col-reverse sm:flex-row justify-between gap-[max(12vw,20px)]'>
        {/* for bill */}
        <div className='flex-1 flex flex-col gap-5 m-3'>
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
          <button className='border-none text-white bg-red-500 w-[max(15vw,200px)] rounded-md cursor-pointer px-3 py-0 p-2' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        {/* for promo code */}
        <div className='flex-1 justify-start m-3  '>
          <div>
            <p className='text-gray-400'>If you have a promo code, Enter it here</p>
            <div className='mt-3 flex justify-between items-center bg-slate-400 rounded-md'>
              <input type='text' placeholder='promo code' className='bg-transparent border-none outline-none pl-2.5 text-white'/>
              <button className='w-[max(10vw,150px)] px-3 py-1 bg-black border-none text-white rounded-md '> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage