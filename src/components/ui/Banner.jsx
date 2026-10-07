import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ title, text, firstLink, secondLink, firstLinkText, secondLinkText  }) => {
  return (
    <div className='w-full min-h-80 flex items-center gap-6 bg-[#26235E] py-4 px-48'>
      <article className='w-120 flex flex-col gap-6'>
        <h1 className='text-xl md:text-2xl lg:text-3xl text-white leading-relaxed'>{title}</h1>
      {
        text && (
            <p className='text-md text-slate-200 font-medium'>{text}</p>
        )
      }
      <div className='w-full flex gap-3'>
        <Link to={firstLink} className='min-w-max py-3 px-4 text-white font-semibold bg-sky-500 rounded-md'>{firstLinkText}</Link>
        <Link to={secondLink} className='min-w-max py-3 px-4 text-white font-semibold border border-slate-50 rounded-md'>{secondLinkText}</Link>
      </div>
      </article>
    </div>
  )
}

export default Banner
