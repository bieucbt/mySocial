import React from 'react'
import Developer from '../Developer'

const ProfilePage6 = () => {
  return (
    <div className='mx-[5%] py-5 bg-white rounded-2xl mt-5 px-5 mb-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-semibold'>Reels</h3>
        <p className='text-[#0064D1] text-[14px] font-medium
          cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md'>Tạo thước phim</p>
      </div>
      <div className='mt-6'>
        <div className='text-[#0064D1] pb-5 border-b-[3px] border-b-[#0064D1]
        inline-block mt-3 px-3 text-[14px]'
        >Thước phim của bạn</div>
        <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
        >Thước phim đã lưu</div>
      </div>
    </div>
  )
}

export default ProfilePage6