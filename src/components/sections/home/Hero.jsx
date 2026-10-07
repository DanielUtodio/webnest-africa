import React from 'react'
import HeroBannerComponent from '@/components/ui/HeroBannerComponent'
import { heroData } from '@/data/heroData'

const Hero = () => {
  const { smallText, headingText, descriptionText, image, firstLink, firstLinkText, secondLink, secondLinkText } = heroData["home"]
  console.log(heroData)
  return (
   <div>
   <HeroBannerComponent
   smallText={smallText}
   headingText={headingText}
   descriptionText={descriptionText}
   image={image}
   firstLink={firstLink}
   firstLinkText={firstLinkText}
   secondLink={secondLink}
   secondLinkText={secondLinkText}
   />
   </div>
  )
}

export default Hero
