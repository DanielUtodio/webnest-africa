import React from 'react'

const miniProjects = [
    "ai chatbots",
    "ai-powered tools",
    "web applications",
    "exam score analyzers",
    "ai personal assistants",
    "smart attendance systems",
    ]

const Card = ({ project })=> {
    return (
        <div className='w-[95%] md:w-3xl lg:w-xl h-32 flex flex-col gap-2 border p-2'>
            <h2>{project}</h2>
        </div>
    )   
}

const ChildProject = () => {
  return (
    <div className='w-full min-h-max py-6 flex flex-col gap-6'>
        <h1 className='text-3xl font-medium'>What can your child build with AI?</h1>
        <div className='w-full h-max flex flex-col md:flex md:flex-row justify-between md:flex-wrap gap-4 items-center'>
            {
                miniProjects.map((p, i)=> {
                    return (
                        <Card project={p} key={i} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ChildProject
