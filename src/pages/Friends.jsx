import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { friendsOption } from '../data/option'
import FriendPage1 from '../components/FriendPage1'
import FriendPage2 from '../components/FriendPage2'
import FriendPage3 from '../components/FriendPage3'
import FriendPage4 from '../components/FriendPage4'
import FriendPage5 from '../components/FriendPage5'
import FriendPage6 from '../components/FriendPage6'
const Friends = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    <FriendPage1 />,
    <FriendPage2 />,
    <FriendPage3 />,
    <FriendPage4 />,
    <FriendPage5 />,
    <FriendPage6 />,
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