import React, { useState } from 'react'
import FriendSideBarTop from '../components/FriendSideBarTop'
import { people } from '../assets'
import { dataFriends } from '../data/user'
import FriendSuggestion from '../components/FriendSuggestion'
import Profile from './Profile'

const SuggestionsPage = () => {
  const [profile, setProfile] = useState(null)
  return (
    <div className='flex relative '>
      <div className='w-[30%] bg-white shadow-2xl p-3 overflow-hidden
      flex flex-col sticky top-0 h-screen'>
        <FriendSideBarTop subname='Tất cả bạn bè' />
        <div className='flex-1 overflow-hidden hover:overflow-y-scroll
        pb-10'>
          <p className='mt-5'>tất cả</p>
          {
            dataFriends.map((friend, i) => (
            <FriendSuggestion key={i} data={friend} setProfile={setProfile} isFriend />))
          }
        </div>
      </div>
      <div className='w-full h-full self-center'>
        {
          profile ? <Profile data={profile} /> : <div className='flex flex-col items-center'>
            <img src={people} alt="people" width={112} height={112} />
            <p className='text-[20px] text-[#65686c] mt-3'>Chọn tên của người mà bạn muốn xem trước trang cá nhân.</p>
          </div>
        }
        
      </div>
    </div>
  )
}

export default SuggestionsPage