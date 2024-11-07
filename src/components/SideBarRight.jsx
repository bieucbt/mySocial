import React from 'react'
import List from './List';
import { FaGift } from "react-icons/fa";
import { dataFriends, groupChat } from '../data/user'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
const SideBarRight = () => {
  return (
    <aside className='w-[25%] flex flex-col gap-2 fixed
    right-0 h-screen bg-white z-10 py-3 px-2 overflow-scroll
    pb-[50px]'>
      <div>
        <h3 className='font-bold text-[20px]'>Sinh nhật</h3>
        <div className='flex gap-1 mt-3'>
          <FaGift size={25} />
          <p>Hôm nay là sinh nhật của <span className='font-bold'>Mi Hoa</span></p>
        </div>
      </div>
      <hr className='w-full h-[1px] bg-gray-200 mt-2' />
      <div>
        <div className='flex items-center justify-between mt-2'>
          <h3 className='font-bold text-[20px]'>Nguời liên hệ</h3>
          <div className='flex items-center gap-2'>
            <IoSearchSharp />
            <IoIosMore />
          </div>
        </div>
        <List  data={dataFriends} />
      </div>
      <hr className='w-full h-[1px] bg-gray-200 mt-2' />
      <div>
        <h3 className='font-bold text-[20px]'>Nhóm chat</h3>
        <List data={groupChat} />
      </div>
    </aside>
  )
}

export default SideBarRight