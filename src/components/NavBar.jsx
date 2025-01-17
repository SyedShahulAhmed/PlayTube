import React from 'react'
import { images } from '../assets/index.js'
import { Link } from 'react-router-dom'
const NavBar = ({setShow}) => {
  return (
    <nav className='flex justify-between bg-white w-full shadow-md sticky top-0 right-0 left-0  p-4 overflow-hidden'>
        <div className='flex justify-center items-center gap-5 cursor-pointer px-1'>
            <img src={images.menu} alt="" className='w-7 hidden md:block' onClick={() => {setShow(p => p=== false ? true : false)}}/>
            <div className='flex justify-center items-center gap-2 '>
            <Link to={'./'} className='flex gap-2 items-center justify-center'>
            <img src={images.logo} alt="" className='w-8  cursor-pointer'/>
            <h1 className='text-xl font-semibold  cursor-pointer hidden md:block'>PlayTube</h1>
            </Link>
            </div>
        </div>
        <div className='flex justify-between items-center border-2 rounded-full w-[260px] md:w-[400px] px-2  md:px-4 mx-2'>
            <input type="text" placeholder='Search' className='py-1.5 outline-none border-none bg-transparent'/>
            <img src={images.search} alt="" className='w-5 cursor-pointer '/>
        </div>
        <div className='flex justify-center items-center gap-5 '>
            <img src={images.addvideo} alt="" className='w-7 cursor-pointer hidden md:block hover:scale-105 transition-all duration-200'/>
            <img src={images.box} alt="" className='w-7 cursor-pointer hidden md:block hover:scale-105 transition-all duration-200'/>
            <img src={images.bell} alt="" className='w-7 cursor-pointer hidden md:block hover:scale-105 transition-all duration-200'/>
            <img src={images.profile} alt="" className='w-9 cursor-pointer hover:scale-105 transition-all duration-200'/>
        </div>
    </nav>
  )
}

export default NavBar 