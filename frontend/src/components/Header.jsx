import React from 'react'


const Header = () => {
  return (
    <header className='bg-contain bg-center  h-[34vw] mt-8 mb-8 mx-auto bg-no-repeat relative ' style={{backgroundImage: `url('/header_img.png')`}}>
      <section className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[12vw] animate-[fadeIn_4s]'>
        <h2 className='text-[max(4.5vw,22px)] text-white font-bold '>Order your favourite food here</h2>
        <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nobis debitis deserunt asperiores. Necessitatibus, sapiente quo esse sunt voluptas consequuntur vel quae minus, dolorum dolor aperiam suscipit sed ut hic?</p>
        <button className='border-none font-bold  bg-white text-[max(1vw,13px)] p-1 rounded-md'>View Menu</button>
      </section>
    </header>
  )
}

export default Header