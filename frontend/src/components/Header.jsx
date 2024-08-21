import React from 'react'

const Header = () => {
  return (
    <header className='bg-contain bg-center  h-[34vw] mt-8 mb-8 mx-auto bg-no-repeat relative ' style={{backgroundImage: `url('/header_img.png')`}}>
      <section className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[12vw] animate-[fadeIn_4s]'>
        <h2 className='sm:text-[max(4.5vw,22px)] text-[max(3.5vw,5px)] text-white sm:font-bold '>Order your favourite food here</h2>
        <p className='text-white text-xl hidden lg:block'>Choose from a diverse menu featuning a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='border-none font-bold  bg-white text-[max(1vw,13px)] p-1 rounded-md'>View Menu</button>
      </section>
    </header>
  )
}

export default Header