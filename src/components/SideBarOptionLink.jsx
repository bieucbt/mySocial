import React from 'react'
import {useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const SideBarOptionLink = ({link, setCurrentPage,currentPage, num}) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${num==currentPage && 'bg-blue-300'} flex items-center gap-2
      hover:bg-blue-300 cursor-pointer flex items-center p-2 rounded-md `}
      onClick={() => {
        link.path ? navigate(link.path) : setCurrentPage(num)
      }}>
        <div className={`rounded-full p-2  ${num==currentPage ? 'bg-blue-600' : 'bg-gray-600'}`}>
          <link.icon size={25} color='white' />
        </div>
        <div className='flex items-center justify-between flex-1'>
          <span >{link.name}</span>
          {link.path && link.path != '/reel' && <IoIosArrowForward size={20} />}
        </div>
      </div>
  )
}

export default SideBarOptionLink