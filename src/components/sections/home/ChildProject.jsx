import React from 'react'
import {
    LucideBot,
    LucideWand2,
    LucideLayout,
    LucideBarChart3,
    LucideBrainCircuit, 
    LucideScanFace

} 
from "lucide-react"

const miniProjects = [
  {
    title: "AI Chatbots",
    lucideIcon: LucideBot,
    fontAwesomeIcon: "fa-solid fa-robot",
    description: "Conversational agents designed to answer queries, automate support, and deliver interactive user experiences in real time.",
    background: "bg-amber-500",
    color: "text-emerald-500",
  },
  {
    title: "AI-Powered Tools",
    lucideIcon: LucideWand2,
    fontAwesomeIcon: "fa-solid fa-wand-magic-sparkles",
    description: "Smart utilities leveraging machine learning models to automate tasks, generate content, and boost daily productivity.",
    background: "bg-rose-500",
    color: "C75000",
  },
  {
    title: "Web Applications",
    lucideIcon: LucideLayout,
    fontAwesomeIcon: "fa-solid fa-laptop-code",
    description: "Full-stack, responsive web platforms engineefuchsia with modern frameworks to deliver intuitive and scalable web experiences.",
    background: "bg-fuchsia-500",
    color: "FFC145",
  },
  {
    title: "Exam Score Analyzers",
    lucideIcon: LucideBarChart3,
    fontAwesomeIcon: "fa-solid fa-chart-column",
    description: "Data-driven dashboards that process student performance metrics, highlight trends, and generate comprehensive progress reports.",
    background: "bg-green-500",
    color: "20FC8F",
  },
  {
    title: "AI Personal Assistants",
    lucideIcon: LucideBrainCircuit,
    fontAwesomeIcon: "fa-solid fa-user-gear",
    description: "Tailored virtual assistants built to organize daily schedules, manage tasks, and execute personalized voice or text commands.",
    background: "bg-lime-500",
    color: "C492B1",
  },
  {
    title: "Smart Attendance Systems",
    lucideIcon: LucideScanFace,
    fontAwesomeIcon: "fa-solid fa-id-card-clip",
    description: "Automated check-in solutions using facial recognition or QR code verification for seamless real-time attendance tracking.",
    background: "bg-rose-500",
    color: "613F75",
  }, 
];

const roygbivThemes =  [
  { // Blue
    badge: "bg-amber-50 text-amber-500 ring-amber-100",
    hoverBorder: "hover:border-amber-300",
    hoverTitle: "group-hover:text-amber-500",
    accent: "text-white"
  },

  { // Blue
    badge: "bg-rose-50 text-rose-500 ring-rose-100",
    hoverBorder: "hover:border-rose-300",
    hoverTitle: "group-hover:text-rose-400",
    accent: "text-white"
  },

  { // Blue
    badge: "bg-fuchsia-50 text-fuchsia-500 ring-fuchsia-100",
    hoverBorder: "hover:border-fuchsia-300",
    hoverTitle: "group-hover:text-fuchsia-500",
    accent: "text-white"
  },

  { // Blue
    badge: "bg-green-50 text-green-500 ring-green-100",
    hoverBorder: "hover:border-green-300",
    hoverTitle: "group-hover:text-green-500",
    accent: "text-white"
  },

  { // Blue
    badge: "bg-lime-50 text-lime-500 ring-lime-100",
    hoverBorder: "hover:border-lime-300",
    hoverTitle: "group-hover:text-lime-500",
    accent: "text-white"
  },

  { // Blue
    badge: "bg-rose-50 text-rose-500 ring-rose-100",
    hoverBorder: "hover:border-rose-300",
    hoverTitle: "group-hover:text-rose-500",
    accent: "text-white"
  }
]


const Card = ({ title, description, lucideIcon: Icon, background, color, theme })=> {
    return (
        <div className={`w-[95%] ${background} md:w-1/3 lg:w-90 min-min-h-32 lg:min-h-80 rounded-sm flex flex-col justify-center items-center gap-4 shadow-sm p-4 text-center`}>
              <div className={`inline-flex h-20 w-20 items-center justify-center rounded-full ${theme.badge}`} >
              <Icon className={`h-12 w-12`} />
            </div>

            <h2 className={`${theme.accent} text-xl font-semibold`}>{title}</h2>
            <p className='text-white text-md tracking-normal'>{description}</p>
        </div>
    )   
}

const ChildProject = () => {
  return (
    <div className='w-full min-h-max py-16 px-16 flex flex-col gap-4 bg-gray-50/10'>
        <h1 className='text-3xl font-medium'>What can your child build with AI?</h1><br />
        <div className='w-full h-max flex flex-col md:flex md:flex-row md:flex-wrap gap-10 items-center'>
            {
                miniProjects.map((p, i)=> {
                  const theme = roygbivThemes[i % roygbivThemes.length]
                  return (
                        <Card
                          key={i}
                          {...p} 
                          background={p.background}
                          theme={theme}
                          />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ChildProject
