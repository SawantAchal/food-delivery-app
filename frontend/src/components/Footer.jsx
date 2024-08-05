import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='text-gray-300 bg-slate-500 flex flex-col items-center gap-5 pt-2.5 px-[8vw] pb-5 mt-24'>
        <div className='w-[100%] md:grid md:grid-cols-custom-layout md:gap-20 flex flex-col gap-9'>
            <div className='flex flex-col items-start gap-5 list-none'>
            <p  className='md:w-48 w-26 md:text-3xl text-xl text-red-600 font-extrabold'>Achal's Res.</p>
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
                    <li>conact@achalres.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-1 my-5 bg-gray-700 border-none'/>
        <p className='text-center'>Copyright 2024 &copy; Created by Achal Sawant</p>
    </footer>
  )
}

export default Footer