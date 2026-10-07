import React from 'react'
import {
    BrainCircuit,
    BotMessageSquare,
    Wand2,
    AppWindow,
    Brain
} from "lucide-react"


const projects = [
    {
        project: "AI Chatbots",
        lucideIcon: BotMessageSquare,
    },
    {
        project: "AI Personal Assistants",
        lucideIcon: Wand2,
    },
    {
        project: "Educational AI Tools",
        lucideIcon: BrainCircuit,
    },
    {
        project: "Educational AI Tools",
        lucideIcon: BrainCircuit,
    },
    {
        project: "Smart Attendance Systems",
        lucideIcon: BrainCircuit,
    },
    {
        project: "Exam Score Analysers",
        lucideIcon: BrainCircuit,
    },
    {
        project: "AI-Powered Web Applications",
        lucideIcon: AppWindow
    },
    {
        project: "And other solutions to real-world problems",
        lucideIcon: Brain
    }
]

const ProjectCard = ({ project, lucideIcon: Icon }) => {
    return (
        <aside className='w-64 min-h-32 flex flex-col items-center gap-4 p-4 border border-slate-100 text-center shadow-md'>
            <Icon />
            <p>{project}</p>
        </aside>

    )
}

const StudentProjects = () => {
  return (
    <div className='w-full h-max p-4 flex justify-center gap-6 flex-wrap'>
      {
        projects.map((proj, i) => {
            return (
                <ProjectCard
                key={i}
                {...proj}
                />
            )
        })
      }
    </div>
  )
}

export default StudentProjects
