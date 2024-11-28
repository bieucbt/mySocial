import React from 'react'
import { watchListEmpty } from '../assets'

const VideoPage6 = () => {
  return (
    <div>
      <div className='bg-white mx-[-8%] py-5 px-[10px]'>
        <p><span>Video</span> {'>'} <span>đã lưu</span></p>
        <h1 className='text-[24px] font-bold'>Video đã lưu</h1>
      </div>
      <div className='flex flex-col items-center'>
        <img src={watchListEmpty} alt="watchListEmpty" />
        <h1>Không có video nào</h1>
      </div>
    </div>
  )
}

export default VideoPage6