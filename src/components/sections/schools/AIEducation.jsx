import React from 'react'
import { LucideCheck } from 'lucide-react'

const benefits = [
    " understand how AI works and how to use it responsibly.",
    " understand how AI works and how to use it responsibly.",
    " understand how AI works and how to use it responsibly.",
    " understand how AI works and how to use it responsibly.",
    " understand how AI works and how to use it responsibly.",
    " understand how AI works and how to use it responsibly.",
    
]

const AIEducation = () => {
  return (
    <div className='w-full flex items-center gap-20 px-16'>
        <div className='w-full flex flex-col gap-12'>
        <h1 className='text-3xl font-semibold'>Why AI education for your school</h1>
            <div className='w-full flex flex-col gap-4'>
                {
                benefits?.map((benefit)=> {
                    return (
                        <p className='inline-flex gap-4 text-sm'><i className='w-6 h-6 flex items-center justify-center rounded-full bg-amber-400/50'><LucideCheck size={16} /></i>{benefit}</p>
                    )
                })
            }
            </div>
        </div>
        <img src="/imgs/happy-kid-studying.jpeg" alt="study" className='rounded-lg' />
    </div>
  )
}

export default AIEducation
