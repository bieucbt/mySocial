import React from 'react'
import { dataFriends, userInfo } from '../data/user'
import { FaCamera, FaPlus, FaPen, FaAngleDown   } from "react-icons/fa";
import Avatar from './Avatar';
import ProfileHeaderNav from './ProfileHeaderNav';

const ProfileHeader = ({data}) => {
  return (
    <div className='bg-white max-w-[90%] mx-auto'>
      <div className='w-full bg-gray-300 pt-[330px] cursor-pointer'></div>
      <div className='flex items-end justify-center gap-5 pb-4 px-8'>
        <div className='relative w-[168px] h-[120px] shrink-0'>
          <div className='relative'>
            <img src={data ? data.img : userInfo.avatar} alt="avatar"
            className=' w-[168px] h-[168px] rounded-full object-cover z-[1]
            border-[5px] border-white cursor-pointer absolute top-[-40px]' />
          </div>
          <div className='absolute bottom-0 right-[10px] p-2 rounded-full
          bg-[#e2e5e9] cursor-pointer z-[2]'>
          <FaCamera />
          </div>
        </div>
        <div>
          <h1 className='text-[32px] font-bold'>{data ? data.name : userInfo.name}</h1>
          <p className='text-[#65686c] text-[14px]'>{dataFriends.length} nguời bạn</p>
          <div className='flex items-center mt-2'>
            {
              dataFriends.slice(0, 7).map((friend, i) =>(
                <Avatar key={i} link={friend.img} className='border-s-2 border-white
                w-[32px] h-[32px] shrink-0' />
              ))
            }
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center text-white cursor-pointer
          bg-[#0866ff] rounded-md px-3 py-2 text-[14px]'><FaPlus size={16} />Thêm vào tin</div>
          <div className='flex items-center text-[14px] p-2 cursor-pointer
          bg-[#e2e5e9] rounded-md'><FaPen size={16} />Chỉnh sửa trang cá nhân</div>
          <div className='bg-[#e2e5e9] rounded-md p-[10px] cursor-pointer
          '><FaAngleDown size={16} /></div>
        </div>
      </div>
      <hr className='w-full h-[1px] bg-[#e2e5e9]' />
      <ProfileHeaderNav />
    </div>
  )
}

export default ProfileHeader