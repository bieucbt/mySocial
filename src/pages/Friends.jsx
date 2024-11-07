import React from 'react'
import Sidebar from '../components/Sidebar'
import { dataFriends } from '../data/user'
import Suggestion from '../components/Suggestion'
import { friendsOption } from '../data/option'
const Friends = () => {
  return (
    <div>
      <Sidebar data={friendsOption} />
      <div className='ml-[30%] p-4 '>
          <div className='flex items-center justify-between
          mb-3'>
            <h3 className='text-[25px] font-bold'>Những người bạn có thể biết</h3>
            <span className='text-blue-400 cursor-pointer'>xem tất cả</span>
          </div>
        <div className='grid grid-cols-4 gap-2'>
          {
            dataFriends.map((friend, i) => <Suggestion key={i} data={friend} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Friends