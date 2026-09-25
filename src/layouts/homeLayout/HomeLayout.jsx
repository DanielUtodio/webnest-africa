import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'


const HomeLayout = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isOpen, setIsOpen] = useState(false)
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(()=> {
        const checkDevicewidth = () => {
             if (isMobile) {
                setIsOpen(true)
                setCurrentWidth(window.innerWidth)
            } if (!isMobile) {
                setIsOpen(false)
                setCurrentWidth(window.innerWidth)
            }
            if (currentWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('load', checkDevicewidth)
        window.addEventListener('resize', checkDevicewidth)
         
    }, [currentWidth])

  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-4'>
        <header className='w-full h-20 flex justify-center items-center px-12 bg-slate-950'>
            <div className='w-full h-full flex justify-between items-center'>
                <div className='text-slate-300'>
                    Logo
                </div>

                {
                    isOpen ? (
                        <LuMenu color='white' size={30} />
                    ) :
                    
                    (
                        <>
                    <nav className='flex justify-center items-center gap-6 capitalize text-slate-300'>
                    <Link to={"/"} className='hover:underline'>home</Link>
                    <Link to={"/"}>home</Link>
                    <Link to={"/"}>home</Link>
                    <Link to={"/"}>home</Link>
                    <Link to={"/"}>home</Link>
                </nav>

                <div>
                    <button className='w-fit p-2 border border-slate-10 text-lg text-slate-100 rounded-md hover:bg-white hover:text-black transition-all'>start your journey</button>
                </div>
                </>
                    ) 
                    
                }

                
            </div>

        </header>
        <div className='min-h-screen py-2'>
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout
