import React, { useState } from 'react'
import { introduce } from '../../data/profileData'
import { CiCirclePlus } from "react-icons/ci";

const ProfilePage2 = () => {
  const [profileIndex, setProfileIndex] = useState(0)
  return (
    <div className='flex bg-white mx-[5%] rounded-2xl mt-5 px-5 mb-5'>
      <div className='border-r-[3px] border-gray-200 py-5'>
        <h3 className='text-[20px] font-semibold'>Giới thiệu</h3>
        <div className='flex'>
          <div className='mt-5 pr-5'>
            {
              introduce.map((intro, i) => <div key={i} className={`text-[#65686c] pr-4
              text-[14px] hover:bg-gray-100 cursor-pointer py-3 px-[10px] font-semibold
              rounded-md ${i == profileIndex && 'bg-[#ebf5ff] text-blue-600 '}`}
              onClick={() => setProfileIndex(i)}>{intro}</div>)
            }
          </div>
        </div>
      </div>
      <div className='pt-5 px-2 flex flex-col gap-6'>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm nơi làm việc</span></div>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm trường trung học</span></div>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm trường cao đẳng/đại học</span></div>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm tỉnh/thành phố hiện tại</span></div>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm quê quán</span></div>
          <div className='flex items-center text-[#0064D1] text-[14px] gap-2
          cursor-pointer'>
            <CiCirclePlus size={24} /><span className='hover:underline'>Thêm tình trạng mối quan hệ</span></div>
      </div>
    </div>
  )
}

export default ProfilePage2