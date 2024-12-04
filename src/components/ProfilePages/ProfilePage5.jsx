import React from 'react'

const ProfilePage5 = () => {
  return (
    <div className=' mx-[5%]  '>
      <div className=' py-5 bg-white rounded-2xl mt-5 px-5 mb-5'>
        <h3 className='text-[20px] font-semibold'>Video</h3>
        <div className='mt-6'>
          <div className='text-[#0064D1] pb-5 border-b-[3px] border-b-[#0064D1]
          inline-block mt-3 px-3 text-[14px]'
          >Video của bạn</div>
        </div>
      </div>

      <div className=' py-5 bg-white rounded-2xl mt-5 px-5 mb-5'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[20px] font-semibold'>Reels</h3>
          <p className='text-[14px] text-[#0064D1] cursor-pointer'>Tạo thước phim</p>
        </div>
        <div className='flex items-center gap-3 mt-6'>
          <div className='text-[#0064D1] pb-5 border-b-[3px] border-b-[#0064D1]
          inline-block mt-3 px-3 text-[14px]'
          >Thước phim của bạn</div>
          <div className='text-[#65686c] pb-5 inline-block mt-3 px-3 text-[14px]'
          >Thước phim đã lưu</div>
        </div>
        <div className='grid place-items-center text-[20px] font-semibold text-[#65686c]'>
          Bạn chưa tạo thước phim nào.
        </div>
      </div>
    </div>
  )
}

export default ProfilePage5