import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

const VerifyPage = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    // console.log(success,orderId)
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/myorders');
      },1000);
      return() => clearTimeout(timer);
    },[navigate])

  return (
    <div className='min-h-[60vh] grid'>
      <div className='w-[100px] h-[100px] place-self-center border-[5px] border-solid border-gray-300 border-t-red-600 rounded-full  animate-spin-slow '>

      </div>
    </div>
  )
}

export default VerifyPage