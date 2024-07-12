import { useState } from 'react';
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className='p-5 flex justify-between items-center'>
      <img src={assets.logo} alt='logo' className='md:w-36 w-24 ' />
      <ul className='lg:flex list-none gap-5 text-2xl hidden'>
        <Link to= '/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-blue-500" : ""}`}>home</Link>
        <Link to='/menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-blue-500" : ""}`}>menu</Link>
        <Link to='/app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}`}>mobile-app</Link>
        <Link to='/footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "border-b-2 border-blue-500" : ""}`}>contact us</Link>
      </ul>
      <section className='flex items-center md:gap-10 gap-5'>
        <img src={assets.search_icon} alt='' />
        <section className='relative'>
          <img src={assets.basket_icon} alt='' />
          <section className='absolute min-w-2 min-h-2 bg-red-500 -top-2 -right-2 rounded-lg'></section>
        </section>
        <button className='bg-transparent md:text-lg text-sm border-red-500 p-1 rounded-lg border-2 cursor-pointer'>sign in</button>
      </section>
    </nav>
  );
}

export default Navbar;
