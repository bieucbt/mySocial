import React from 'react'
import Developer from '../Developer'
import { IoIosMore } from 'react-icons/io'

const ProfilePage4 = () => {
  return (
    <div className='mx-[5%] py-5 bg-white rounded-2xl mt-5 px-5 mb-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-semibold'>Ảnh</h3>
        <div className='flex items-center gap-5'>
          <p className='text-[#0064D1] text-[14px] font-medium
          cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md'>Thêm ảnh/video</p>
          <div className='p-3 bg-[#e2e5e9] rounded-md cursor-pointer
          hover:bg-gray-300'><IoIosMore size={16} /></div>
        </div>
      </div>
      <div className='mt-6'>
        <div className='text-[#0064D1] pb-5 border-b-[3px] border-b-[#0064D1]
        inline-block mt-3 px-3 text-[14px]'
        >Video của bạn</div>
        <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
        >Album</div>
      </div>
    </div>
  )
}

export default ProfilePage4