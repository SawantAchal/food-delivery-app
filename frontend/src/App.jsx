import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import PlaceOrder from './pages/PlaceOrderPage'
import Footer from './components/Footer'
import ExploreMenu from './components/ExploreMenu'
import AppDownload from './components/AppDownload'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup'
import VerifyPage from './pages/VerifyPage'
function App() {
  // to display login popup
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {
        showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
      }
      <div className='App'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart'  element={<CartPage/>} />
          <Route path='/order'  element={<PlaceOrder/>} />
          <Route path='/menu' element={<ExploreMenu/>}/>
          <Route path='/app-download' element={<AppDownload/>}/>
          <Route path='/verify' element={<VerifyPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
