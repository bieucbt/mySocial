import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Submenu from './Submenu';

const Li = ({data, value, num, showSubmenu, setShowSubmenu}) => {
  
  const {currentPage, setCurrentPage} = value ? value : null

  const handleClickSubmenu = () => { 
    if(data.submenu){
      setShowSubmenu(!showSubmenu) 
    }
    else{
        num && setCurrentPage(num)
        setShowSubmenu(false)
    }
  }

  return (
    <li className={`flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer
    relative text-[14px] text-[#65686c] gap-1 ${currentPage == num ? 
    `border-b-2 border-b-[#0866ff] text-[#0867ffe3]` : ''}`}
    onClick={handleClickSubmenu }>
      {data.title || data}
      {data.submenu && <FaAngleDown />} 
      {data.submenu && showSubmenu && <Submenu data={data.submenu} />}
    </li>
  )
}

export default Li