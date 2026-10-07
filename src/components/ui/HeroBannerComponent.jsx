import React from 'react'
import { Link } from 'react-router-dom'

const HeroBannerComponent = ({ 
    smallText,
    headingText,
    descriptionText, 
    image,
    firstLinkText, 
    firstLink, 
    secondLinkText, 
    secondLink,
    page
  }) => {
  return (
    <section className={`${page=== "contact" ? ' w-full min-h-[70vh] bg-[#26235E] pb-10 px-14 flex items-center gap-8 md:flex-row justify-between sm:flex flex-col-reverse' :  'w-full min-h-[90vh] bg-[#26235E] pb-10 px-16 flex items-center gap-8 md:flex-row justify-between sm:flex flex-col-reverse'}`}>
        <div className='max-w-1/2 min-h-max flex flex-col gap-4 p-2 sm:w-full'>
            <small className='text-[#3B5FE0] text-sm font-semibold'>{smallText}</small>
          <h1 className='text-xl text-white sm:text-3xl font-medium capitalize'>{headingText}</h1>
          <p className='text-lg text-[#B4C8DB] font-medium'>{descriptionText}</p>

          {
            !page && 
            <nav className='w-full h-fit flex gap-4'>
                <Link to={firstLink} className='min-w-fit py-2 px-6 bg-[#3B5FE0] text-md font-medium text-white rounded-md transition-all'>{firstLinkText}</Link>
                <Link to={secondLink} className='min-w-fit py-2 px-6 border border-slate-10 text-md font-medium text-white rounded-sm hover:bg-slate-950/90 transition-all'>{secondLinkText}</Link>
          </nav>
          }
        </div>

        <div className='max-w-2/5 md:min-w-2/5'>
          <img src={image} alt="Banner" className='w-full h-full rounded-2xl' />
        </div>
      </section>
  )
}

export default HeroBannerComponent
