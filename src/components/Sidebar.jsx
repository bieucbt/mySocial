import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideBarOptionLink from './SideBarOptionLink'

const Sidebar = ({data, setCurrentPage, currentPage}) => {
  return (
    <div className='w-[30%] h-full bg-white fixed p-3'>
        <div className='flex justify-between'>
            <h3 className='text-[25px] font-bold'>{data.title}</h3>
            <div className='bg-gray-500 rounded-full p-2 cursor-pointer'>
                <data.icon size={25} color='white' />
            </div>
        </div>

        {/* search sidebar */}
        {
          data.placeholder && <div className='flex items-center bg-gray-200 
          rounded-3xl overflow-hidden relative p-2 my-4'>
            <FaSearch className="" />
            <input type="text" placeholder={data.placeholder}
            className='border-none w-full h-full outline-none
            pl-2 bg-transparent' />
        </div>
        }
        
        {/* link option */}
        <div className='mt-5'>
          {
            data.linkSidebar.map((link, i) => <SideBarOptionLink key={i} link={link} 
            setCurrentPage={setCurrentPage} currentPage={currentPage} num={i} />)
          }
        </div>
    </div>
  )
}

export default Sidebar