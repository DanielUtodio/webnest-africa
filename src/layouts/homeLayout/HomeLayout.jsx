import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'
import Logo from "/imgs/webnest-logo-dark.jpeg"

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
        <header className='w-full h-24 flex items-center justify-center sticky top-0 z-1000 bg-white border-b border-indigo-100/20'>
            <div className='w-[90%] h-full flex justify-between items-center mt-4'
            >
                <div>
                    <img src= {Logo}
                     alt="webnest Africa"
                      className='w-14 h-14 rounded-full'
                      />
                </div>

                {
                    isOpen ? (
                        <LuMenu color='white' size={30} />
                    ) :
                    
                    (
                        <>
                    <nav className='flex justify-center items-center gap-8 ml-16 capitalize text-[#1A1A68] text-md font-medium'>
                    <Link to={"/"} className='hover:underline'>home</Link>
                    <Link to={"/school"}>ai for schools</Link>
                    <Link to={"/business"}>business solutions</Link>
                    <Link to={"/training"}>ai training</Link>
                    <Link to={"/contact"}>contact</Link>
                </nav>

                <div>
                    <button className='w-fit py-2 px-6 bg-[#26235E] text-md text-white font-semibold rounded-md hover:bg-slate/950 hover:bg-slate-950/90 transition-all'>start your journey</button>
                </div>
                </>
                    ) 
                    
                }

                
            </div>
        </header>




        <div className='min-h-screen'>
            <Outlet />
        </div>

        <footer className='w-full h-16 flex justify-center items-center'>
            <div className='w-4/5 flex items-center justify-between'>
                <span className='text-black/55 capitalize'>webnest africa</span>
                <span className='text-black/55 text-sm capitalize'>Home · Schools · Business · Training · Contact</span>
            </div>
        </footer>
    </div>
  )
}

export default HomeLayout
