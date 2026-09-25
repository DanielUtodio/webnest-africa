import React from 'react'
import Hero from '@/components/sections/home/Hero'
import ChildProject from '@/components/sections/home/ChildProject'
import WhatWeDo from '@/components/sections/home/WhatWeDo'
import VisionBanner from '@/components/sections/home/VisionBanner'




const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-12 py-4 px-2 md:px-8'>
      <Hero />
      <ChildProject />
      <WhatWeDo />
      <VisionBanner />
    </div>
  )
}

export default HomePage
