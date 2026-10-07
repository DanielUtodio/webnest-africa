import React from 'react'
import { LucideArrowRight } from 'lucide-react'





const Step = ({ step, stepNumber, lucideIcon: Icon }) => {
  return (
    <div className='w-max p-4 flex items-center gap-3 text-center'>
      <aside className='flex-col gap-6'>
        <div className='w-32 min-h-32 rounded-full border-8 border-orange-500 text-white flex justify-center items-center'>
            {step}
        </div>
        <h3 className='font-bold text-2xl text-white'>{(stepNumber.padStart(2, "0"))}</h3>
      </aside>

        <div>
            {
                Icon && (
                    <Icon className={`w-10 h-10 text-2xl font-semibold text-orange-500`} />
                )
            }
        </div>
    </div>
  )
}

export default Step
