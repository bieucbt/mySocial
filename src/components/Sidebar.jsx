import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
        <div>
          {
            data.linkSidebar.map((link, i) => <div key={i}
            className={`${i==currentPage && 'bg-blue-300'} flex items-center gap-2
            hover:bg-blue-300 cursor-pointer flex items-center p-2 rounded-md`}
            onClick={() => setCurrentPage(i)}>
              <div className={`rounded-full p-2  ${i==currentPage ? 'bg-blue-600' : 'bg-gray-600'}`}>
                <link.icon size={25} color='white' />
              </div>
              <span>{link.name}</span>
            </div>)
          }
        </div>
    </div>
  )
}

export default Sidebar