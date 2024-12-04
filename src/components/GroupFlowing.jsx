import React from 'react'
import { IoIosMore } from 'react-icons/io'

const GroupFlowing = ({data}) => {
  return (
    <div className='p-5 rounded-xl bg-white flex flex-col'>
      <div className='flex gap-4'>
        <div className='shrink-0 w-[80px] h-[80px]'>
          <img src={data.img} alt="group"
          className='rounded-lg h-full w-full object-cover cursor-pointer' />
        </div>
        <div className='self-end'>
          <h4 className='hover:underline cursor-pointer
          text-[14px] '>{data.name}</h4>
          <p className='text-[12px] text-[#65686C]'>Lần truy cập gần đây nhất: 8 giờ trước</p>
        </div>
      </div>
      <div className='flex items-end mt-5  gap-2 shrink-0 flex-1'>
        <div className='flex-[4] grid place-items-center hover:bg-gray-100
        text-[#0064d1] bg-[#ebf5ff] h-[36px] rounded-md cursor-pointer'>Xem nhóm</div>
        <div className='flex-[1] grid place-items-center
        bg-[#e2e5e9] h-[36px] rounded-md cursor-pointer
        hover:bg-gray-300'><IoIosMore size={16} /></div>
      </div>
    </div>
  )
}

export default GroupFlowing