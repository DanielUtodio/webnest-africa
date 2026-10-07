import React from 'react'
import Banner from '@/components/ui/Banner'
import { bannerData } from '@/data/bannerData'
import Spacer from '@/components/ui/Spacer'

const VisionBanner = () => {
  const {
    title, 
    text, 
    firstLink, 
    secondLink, 
    firstLinkText, 
    secondLinkText
  } = bannerData["school"]
  return (
    <>
        <Spacer height='150px' />
    <Banner
    title={title}
    text={text}
    firstLink={firstLink}
    firstLinkText={firstLinkText}
    secondLink={secondLink}
    secondLinkText={secondLinkText}
    />
    </>
  )
}

export default VisionBanner
