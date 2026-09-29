import React from 'react'
import HeroBannerComponent from '@/components/ui/HeroBannerComponent'
import { heroData } from '@/data/heroData'



const TrainingHero = () => {
  const { smallText, headingText, descriptionText, image, 
            firstLink, 
            firstLinkText, 
            secondLink, 
            secondLinkText } = heroData["training"]
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

export default TrainingHero
