import React, { useState } from 'react'
import { showsData } from '../../data/dataShow'
import VideoShow from '../VideoShow'

const VideoPage4 = () => {
  return (
    <div className='pb-6'>
      <h1 className='text-[20px] font-bold'>Nguyên tác trên Facebook</h1>
      <div className='grid grid-cols-4 gap-3'>
        {
          showsData.map((show, i) => <VideoShow key={i} show={show} />)
        }
      </div>
    </div>
  )
}

export default VideoPage4