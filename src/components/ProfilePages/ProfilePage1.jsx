import React, { useState } from 'react'
import ProfilePage1SiderLeft from '../ProfilePage1SiderLeft';
import Status from '../Status';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { IoMdSettings, IoMdMenu } from "react-icons/io";
import { IoGrid } from "react-icons/io5";

const ProfilePage1 = () => {
  const [viewPost, setViewPost] = useState(true)
  return (
    <div className='w-[90%] m-auto flex gap-5'>
      <ProfilePage1SiderLeft />
      <div className='flex-[1.8] flex flex-col gap-5 '>
        <Status />
        <div className='bg-white rounded-lg'>
          <div className='flex items-center justify-between 
          px-4 py-2 rounded-xl'>
            <h3 className='text-[20px] font-semibold'>Bài viết</h3>
            <div className='flex items-center gap-3'>
              <div className='flex items-center rounded-md bg-[#e2e5e9] px-3 py-2
              gap-2'>
                <MdOutlineSettingsInputComponent />
                <span className='text-[14px] text-[#080809]'>Bộ lọc</span></div>
              <div className='flex items-center rounded-md bg-[#e2e5e9] px-3 py-2
              gap-2'>
                <IoMdSettings />
                <span className='text-[14px] text-[#080809]'>Quản lý bài viết</span></div>
            </div>
          </div>
          <hr className='w-full h-[1px] bg-[#e2e5e9] my-1' />
          <div className='flex items-center mx-4 '>
            <div className={`flex items-center flex-1 justify-center py-2 gap-2
             text-[14px] font-semibold hover:bg-gray-100
            cursor-pointer ${viewPost && 'text-[#0066d1] border-b-[3px] border-b-[#0066d1]'}`}
            onClick={() => setViewPost(true)}>
              <IoMdMenu size={20} /> Chế độ xem danh sách</div>
            <div className={`flex items-center flex-1 justify-center py-2 gap-2
             text-[14px] font-semibold hover:bg-gray-100
            cursor-pointer ${!viewPost && 'text-[#0066d1] border-b-[3px] border-b-[#0066d1]'}`}
            onClick={() => setViewPost(false)}>
              <IoGrid size={20} /> Chế độ xem lưới</div>
          </div>
        </div>

        <div className='text-[20px] font-semibold grid place-items-center
        py-3 px-2'>
          Bạn chưa có bài viết nào
        </div>
      </div>
    </div>
  )
}

export default ProfilePage1