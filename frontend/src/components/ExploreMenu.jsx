import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-6 ' id='menu'>
      <h1 className='text-gray-600 font-bold md:ml-32 ml-2 text-2xl'>Explore our menu</h1>
      <p className='md:max-w-[60%] max-w-[100%] text-lg md:ml-32 ml-2'>Choose from a diverse menu featuning a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='flex justify-between items-center gap-8 text-center overflow-x-scroll no-scrollbar my-5'>
        {menu_list.map((item, index) => {
          return (
            <div className='md:ml-10 md:mr-10 ml-2 mr-2' key={index} onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}>
              <img src={item.menu_image} alt={item.menu_name} className={`${category === item.menu_name ? 'border-red-700 border-solid border-2 rounded-full p-3' : 'w-7 min-w-20'} cursor-pointer rounded-md transition-[2s]`}/>
              <p className='mt-3 text-gray-600 text-[max(1.4vw,16px)]'>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className='my-2.5 h-0.5 bg-gray-800 border-none ' />
    </div>
  );
};

export default ExploreMenu;
