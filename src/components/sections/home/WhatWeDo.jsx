import React from 'react'

import img from "/imgs/friendly-coworker.jpeg"


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
        flexD: "reverse"
    },
    
    {
        title: "ai training and capacity building",
        text: "Equip children, professionals, and corporate teams with practical AI skills.",
        image: "/imgs/friendly-coworker.jpeg",
    }
]

const ServiceDiv = ({ title, text, image, flexD }) => {
    return (
        <div className='w-full h-fit flex justify-between items-center px-4 mt-12 ' style={{ flexDirection: flexD === "reverse"? "row-reverse": "row"}}>
            <div className='w-1/3'>
                <h3 className='text-xl md:text-3xl lg:text-4xl font-medium capitalize'>{title}</h3><br />
                <p className='text-lg'>{text}</p><br />
                <button className='w-fit p-2 border border-slate-10 bg-slate-950 text-lg text-white rounded-md hover:bg-slate/950 hover:bg-slate-950/90 transition-all'>Explore</button>
            </div>
            <img src={image} alt={title} className=' w-2/5 lg:w-125 h-4/5 lg:h-100 rounded-xl' />
        </div>
    )
}


const WhatWeDo = () => {
  return (
    <div className='w-full min-h-96 flex flex-col gap-4 pb-4'>
        <h1 className='text-4xl font-semibold leading-loose ml-5'>What We Do</h1>
      {
        services.map((s, i)=> {
            return (
                <ServiceDiv key={i} {...s} />
            )
        })
      }
    </div>
  )
}

export default WhatWeDo
