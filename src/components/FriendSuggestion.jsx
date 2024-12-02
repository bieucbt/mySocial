import React from 'react'
import Avatar from './Avatar';
import { IoIosMore } from 'react-icons/io';

const FriendSuggestion = ({data, setProfile, isFriend}) => {
  const cssBtn = `w-[124px] h-[34px] cursor-pointer rounded-md flex items-center justify-center`
  return (
    <div className='flex items-center gap-2 mt-3 hover:bg-gray-100
    rounded-xl p-1 cursor-pointer'
    onClick={() => setProfile(data)}>
      <Avatar link={data.img} className='w-[60px] h-[60px]' />
      <div className={isFriend && 'flex items-center justify-between flex-1'}>
        <h4 className='text-[14px]'>{data.name}</h4>
        { !isFriend &&
          <div className='flex items-center mt-1 gap-2'>
            <div className={cssBtn + ' bg-[#0866ff] text-white'}>Thêm bạn bè</div>
            <div className={cssBtn + ' bg-[#e2e5e9]'}>Gỡ</div>
          </div>
        }
        <div>
          {isFriend && <IoIosMore size={25} /> }
        </div>
      </div>
    </div>
  )
}

export default FriendSuggestion