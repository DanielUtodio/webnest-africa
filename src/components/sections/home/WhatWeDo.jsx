import React from 'react'
import Spacer from '@/components/ui/Spacer'


const services = [
    {
        title: "ai for schools",
        text: "Equip students with the skills and confidence to build with AI through engaging engineering programmes.",
        image: "/imgs/friendly-coworker.jpeg",
    },

    {
        title: "ai business solutions",
        text: "Help organisations automate, optimise, and build intelligent solutions tailored to their needs.",
        image: "/imgs/friendly-coworker.jpeg",
    },
    
    {
        title: "ai training and capacity building",
        text: "Equip children, professionals, and corporate teams with practical AI skills.",
        image: "/imgs/friendly-coworker.jpeg",
    }
]

const ServiceCard = ( { title, text, image } ) => {
    return (
        <div className='max-w-90 min-h-96 flex flex-col justify-between border border-slate-50 shadow-md'>
            <img src={image} alt={title} />
            <div className='w-full p-4 flex flex-col gap-4'>
                <h4 className='capitalize text-lg font-semibold'>{title}</h4>
                <p>{text}</p>
            </div>
            <div className='w-full py-2 px-4'>
                <button className='w-full p-3 bg-amber-400 rounded-sm text-lg font-medium'>explore</button>
            </div>
        </div>
    )
}


const WhatWeDo = () => {

    return (
      <div className='w-full h-170 bg-gray-50 flex flex-col px-16 pb-12'>
        <Spacer height='80px' />
      <h1 className='text-3xl ml-2 font-medium capitalize'>Our Services</h1>
        <Spacer height='60px' />
      <div className='w-full flex flex-wrap justify-between gap-10'>
        {
            services?.map((service, i)=> (
                <ServiceCard key={i}
                image={service.image}
                title={service.title}
                text={service.text}
                />
            ))
        }
      </div>
    </div>
  )
}

export default WhatWeDo
