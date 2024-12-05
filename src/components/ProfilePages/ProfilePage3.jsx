import React from 'react'
import InputSearch from '../InputSearch'
import { IoIosMore } from 'react-icons/io'

const ProfilePage3 = () => {
  return (
    <div className='mx-[5%] bg-white py-5  rounded-2xl px-5  mt-5  mb-5'>
      <div className='  flex items-center justify-between'>
        <h3 className='text-[20px] font-semibold'>Bạn bè</h3>
        <div className='flex items-center gap-5'>
          <InputSearch placeholder='Tìm kiếm' />
          <p className='text-[#0064D1] text-[14px] font-medium
          cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md'>Lời mời kết bạn</p>
          <p className='text-[#0064D1] text-[14px] font-medium
          cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md'>Tìm bạn bè</p>
          <p className='text-[#0064D1] text-[14px] font-medium
          cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md'>Mời bạn bè</p>
          <div className='p-3 bg-[#e2e5e9] rounded-md cursor-pointer
          hover:bg-gray-300'><IoIosMore size={16} /></div>
        </div>
      </div>
      <div className='flex items-center gap-3 mt-6'>
        <div className='text-[#0064D1] pb-5 border-b-[3px] border-b-[#0064D1]
        inline-block mt-3 px-3 text-[14px]'
        >Tất cả bạn bè</div>
        <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
        >Đã thêm gần đây</div>
        <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
        >Sinh nhật</div>
        <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
        >Đang theo dõi</div>
      </div>
      <div className='pt-[200px]'></div>
    </div>
  )
}

export default ProfilePage3