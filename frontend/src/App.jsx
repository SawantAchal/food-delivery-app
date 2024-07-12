import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import PlaceOrder from './pages/PlaceOrderPage'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart'  element={<CartPage/>} />
          <Route path='/order'  element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
3