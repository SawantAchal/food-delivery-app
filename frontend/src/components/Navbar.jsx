import { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

const  Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  // to get total cart item
  const {getTotalCartAmount , token , setToken} = useContext(StoreContext)
  const navigate = useNavigate();

  //function for logout
  const logout = () => {
    //for logout we have to remove token from local storage
    localStorage.removeItem("token");
    setToken("")
    navigate('/')
  }

  return (
    <nav className='p-5 flex justify-between items-center'>
      <Link to={'/'}><p className='md:w-48 w-26 md:text-3xl text-xl text-red-600 font-extrabold'>Achal's Res.</p></Link>
      <ul className='hidden lg:flex list-none gap-8 text-lg md:text-xl'>
        <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-red-500 " : ""}`}>home</Link>
        <Link to='/menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-red-500 " : ""}`}>menu</Link>
        <Link to='/app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-red-500 " : ""}`}>mobile-app</Link>
        <Link to='/footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "border-b-2 border-red-500 +" : ""}`}>contact us</Link>
      </ul>
      <section className='flex items-center md:gap-10 gap-5'>
        <img src={assets.search_icon} alt='' className='w-6 h-6 hidden md:block' />
        <section className='relative'>
          <Link to={'/cart'}><img src={assets.basket_icon} alt='Cart' className='w-8 h-8' /></Link>
            {/* Show red dot if there's something in the cart */}
            <section className={getTotalCartAmount() === 0 ? '' : 'absolute min-w-2 min-h-2 bg-red-500 -top-2 -right-2 rounded-lg'}></section>
        </section>
        {/* Conditional rendering for sign-in button or profile icon */}
        {
          !token ?  
            <button className='bg-transparent md:text-lg text-sm text-red-600 border-red-600 hover:bg-red-600 hover:text-white p-2 px-4 rounded-full border-2 cursor-pointer transition-all duration-300' onClick={() => setShowLogin(true)}>
              Sign In
            </button> 
          : <div className='relative group'>
              <img src={assets.profile_icon} alt=''/>
              <ul className='absolute hidden z-10 right-3 group-hover:flex group-hover:flex-col group-hover:p-3 gap-2 bg-white shadow-md rounded border border-solid border-red-500 outline-2 outline-none outline-white w-28'>
                <li onClick={() => navigate('/myorders')} className='flex items-center gap-2 cursor-pointer hover:text-red-500'>
                  <img src={assets.bag_icon} alt='' className='w-5' /><p className=''>Orders</p>
                </li>
                <hr />
                <li className='flex items-center gap-2 cursor-pointer hover:text-red-500' onClick={logout}>
                  <img src={assets.logout_icon} alt='' className='w-5' /><p className=''>Logout</p>
                </li>
              </ul>
            </div>
        }
      </section>
    </nav>
  );
}

export default Navbar;