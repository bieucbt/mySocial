import React from 'react'
import { people } from '../assets';
import FriendSideBarTop from '../components/FriendSideBarTop';

const Requests = () => {
  return (
    <div className='flex items-center h-screen'>
      <div className='w-[30%] h-full bg-white shadow-2xl p-3'>
        <FriendSideBarTop name='Bạn bè' subname='Lời mời kết bạn'  />
        <div>
          <h4>Lời mời kết bạn</h4>
          <p className='text-[12px] text-[#0064d1] cursor-pointer'>xem lời mời đã gửi</p>
        </div>
        <div className='mt-4'>
          <p className='text-[12px] text-[#65686c]'>Không có yêu cầu nào mới</p>
        </div>
      </div>
      <div className='w-[70%] h-full grid place-content-center'>
          <div className='flex flex-col items-center'>
            <img src={people} alt="people" width={112} height={112} />
            <p className='text-[20px] text-[#65686c] mt-3'>Lời mời và gợi ý kết bạn sẽ hiển thị tại đây.</p>
          </div>
      </div>
    </div>
  )
}

export default Requests