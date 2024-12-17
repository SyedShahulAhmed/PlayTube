import React from 'react'
import { Channels, SideLinks } from '../assets/index'
const SideBar = () => {
  return (
    <div className='w-[15%] fixed  pt-[30px] pl-[2%] h-screen'>
      <div className='flex flex-col gap-5 mb-5 '>
        {SideLinks.map((item) => (
          <div key={item.id} className='flex justify-start items-center gap-4'>
              <img src={item.img} alt="" className='w-5'/>
              <p className=''>{item.name}</p>
          </div>
        ))}
      </div>
      <hr className='w-[80%] mx-auto'/>
      <h1 className='font-semibold my-2 mb-4'>Subscriptions</h1>
      <div className='flex flex-col justify-start items-start gap-3'>
          {Channels.map((item) => (
            <div key={item.id} className='flex justify-start items-center gap-4'>
                <img src={item.img} alt="" className='w-5 rounded-full'/>
                <p>{item.channel}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SideBar