import React from 'react'
import { topicVideo } from '../../data/dataVideoTopic'

const VideoPage5 = () => {
  return (
    <div className='px-[20%] py-[5%]'>
      <h1 className='text-[20px]'>Khám phá</h1>
      <div className='mt-5'>
        {
          topicVideo.map((topic, i) => <div key={i} 
          className='flex items-center bg-[#1877f2] text-white font-bold
          p-4 rounded-xl gap-2 mt-2 cursor-pointer'>
            <topic.icon /> <span>{topic.name}</span>
          </div>)
        }
      </div>
    </div>
  )
}

export default VideoPage5