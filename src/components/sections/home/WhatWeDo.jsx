import React from 'react'

const services = [
    "ai for schools",
    "ai business solutions",
    "ai training and capacity building"
]

const ServiceCard = ({ service }) => {
    return (
        <div className='w-full h-32 flex justify-between items-center border px-4'>
            <div>
                <p>{service}</p>
            </div>
            <button>explore</button>
        </div>
    )
}


const WhatWeDo = () => {
  return (
    <div className='w-full min-h-96 flex flex-col gap-6 py-10'>
        <h1 className='text-3xl font-medium'>What We Do</h1>
      {
        services.map((s, i)=> {
            return (
                <ServiceCard service={s} key={i} />
            )
        })
      }
    </div>
  )
}

export default WhatWeDo
