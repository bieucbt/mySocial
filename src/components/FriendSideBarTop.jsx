import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";


const FriendSideBarTop = ({subname}) => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center gap-1'>
      <div className='text-[#385898] p-2 rounded-full hover:bg-gray-300
      cursor-pointer' onClick={() => navigate('/mySocial/friends')}>
        <FaArrowLeft />
      </div>
      <div>
        <Link to='/friends' className='text-[12px]'>Bạn bè</Link>
        <h3 className='text-[24px] font-bold'>{subname}</h3>
      </div>
    </div>
  )
}

export default FriendSideBarTop