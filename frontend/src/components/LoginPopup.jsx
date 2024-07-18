import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    // to check it is signup form or login form
    const [currentState , setCurrentState] = useState("Sign Up")
    //to store user name and password
    const [data , setData] = useState({
        name:"",
        email:"",
        password:""
    })

    // take the data from input field and save the data into state variable
    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data,[name]:value}))
    }

  return (
    <div className='absolute z-10 w-full h-full bg-slate-50 grid'>
        <form className='place-self-center w-[max(23vw,330px)] text-gray-400 bg-white flex flex-col gap-6 rounded-md text-lg animate-[fadeIn_0.5s] py-6 px-8'>
            <div className='flex justify-between items-center text-black'>
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='cross button' className='w-4 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-5'>
                {/* to remove input field when state is login */}
                {
                    currentState==="login"? <></> :<input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required className='outline-none border-2 border-solid border-purple-600 rounded-md' />
                }
                <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email id' required className='outline-none border-2 border-solid border-purple-600 rounded-md'/>
                <input type='password' name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required className='outline-none border-2 border-solid border-purple-600 rounded-md'/>
            </div>
            <button className='border-none p-2.5 rounded-md text-white bg-red-700 text-sm'>
                {
                    currentState==="Sign Up" ? "Create account" : "Login"
                }
            </button>
            <div className='flex items-start gap-2 -mt-4'>
                <input type='checkbox' required className='mt-2'/>
                <p>By continuing , i agree to the terms of use & privacy policy</p>
            </div>
            {
                currentState==="login"?<p>Create a new account? <span onClick={() => setCurrentState("Sign Up")} className='text-red-700 cursor-pointer font-medium'>Click here</span></p>:<p>Already have an account? <span onClick={() => setCurrentState("login")}  className='text-red-700 cursor-pointer font-medium'>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup