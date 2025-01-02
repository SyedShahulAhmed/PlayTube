import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import SideVideo from '../components/SideVideo'

const Video = () => {
  return (
    <div className='bg-[#f9f9f9] pl-[2%] pr-[2%] pt-5 flex justify-between flex-wrap'>
      <VideoPlayer/>
      <SideVideo/>
    </div>
  )
}

export default Video