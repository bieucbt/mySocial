import React, { memo } from 'react'
import { userInfo } from '../data/user'
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { dataHeaderUser } from '../data/dataHeaderUser';
import { useNavigate } from 'react-router-dom';

const HeaderRightUser = ({ show, setHide }) => {
  const navigate = useNavigate()
  return (
    <div className={`absolute top-full right-0 min-w-[440px] bg-white 
    p-5 rounded-2xl ${show == 4 ? '' : 'hidden'} shadow-2xl`}
      onClick={(e) => e.stopPropagation()}>
      <div>
        <div className='shadow-2xl p-1 rounded-xl'>
          <div className='flex items-center gap-3 hover:bg-gray-300 rounded-xl
          p-2 cursor-pointer'
            onClick={() => {
              navigate('mySocial/profile')
              setHide(false)
            }}>
            <div className='w-10 h-10'><img src={userInfo.avatar} alt="avtar"
              className='w-full h-full rounded-full' /></div>
            <p className='font-bold text-[20px]'>{userInfo.name}</p>
          </div>
          <hr className='h-[2px] w-full bg-gray-400 mx-auto my-2' />
          <div className='flex items-center justify-center bg-gray-200 
          hover:bg-gray-400 cursor-pointer rounded-lg mt-4 py-2'>
            <CgArrowsExchangeAlt size={25} /> <span className='ml-2'>Xem tất cả trang cá nhân</span>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        {dataHeaderUser.map((data, i) => <div key={i}
          className='flex items-center gap-3 p-2 rounded-xl hover:bg-gray-300
        cursor-pointer'>
          <div className='rounded-full bg-gray-200 p-2'>
            <data.icon size={25} />
          </div>
          <p className='font-bold'>{data.name}</p>
        </div>)}
      </div>
    </div>
  )
}

export default memo(HeaderRightUser)