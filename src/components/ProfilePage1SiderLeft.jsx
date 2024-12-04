import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { dataFriends, userInfo } from '../data/user'

const ProfilePage1SiderLeft = () => {
  return (
    <div className='mt-4 flex flex-col gap-5 flex-1'>
      <div className='flex items-center bg-white px-4 py-2 rounded-xl gap-4'>
        <div className='bg-[#1877f2] rounded-full h-10 w-10 grid place-items-center'>
          <FaShieldAlt size={24} color='white' /></div>
        <div className=''><p className='text-[#080809] font-semibold'>Bạn đã khóa bảo vệ trang cá nhân</p>
        <p className='text-[14px] text-[#0866ff]'>Tìm hiểu thêm</p></div>
      </div>

      <div className='flex flex-col gap-5 bg-white px-4 py-2 rounded-xl'>
        <h3 className='text-[20px] font-semibold'>Giới thiệu</h3>
        <div className='grid place-items-center text-[14px] bg-[#e2e5e9]
        px-3 py-2 font-semibold text-[#080809] rounded-md'>Thêm tiểu sử</div>
        <div className='grid place-items-center text-[14px] bg-[#e2e5e9]
        px-3 py-2 font-semibold text-[#080809] rounded-md'>Chỉnh sửa chi tiết</div>
        <div className='grid place-items-center text-[14px] bg-[#e2e5e9]
        px-3 py-2 font-semibold text-[#080809] rounded-md'>Thêm nội dung đáng chú ý</div>
      </div>

      <div className='flex flex-col gap-5 bg-white px-4 py-2 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[20px] font-semibold'>Ảnh</h3>
          <p className='text-[#0064d1] cursor-pointer'>Xem tất cả ảnh</p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <img src={userInfo.avatar} alt="img"
          className='h-[200px] w-[200px] object-cover rounded-lg' />
        </div>
      </div>

      <div className='flex flex-col gap-5 bg-white px-4 py-2 rounded-xl'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[20px] font-semibold'>Bạn bè</h3>
          <p className='text-[#0064d1] cursor-pointer'>Xem tất cả bạn bè</p>
        </div>
        <p>{dataFriends.length} người bạn</p>
        <div className='grid grid-cols-3 gap-2'>
          {dataFriends.slice(0,8).map((friend, i) => <img key={i} src={friend.img} alt="img"
          className='h-[200px] w-[200px] object-cover rounded-lg' />)}
          
        </div>
      </div>
    </div>
  )
}

export default ProfilePage1SiderLeft