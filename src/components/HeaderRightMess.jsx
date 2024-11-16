import React, { useState } from 'react'
import { IoIosMore } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { dataMess } from './../data/dataHeaderMess';


const HeaderRightMess = ({show}) => {
  const [button, setButton] = useState(true)
  return (
    <div className={`absolute top-full right-0 min-w-[440px] bg-white
    rounded-xl p-5 shadow-2xl h-[600px] overflow-hidden ${show ? '' : 'hidden'}`}>
        <div className='flex items-center justify-between'>
          <span className='text-[24px] font-bold'>Đoạn chat</span>
          <div className='flex items-center gap-4'>
              <IoIosMore size={20} className='cursor-pointer' />
              <MdOutlineZoomOutMap size={20} className='cursor-pointer' />
              <IoCreateOutline size={20} className='cursor-pointer' />
          </div>
        </div>
        <div className='h-[40px] relative bg-gray-200 rounded-2xl overflow-hidden mt-3'>
            <FaSearch size={20} className='absolute top-[50%] left-2 translate-y-[-50%]' />
            <input type="text" placeholder='Tìm kiếm trên Messenger'
            className='w-full h-full bg-transparent outline-none border-none pl-8' />
        </div>
        <div className='flex gap-3 mt-4'>
            <div className={`px-5 py-1 rounded-3xl ${button && 'bg-blue-200'}
            cursor-pointer hover:bg-gray-200 `}
            onClick={() => setButton(true)}>Hộp thư</div>
            <div className={`px-5 py-1 rounded-3xl ${!button && 'bg-blue-200'}
            cursor-pointer hover:bg-gray-200 `}
            onClick={() => setButton(!true)}>Cộng đồng</div>
        </div>
        <div className='mt-3 overflow-y-scroll h-[430px] pb-[20px]'>
            {
              dataMess.map((mess, i) => <div key={i} className='flex items-center gap-3
              p-2 hover:bg-gray-200 cursor-pointer rounded-xl'>
                <div className='w-[50px] h-[50px]'>
                  <img src={mess.img} alt="avatar" 
                  className='rounded-full object-cover w-full h-full' />
                </div>
                <div>
                  <p className='font-bold'>{mess.name}</p>
                  <p className='text-[14px]'>
                    {mess.mess}<span className='text-gray-300 ml-1'>.{mess.time}</span>
                  </p>
                </div>
              </div>)
            }
        </div>
    </div>
  )
}

export default HeaderRightMess