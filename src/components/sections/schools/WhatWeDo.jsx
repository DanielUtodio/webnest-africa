import Spacer from '@/components/ui/Spacer'
import React from 'react'
import { Link } from 'react-router-dom'



const services = [
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    },
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    },
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    },
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    },
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    },
    {
        title: "AI Engineering Programmes",
        paragraph: "Give students practical experience in AI, programming, and technology through structured, project-based learning.",
        image: "https://www.tutordoctor.co.uk/wp-content/uploads/2025/07/iStock-1765295703-1200x450.jpg"
    }
]

const ServiceCard = ( { title, paragraph, image } ) => {
    return (
        <div className='w-90 h-max border border-slate-50 bg-white shadow-md'>
            <img src={image} alt={title} />
            <div className='w-full p-4 flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>{title}</h4>
                <p>{paragraph}</p>
                <button className='w-max p-3 bg-blue-500 text-taupe-50 rounded-md'>click here</button>
            </div>
        </div>
    )
}

const WhatWeDo = () => {

  return (
      <div className='w-full min-h-max bg-gray-50 flex flex-col px-16 py-16'>
        <Spacer height='140px' />
      <h1 className='text-3xl ml-2 font-medium capitalize'>Our Services</h1>
        <Spacer height='60px' />
      <div className='w-full flex flex-wrap gap-10'>
        {
            services?.map((service, i)=> (
                <ServiceCard key={i}
                image={service.image}
                title={service.title}
                paragraph={service.paragraph}
                />
            ))
        }
      </div>
    </div>
  )
}

export default WhatWeDo
