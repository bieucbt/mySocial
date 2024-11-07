import React from 'react'
import { FaVideo, FaImage, FaFaceSmileWink  } from "react-icons/fa6";
import { userInfo } from '../data/user'

const Status = () => {
    const cssStatus = `flex items-center gap-3 p-2 hover:bg-gray-400
          cursor-pointer rounded-xl duration-500 ease-linear transition-all`
  return (
    <div className='py-2 px-5 mt-4 bg-white'>
        <div className='flex items-center'>
          <img src={userInfo.avatar} alt="avatar user"
          className='rounded-full w-[50px] h-[50px] object-cover' />
          <div className='flex-1 border border-gray-300 h-full rounded-2xl
          h-[35px] leading-[35px] pl-[10px] ml-2'>
            {userInfo.name} ơi, bạn đang nghĩ gì thế?
          </div>
        </div>
        <hr className='w-full h-[1px] bg-gray-400 mt-6' />
        <div className='flex items-center justify-between mt-2'>
          <div className={cssStatus}>
            <FaVideo /> <span>Video trực tiếp</span>
          </div>
          <div className={cssStatus}>
            <FaImage /> <span>Ảnh/Video</span>
          </div>
          <div className={cssStatus}>
            <FaFaceSmileWink /> <span>Ảnh/Video</span>
          </div>
        </div>
      </div>
  )
}

export default Status