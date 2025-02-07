import React, { memo, useEffect } from 'react'
import Suggestion from '../Suggestion'
import { dataFriends } from '../../data/user'

const FriendPage1 = () => {
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div>
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
  )
}

export default memo(FriendPage1)