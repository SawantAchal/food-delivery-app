// import React, { useState } from 'react'
// import {assets} from '../assets/assets'

// const Navbar = () => {
//   const [menu , setMenu] = useState("home")

//   return (
//     <nav className='p-5 flex justify-between items-center'>
//         <img src={assets.logo} alt='logo' className='w-36'/>
//         <ul className='flex list-none gap-5 text-xl'>
//             <li onClick={() =>setMenu("home")} className={menu ==="home" ? "active" : " "}>home</li>
//             <li onClick={() =>setMenu("menu")} className={menu ==="menu" ? "active": ""}>menu</li>
//             <li onClick={() =>setMenu("mobile-app")} className={menu ==="mobile-app" ? "active" :""}>mobile-app</li>
//             <li onClick={() =>setMenu("contact-us")} className={menu ==="contact-us" ? "active" :""}>contact us</li>
//         </ul>
//         <section className='flex items-center gap-10'>
//             <img src={assets.search_icon} about=''/>
//             <section className='relative'>
//                 <img src={assets.basket_icon} alt=''/>
//                 <section className='absolute min-w-2 min-h-2 bg-red-500 -top-2 -right-2 rounded-lg'></section>
//             </section>
//             <button className='bg-transparent text-lg border-red-500 p-1 rounded-lg border-2 cursor-pointer'>sign in</button>
//         </section>
//     </nav>
//   )
// }

// export default Navbar



import { useState } from 'react';
import {assets} from '../assets/assets'

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className='p-5 flex justify-between items-center'>
      <img src={assets.logo} alt='logo' className='w-36' />
      <ul className='flex list-none gap-5 text-xl'>
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "border-b-2 border-blue-500" : ""}`}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-blue-500" : ""}`}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}`}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer ${menu === "contact-us" ? "border-b-2 border-blue-500" : ""}`}
        >
          contact us
        </li>
      </ul>
      <section className='flex items-center gap-10'>
        <img src={assets.search_icon} alt='' />
        <section className='relative'>
          <img src={assets.basket_icon} alt='' />
          <section className='absolute min-w-2 min-h-2 bg-red-500 -top-2 -right-2 rounded-lg'></section>
        </section>
        <button className='bg-transparent text-lg border-red-500 p-1 rounded-lg border-2 cursor-pointer'>sign in</button>
      </section>
    </nav>
  );
}

export default Navbar;
