import React from 'react'
import { heroData } from '@/data/heroData'
import HeroBannerComponent from '@/components/ui/HeroBannerComponent'




const BusinessHero = () => {
          const { 
            smallText, 
            headingText, 
            descriptionText, 
            image, 
            firstLink, 
            firstLinkText, 
            secondLink, 
            secondLinkText
         } = heroData["business"]
    
  return (
    <>
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
    </>
  )
}

export default BusinessHero
