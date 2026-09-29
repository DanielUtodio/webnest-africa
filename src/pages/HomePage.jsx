import React from 'react'
import Hero from '@/components/sections/home/Hero'
import ChildProject from '@/components/sections/home/ChildProject'
import WhatWeDo from '@/components/sections/home/WhatWeDo'
import VisionBanner from '@/components/sections/home/VisionBanner'
import Spacer from '@/components/ui/Spacer'



const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-12'>
        <Hero />
        <ChildProject />
        <Spacer height='200px' />
        <WhatWeDo />
      <VisionBanner />
    </div>
  )
}

export default HomePage
