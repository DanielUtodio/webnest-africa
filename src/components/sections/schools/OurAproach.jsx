import React from 'react'
import Step from '@/components/ui/Step'
import { LucideArrowRight } from 'lucide-react'
import StudentProjects from './StudentProjects'

const steps = [
    {
        step: "learn",
        lucideIcon: LucideArrowRight
    },
    {
        step: "practice",
        lucideIcon: LucideArrowRight
    },
    {
        step: "build",
        lucideIcon: LucideArrowRight
    },
    {
        step: "innovate",
        lucideIcon: LucideArrowRight
    },
    {
        step: "showcase",
        // lucideIcon: LucideArrowRight
    },
]   

const OurAproach = () => {
  return (
    <div className='w-full min-h-max flex flex-col items-center justify-center gap-10'>
        <h3 className='text-center text-2xl font-semibold capitalize'>our approach</h3>
        <p>We believe students learn best when they build.
            Our learning approach follows a simple progression:
        </p>
      <div className='w-full py-14 flex bg-slate-950 justify-center gap-10'>
        {
        steps.map((step, i)=> {
            return (
                <Step
                    key={i} 
                    {...step}
                    stepNumber={String(i+1)}
                 />
            )
        })
      }
      </div>
      <p>Students don't just learn concepts. They apply what they learn by creating projects such as:</p>
      <StudentProjects />
    </div>
  )
}

export default OurAproach
