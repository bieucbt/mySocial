import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { game1 } from '../assets'

const GroupSuggestion = ({group}) => {
  
  return (
    <div className='bg-white rounded-xl overflow-hidden cursor-pointer
    flex flex-col'>
        <div className='relative'>
          <div className='absolute top-3 right-3 '><FaTimes size={20} color='white' /></div>
          <img src={group.img} alt="group" className='object-cover h-[230px] w-full' />
        </div>
        <div className='p-4 flex-1 flex flex-col'>
          <div>
            <h5 className='hover:underline text-[18px]
            '>{group.name}</h5>
            <p className='text-[14px] text-[#65686C]'>{group.member} thành viên - {group.post}+ bài viết/ngày</p>
          </div>
          <div className='flex-1 flex items-end mt-2'>
            <div className='bg-[#e2e5e9] text-[14px] grid place-items-center
            py-2 rounded-md hover:bg-gray-300 flex-1'>Tham gia nhóm</div>
          </div>
        </div>
      </div>
  )
}

export default GroupSuggestion