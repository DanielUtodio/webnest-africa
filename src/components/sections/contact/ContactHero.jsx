import React from 'react'
import HeroBannerComponent from '@/components/ui/HeroBannerComponent'
import { heroData } from '@/data/heroData'



const ContactHero = () => {
          const { smallText, headingText, descriptionText, image, 
            firstLink, 
            firstLinkText, 
            secondLink, 
            secondLinkText, page} = heroData["contact"]
    
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
       page={page}
       />
    </>
  )
}

export default ContactHero
