import React from 'react'
import {menu_list} from '../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-gray-600 font-bold'>Explore our menu</h1>
      <p className='max-w-[60%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, corporis provident! Neque facere voluptatibus dicta esse iste iusto maiores. Quae est eaque magnam repudiandae tempore non laudantium ullam similique autem!</p>
      {/* marigin 20px 0px */}
      <div className='flex justify-between items-center gap-8 text-center overflow-x-scroll m-5'>
        {
          menu_list.map((item , index) => {
            return (
              <div className='' key={index}>
                <img src={item.menu_image} alt={item.menu_name} className='w-7 min-w-20 cursor-pointer rounded-md transition-[2s]'/>
                <p className='mt-3 text-gray-600 text-[max(1.4vw,16px)]'>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      {/* maring 10px 0px */}
      <hr className='m-2 h-0.5 bg-gray-800 border-none '/>
    </div>
  )
}

export default ExploreMenu