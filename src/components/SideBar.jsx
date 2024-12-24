import React from 'react'
import { Channels, SideLinks } from '../assets/index'
const SideBar = ({Show}) => {
  return (
    <div className={`${Show ? 'w-[5%]':'w-[15%]'}' fixed pt-[20px] pl-[2%] h-screen`}>
      <div className='flex flex-col gap-4 mb-5 '>
        {SideLinks.map((item) => (
          <div key={item.id} className='flex justify-start items-center gap-4 cursor-pointer'>
              <img src={item.img} alt="" className={`${Show ? 'w-5' : 'w-6'}`}/>
              {Show ? <p className=''>{item.name}</p> : ""}
          </div>
        ))}
      </div>
      <hr className={`${Show ? 'w-[80%] ' : 'w-[80%]'}mx-auto`}/>
      <h1 className={`${Show ? 'block ' : 'hidden '}   font-semibold my-2 mb-4` }>Subscriptions</h1>
      <div className='flex flex-col justify-start items-start gap-2'>
          {Channels.map((item) => (
            <div key={item.id} className='flex justify-start items-center gap-4 cursor-pointer '>
                <img src={item.img} alt="" className={`${Show ? 'w-5 ' : 'w-6 mt-2'} rounded-full`}/>
                {Show ? <p className='text-[#5a5a5a] font-semibold'>{item.channel}</p> : ""}
            </div>
          ))}
      </div>
    </div>
  )
}

export default SideBar