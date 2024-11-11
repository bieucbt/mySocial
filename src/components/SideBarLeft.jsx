import React from 'react'
import {linksSideBarLeft} from '../data/linkSideBarLeft'
import { Link } from 'react-router-dom'
import {groupsUser, userInfo} from '../data/user'
import { IoIosArrowDropdown } from "react-icons/io";
import './sidebar.css'
import List from './List';


const SideBarLeft = () => {
  const cssLi = `flex items-center gap-2 inline-block
            w-full px-[4px] py-[8px] hover:bg-gray-400 rounded-md
            cursor-pointer transition-all duration-200 ease-linear`
  return (
    <aside className='sidebarLeft w-[25%] flex flex-col fixed 
    left-0  h-screen pt-[10px] px-[8px] overflow-hidden
    hover:overflow-y-scroll bg-white pb-[70px] '>
        <nav>
          <div className={cssLi} >
            <img src={userInfo.avatar} alt="img user"
            className='w-[25px] h-[25px] object-cover
            rounded-full' />
            <span>{userInfo.name}</span>
          </div>
          <List data={linksSideBarLeft} type={1} />
          <div className={cssLi}>
              <IoIosArrowDropdown size={25} />
              <span>xem thêm</span>
          </div>
        </nav>
        <hr className='h-[1px] bg-gray-200 w-full my-3' />
        <div className='flex items-center justify-between mb-3'>
          <p>Lối tắt của bạn</p>
          <p className='text-blue-400 cursor-pointer
          px-3 py-1  hover:bg-gray-300 rounded-md'>chỉnh sửa</p>
        </div>
        <List data={groupsUser} />
        <div className={cssLi}>
              <IoIosArrowDropdown size={25} />
              <span>xem thêm</span>
        </div>
    </aside>
  )
}

export default SideBarLeft