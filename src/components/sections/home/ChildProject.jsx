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

// import { LucideBarChart3 } from 'lucide-react';
const miniProjects = [
  {
    title: "AI Chatbots",
    lucideIcon: LucideBot,
    fontAwesomeIcon: "fa-solid fa-robot",
    description: "Conversational agents designed to answer queries, automate support, and deliver interactive user experiences in real time.",
    background: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    title: "AI-Powered Tools",
    lucideIcon: LucideWand2,
    fontAwesomeIcon: "fa-solid fa-wand-magic-sparkles",
    description: "Smart utilities leveraging machine learning models to automate tasks, generate content, and boost daily productivity.",
    background: "",
    color: "C75000",
  },
  {
    title: "Web Applications",
    lucideIcon: LucideLayout,
    fontAwesomeIcon: "fa-solid fa-laptop-code",
    description: "Full-stack, responsive web platforms engineered with modern frameworks to deliver intuitive and scalable web experiences.",
    background: "",
    color: "FFC145",
  },
  {
    title: "Exam Score Analyzers",
    lucideIcon: LucideBarChart3,
    fontAwesomeIcon: "fa-solid fa-chart-column",
    description: "Data-driven dashboards that process student performance metrics, highlight trends, and generate comprehensive progress reports.",
    background: "",
    color: "20FC8F",
  },
  {
    title: "AI Personal Assistants",
    lucideIcon: LucideBrainCircuit,
    fontAwesomeIcon: "fa-solid fa-user-gear",
    description: "Tailored virtual assistants built to organize daily schedules, manage tasks, and execute personalized voice or text commands.",
    background: "",
    color: "C492B1",
  },
  {
    title: "Smart Attendance Systems",
    lucideIcon: LucideScanFace,
    fontAwesomeIcon: "fa-solid fa-id-card-clip",
    description: "Automated check-in solutions using facial recognition or QR code verification for seamless real-time attendance tracking.",
    background: "",
    color: "613F75",
  }
];

const roygbivThemes = [
  { // Red
    badge: "bg-rose-50 text-rose-600 ring-rose-100",
    hoverBorder: "hover:border-rose-300",
    hoverTitle: "group-hover:text-rose-600",
    accent: "text-rose-600"
  },
  { // Orange
    badge: "bg-orange-50 text-orange-600 ring-orange-100",
    hoverBorder: "hover:border-orange-300",
    hoverTitle: "group-hover:text-orange-600",
    accent: "text-orange-600"
  },
  { // Yellow
    badge: "bg-amber-50 text-amber-600 ring-amber-100",
    hoverBorder: "hover:border-amber-300",
    hoverTitle: "group-hover:text-amber-600",
    accent: "text-amber-600"
  },
  { // Green
    badge: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    hoverTitle: "group-hover:text-emerald-600",
    accent: "text-emerald-600"
  },
  { // Blue
    badge: "bg-sky-50 text-sky-600 ring-sky-100",
    hoverBorder: "hover:border-sky-300",
    hoverTitle: "group-hover:text-sky-600",
    accent: "text-sky-600"
  },
  { // Indigo
    badge: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    hoverBorder: "hover:border-indigo-300",
    hoverTitle: "group-hover:text-indigo-600",
    accent: "text-indigo-600"
  },
  { // Violet
    badge: "bg-violet-50 text-violet-600 ring-violet-100",
    hoverBorder: "hover:border-violet-300",
    hoverTitle: "group-hover:text-violet-600",
    accent: "text-violet-600"
  }
];


const Card = ({ title, description, lucideIcon: Icon, background, color, theme })=> {
    return (
        <div className='w-[95%] md:w-1/3 lg:w-80 min-h-32 lg:h-64 rounded-xl flex flex-col gap-2 shadow-sm p-4'>
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md ${background} ${theme.badge}`} >
              <Icon className={`h-6 w-6 `} />
            </div>

            <h2 className={`${theme.accent} font-semibold`}>{title}</h2>
            <p className='text-slate-400 text-md'>{description}</p>
        </div>
    )   
}

const ChildProject = () => {
  return (
    <div className='w-full min-h-max py-4 px-12 flex flex-col gap-4'>
        <h1 className='text-3xl font-medium'>What can your child build with AI?</h1><br />
        <div className='w-full h-max flex flex-col md:flex md:flex-row justify-between md:flex-wrap gap-10 items-center'>
            {
                miniProjects.map((p, i)=> {
                  const theme = roygbivThemes[i % roygbivThemes.length]
                  return (
                        <Card
                          key={i}
                          {...p} 
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
