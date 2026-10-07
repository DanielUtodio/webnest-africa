import React from 'react'
import SchoolHero from '@/components/sections/schools/SchoolHero'
import WhatWeDo from '@/components/sections/schools/WhatWeDo'
import AIEducation from '@/components/sections/schools/AIEducation'
import Spacer from '@/components/ui/Spacer'
import VisionBanner from '@/components/sections/schools/VisionBanner'
import OurAproach from '@/components/sections/schools/OurAproach'


const SchoolPage = () => {
  return (
    <div>
      <SchoolHero />
      <WhatWeDo />
      <Spacer height='150px' />
      <AIEducation />
      <Spacer height='150px' />
      <OurAproach />
      <VisionBanner />
    </div>
  )
}

export default SchoolPage
