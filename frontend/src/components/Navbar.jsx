import { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  // to get total cart item
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <nav className='p-5 flex justify-between items-center'>
      <Link to={'/'}><img src={assets.logo} alt='logo' className='md:w-36 w-24 ' /></Link>
      <ul className='lg:flex list-none gap-5 text-2xl hidden'>
        <Link to= '/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-blue-500" : ""}`}>home</Link>
        <Link to='/menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-blue-500" : ""}`}>menu</Link>
        <Link to='/app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}`}>mobile-app</Link>
        <Link to='/footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "border-b-2 border-blue-500" : ""}`}>contact us</Link>
      </ul>
      <section className='flex items-center md:gap-10 gap-5'>
        <img src={assets.search_icon} alt='' />
        <section className='relative'>
          <Link to={'/cart'}><img src={assets.basket_icon} alt='' /></Link>
          {/* if item is in the cart then dot is visible if not then dot is not visible  */}
          <section className={getTotalCartAmount()===0? '' :'absolute min-w-2 min-h-2 bg-red-500 -top-2 -right-2 rounded-lg' }></section>
        </section>
        {/* use Props here  when onclick sign in button*/}
        <button className='bg-transparent md:text-lg text-sm border-red-500 p-1 rounded-lg border-2 cursor-pointer' onClick={() => setShowLogin(true)}>sign in</button>
      </section>
    </nav>
  );
}

export default Navbar;
