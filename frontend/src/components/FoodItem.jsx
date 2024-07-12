import React, { useState } from 'react'
import { assets } from '../assets/assets'

const FoodItem = ({id , name , price, description , image}) => {
    const [itemCount , setItemCount] = useState(0)
  return (
    // box shadow : 0px 0px 10px #0000015
    <div className='w-[100%] m-auto rounded-xl shadow-sm transition-[0.3s] animate-[fadeIn_3s]'>
        <div className='relative'>
            <img src={image} alt={name} className='w-[100%] rounded-t-xl'/>
            {
                !itemCount ? <img src={assets.add_icon_white} alt='' className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={() => setItemCount(prev => prev +1)}/>
                :
                <div className='absolute bottom-4 right-4 flex items-center gap-3 p-1.5 rounded-full bg-white'>
                    <img src={assets.remove_icon_red} alt='' onClick={() => setItemCount(prev => prev - 1)} className='w-7'/>
                    <p>{itemCount}</p>
                    <img src={assets.add_icon_green} alt='' onClick={() => setItemCount(prev => prev + 1)} className='w-7'/>
                </div>
            }
        </div>
        <div className='p-5'>
            <div className=' flex justify-between items-center mb-3'>
                <p className='text-xl font-medium'>{name}</p>
                <img src={assets.rating_starts} alt='' className='w-16'/>
            </div>
            <p className='text-gray-600 text-base'>{description}</p>
            {/* margin : 10px 0px */}
            <p className='text-red-600 text-lg font-medium m-3'>$ : {price}</p>
        </div>
    </div>
  )
}

export default FoodItem