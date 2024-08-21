import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='text-gray-300 bg-slate-700 flex flex-col items-center gap-5 pt-8 px-4 pb-6 mt-24'>
      <div className='w-full max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-20 flex flex-col gap-9'>
        <div className='flex flex-col items-start gap-4'>
          <p className='text-red-600 text-3xl font-extrabold'>Achal's Restaurant</p>
          <p className='text-gray-400'>
            Welcome to Achal's Restaurant, where we serve delectable dishes crafted from the freshest ingredients. Our commitment to quality and taste has made us a local favorite. Join us for an unforgettable dining experience!
          </p>
          <div className='flex gap-4 mt-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <img src={assets.facebook_icon} alt='Facebook' className='w-8' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <img src={assets.twitter_icon} alt='Twitter' className='w-8' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <img src={assets.linkedin_icon} alt='LinkedIn' className='w-8' />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h2 className='text-white text-xl font-semibold'>Company</h2>
          <ul className='space-y-2'>
            <li><a href='#home' className='hover:text-red-400'>Home</a></li>
            <li><a href='#about' className='hover:text-red-400'>About Us</a></li>
            <li><a href='#delivery' className='hover:text-red-400'>Delivery</a></li>
            <li><a href='#privacy' className='hover:text-red-400'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h2 className='text-white text-xl font-semibold'>Get in Touch</h2>
          <ul className='space-y-2'>
            <li className='hover:text-red-400'>+91 -1234567890</li>
            <li><a href='mailto:contact@achalres.com' className='hover:text-red-400'>contact@achalres.com</a></li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-1 my-6 bg-gray-600 border-none' />
      <p className='text-center text-gray-400'>
        &copy; 2024 Achal's Restaurant. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
