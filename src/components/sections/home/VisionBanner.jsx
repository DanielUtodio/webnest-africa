import React from 'react'

const VisionBanner = () => {
  return (
    <div className='w-full min-h-96 flex flex-col gap-6 bg-[#26235E] py-16 px-48'>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-white leading-relaxed'>A Future Where Everyone <br /> Can Build With AI</h1>
      <p className='text-md text-slate-200 font-medium'>We believe the future belongs to those who don't just use technology — <br /> but know how to build with it.</p>
      <div className='w-full flex gap-3'>
        <button className='w-48 p-2 text-white font-semibold bg-sky-500 rounded-md'>start your ai journey</button>
        <button className='w-48 p-2 text-white font-semibold border border-slate-50 rounded-md'>conect with us</button>
      </div>
    </div>
  )
}

export default VisionBanner
