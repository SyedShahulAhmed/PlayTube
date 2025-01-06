import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import SideVideo from '../components/SideVideo'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,catId} = useParams()

  return (
    <div className='bg-[#f9f9f9] pl-[2%] pr-[2%] pt-5 overflow-hidden flex justify-between flex-wrap'>
      <VideoPlayer videoId={videoId} catId ={catId}/>
      <SideVideo catId={catId}/>
    </div>
  )
}

export default Video