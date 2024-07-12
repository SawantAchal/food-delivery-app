import React from 'react'
import {assets} from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-20 text-[max(3vw, 20px)] text-center font-bold'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className='flex flex-col sm:flex-row justify-center gap-[max(2vw ,10px)] mt-10 text-center'>
            <img src={assets.play_store} alt='Play Store' className='w-[max(30vw , 120px)] max-w-44 transition duration-500 cursor-pointer hover:scale-110'/>
            <img src={assets.app_store} alt='App Store' className=' w-[max(30vw , 120px)] max-w-44 transition duration-500 cursor-pointer hover:scale-110'/>
        </div>
    </div>
  )
}

export default AppDownload