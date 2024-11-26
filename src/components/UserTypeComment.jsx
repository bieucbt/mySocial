import React, { useState } from 'react'
import {avatar1} from '../assets'
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { MdFace } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import { IoSend, IoSendOutline  } from "react-icons/io5";

const UserTypeComment = () => {
  const [send, setSend] = useState(false)
  return (
    <div className='flex mt-4 gap-2'>
      <div className=''>
        <img src={avatar1} alt="avatar" className='rounded-full w-9 h-9 object-cover' />
      </div>
      <div className='bg-[#f0f2f5] rounded-2xl flex-1'>
        <div>
          <textarea type="text" placeholder='Viết bình luận...'
          className='bg-transparent py-2 px-3 outline-none text-[13px]
          w-full' />
        </div>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-2'>
            <MdFace size={20} className='cursor-pointer' />
            <FaRegFaceGrinHearts size={20} className='cursor-pointer' />
            <CiCamera size={20} className='cursor-pointer' />
            <HiOutlineGif size={20} className='cursor-pointer' />
            <CiShoppingTag size={20} className='cursor-pointer' />
          </div>
          
          <div>
          {
           send ?  <IoSend size={20} className='cursor-pointer' /> : 
           <IoSendOutline size={20} className='cursor-pointer' />
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTypeComment