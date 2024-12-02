import React, { useState } from 'react'
import { people } from '../assets'
import FriendSideBarTop from '../components/FriendSideBarTop'
import { FaStar, FaPlus  } from "react-icons/fa";
import { GoBlocked } from "react-icons/go";
import { TbFriends } from "react-icons/tb";

const FriendCustomList = () => {
  const [active, setActive] = useState(0)
  return (
    <div className='flex items-center h-screen'>
      <div className='w-[30%] h-full bg-white shadow-2xl p-3'>
        <FriendSideBarTop subname='Danh sách tùy chỉnh'  />
        <div>
          <div className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 
          cursor-pointer rounded-xl ${active == 1 && 'bg-[#ebf5ff]'}`}
          onClick={() => setActive(1)}>
            <div className='h-[60px] w-[60px] rounded-full bg-[#e2e5e9]
            flex items-center justify-center'><FaStar size={23} /></div>
            <span>Bạn thân</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 
          cursor-pointer rounded-xl ${active == 2 && 'bg-[#ebf5ff]'}`}
          onClick={() => setActive(2)}>
            <div className='h-[60px] w-[60px] rounded-full bg-[#e2e5e9]
            flex items-center justify-center'><GoBlocked size={23} /></div>
            <span>Bị hạn chế</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 
          cursor-pointer rounded-xl ${active == 3 && 'bg-[#ebf5ff]'}`}
          onClick={() => setActive(3)}>
            <div className='h-[60px] w-[60px] rounded-full bg-[#e2e5e9]
            flex items-center justify-center'><TbFriends size={23} /></div>
            <span>Người quen</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 
          cursor-pointer rounded-xl text-[#0064d1]'>
            <div className='h-[60px] w-[60px] rounded-full bg-[#ebf5ff]
            flex items-center justify-center'><FaPlus size={23} /></div>
            <span>Tạo danh sách</span>
          </div>
        </div>
      </div>
      <div className='w-[70%] h-full grid place-content-center'>
        <div className='flex flex-col items-center'>
          <img src={people} alt="people" width={112} height={112} />
          <p className='text-[20px] text-[#65686c] mt-3'>Lời mời và gợi ý kết bạn sẽ hiển thị tại đây.</p>
        </div>
      </div>
    </div>
  )
}

export default FriendCustomList