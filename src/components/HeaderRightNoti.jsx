import React, { useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import { dataHeaderNoti } from '../data/dataHeaderNoti'

const HeaderRightNoti = ({show}) => {
  const [button, setButton] = useState(true)
  return (
    <div className={`absolute top-full right-0 min-w-[440px] bg-white 
    p-5 rounded-2xl shadow-xl overflow-y-scroll h-[90vh] ${show == 3 ? '' : 'hidden'}`}>
        <div className='flex items-center justify-between '>
          <span className='text-[24px] font-bold'>Thông báo</span>
          <IoIosMore size={20} className='cursor-pointer' />
        </div>
        <div className='flex gap-3 mt-4'>
            <div className={`px-5 py-1 rounded-3xl ${button && 'bg-blue-200'}
            cursor-pointer hover:bg-gray-200 `}
            onClick={() => setButton(true)}>Tất cả</div>
            <div className={`px-5 py-1 rounded-3xl ${!button && 'bg-blue-200'}
            cursor-pointer hover:bg-gray-200 `}
            onClick={() => setButton(!true)}>Chưa đọc</div>
        </div>
        <div className='flex items-center justify-between mt-3'>
          <p className='font-bold text-[18px]'>Trước đó</p>
          <p className='text-blue-400 cursor-pointer'>Xem tất cả</p>
        </div>
        <div>
          {
            dataHeaderNoti.map((noti, i) => <div key={i} className='flex items-center overflow-hidden
            p-3 gap-4 hover:bg-gray-200 rounded-2xl cursor-pointer'>
              <div className='relative w-[50px] h-[50px]'>
                <img src={noti.img} alt="avatar" className='w-full h-full rounded-full object-cover' />
                <div className='bg-blue-700 rounded-full p-2 absolute right-[-10px] bottom-[-10px]
                flex items-center justify-center'>
                  <noti.icon color='white' />
                </div>
              </div>
              <div>
                <p><span className='font-bold'>{noti.name} </span>{noti.descript}</p>
                <p className='text-blue-600'>{noti.time} giờ trước.</p>
              </div>
            </div>)
          }
        </div>
        <div className='px-3 py-1 cursor-pointer bg-gray-300 hover:bg-gray-400
        rounded-lg text-center duration-300 ease-linear mt-3'>Xem thông báo trước đó</div>
    </div>
  )
}

export default HeaderRightNoti