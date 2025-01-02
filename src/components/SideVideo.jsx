import React from 'react'
import exp from '../assets/sampleNail.png'
const SideVideo = () => {
  return (
    <div className='hidden md:block basis-[30%]'>
        <div className='flex justify-between mb-2'>
            <img src={exp} alt="" className='basis-[49%] w-[50%]'/>
            <div className='basis-[49%]'>
                <h4 className='text-sm mb-1'>Lorem ipsum dolor sit amet.</h4>
                <p>ChannelName</p>
                <p>199k Views</p>
            </div>
        </div>
    </div>
  )
}

export default SideVideo