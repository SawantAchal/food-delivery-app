import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id , name , price, description , image}) => {
    const {cartItems ,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='w-[100%] md:m-auto m-2 rounded-xl shadow-sm transition-[0.3s] animate-[fadeIn_3s]'>
        <div className='relative'>
            <img src={url+"/images/"+image} alt={name} className='w-[100%] h-[243.49px] rounded-t-xl'/>
            {
                !cartItems[id] ? <img src={assets.add_icon_white} alt='' className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={() => addToCart(id)}/>
                :
                <div className='absolute bottom-4 right-4 flex items-center gap-3 p-1.5 rounded-full bg-white'>
                    <img src={assets.remove_icon_red} alt='' onClick={() => removeFromCart(id)} className='w-7'/>
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} alt='' onClick={() => addToCart(id)} className='w-7'/>
                </div>
            }
        </div>
        <div className='p-5'>
            <div className=' flex justify-between items-center mb-3'>
                <p className='text-xl font-medium'>{name}</p>
                <img src={assets.rating_starts} alt='' className='w-16'/>
            </div>
            <p className='text-gray-600 text-base'>{description}</p>
            <p className='text-red-600 text-lg font-medium my-2.5'>$ : {price}</p>
        </div>
    </div>
  )
}

export default FoodItem