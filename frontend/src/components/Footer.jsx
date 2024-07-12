import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    // padding 20px 8vw pt:8opx
    <footer className='text-gray-300 bg-slate-500 flex flex-col items-center gap-5 pt-20 p-5 mt-24'>
        <div className='w-[100%] grid grid-cols-custom-layout gap-20'>
            <div className='flex flex-col items-start gap-5 list-none'>
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet adipisci, quod nemo dolores quia impedit quisquam ducimus iusto dolore, quidem porro quam ipsam qui natus commodi corrupti sunt ipsum?</p>
                <div className='flex'>
                    <img src={assets.facebook_icon} alt="" className=' w-10 mr-4'/>
                    <img src={assets.twitter_icon} alt="" className=' w-10 mr-4'/>
                    <img src={assets.linkedin_icon} alt="" className=' w-10 mr-4'/>
                </div>
            </div>
            <div className='flex flex-col items-start gap-5 list-none'>
                <h2 className='text-white'>COMPANY</h2>
                <ul className='cursor-pointer'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-5 list-none'>
                <h2 className='text-white'>GET IN TOUCH</h2>
                <ul className='cursor-pointer'>
                    <li>+91 -1234567890</li>
                    <li>conact@tomato.com</li>
                </ul>
            </div>
        </div>
        {/* margin 20px 0 */}
        <hr className='w-full h-1 m-5 bg-gray-700 border-none'/>
        <p>Copyright 2024 &copy; Created by Achal Sawant</p>
    </footer>
  )
}

export default Footer