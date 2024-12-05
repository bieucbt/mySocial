import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { friendsOption } from '../data/option'
import FriendPage1 from '../components/FriendPage/FriendPage1'
import FriendPage5 from '../components/FriendPage/FriendPage5'
const Friends = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    <FriendPage1 />,
    <></>,
    <></>,
    <></>,
    <FriendPage5 />,
    <></>,
  ];
  return (
    <div>
      <Sidebar data={friendsOption} setCurrentPage={setCurrentPage} 
      currentPage={currentPage} />
      <div className='ml-[30%] p-4 '>
        {
          pages[currentPage]
        }
      </div>
    </div>
  )
}

export default Friends