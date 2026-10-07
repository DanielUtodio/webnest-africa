import Spacer from '@/components/ui/Spacer'
import React from 'react'





const why = [
    "schools receive structured programmes.",
    "parents see tangible development.",
    "businesses receive practical AI solutions.",
    "Professionals gain skills they can apply immediately."
]

const themeColors = [
    "bg-fuchsia-500",
    "bg-emerald-400",
    "bg-orange-500",
    "bg-violet-500",
]

const WhyWebnest = () => {
  return (
    <>
        <Spacer />
            <h3 className='font-semibold text-2xl capitalize'>why choose us</h3>
        {/* <Spacer height='10px' /> */}

        <div className='w-full min-h-120 flex items-center gap-32 px-16 py-12'>
                <div className='relative w-2/5'>
                    <div className='w-full min-h-120 p-8 bg-indigo-500/40 rounded-full blur-3xl'></div>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KvOHz-E0F_4PXgedbyFI1g.jpeg" alt="why" className='absolute top-4 left-4 w-full rounded-3xl' />
                </div>
            
            <div className='flex-1 min-h-100 flex justify-center'>
              <ol className='w-full h-full flex flex-col justify-between gap-8'>
                  {
                      why.map((w, i) => {
                          const bg = themeColors[i]
                          return (
                              <li key={i} className={`min-w-80 max-w-140 max-h-28 p-8 rounded-xl ${bg} text-lg text-white`}>{`${(i + 1)}. ${w}`}</li>
                          )    
                      }) 
                      
                  }
              </ol>
            </div>
        </div>
    </>
  )
}

export default WhyWebnest
