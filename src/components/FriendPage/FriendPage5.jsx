import React, { memo, useEffect, useState } from 'react'
import { FaFaceGrin } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { avatar4 } from '../../assets'
import Avatar from '../Avatar';
import BirthdayCaption from '../BirthdayCaption';

const FriendPage5 = () => {
  const [text, setText] = useState('Mỹ Linh ơi, chúc mừng sinh nhật nhé! 🎉🎂')
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div className='mx-[10%] bg-white p-5 rounded-lg'>
      <h1 className='text-[20px] font-bold'>Sinh nhật hôm nay</h1>
      <div className='flex  mt-3 gap-2'>
        <Avatar link={avatar4} className={'w-[60px] h-[60px]'} />
        <div className='flex-1 flex flex-col'>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-[14px]'>Le Mỹ Linh</span>
            <span className='text-[12px] text-[#65686c]'>19 tuổi</span>
          </div>
          <div className='flex items-center flex-1 mt-2 '>
            <div className='relative flex-1 h-full bg-[#f0f2f5] rounded-[20px]
          p-3'>
              <textarea type="text" value={text} onChange={(e) => setText(e.target.value)}
                className='text-[15px] w-full outline-none bg-transparent h-auto
              h-max h-4 flex items-center' style={{ height: text.length > 30 && 'auto' }} />
              <div className='absolute right-2 bottom-2 ml-2
              cursor-pointer text-gray-400'><FaFaceGrin size={20} /></div>
            </div>
            <div className='text-[#0062d2] ml-4 p-2 rounded-full hover:bg-gray-200
            cursor-pointer flex '>
              <IoSend size={24} />
            </div>
          </div>
          <BirthdayCaption title={'Sinh nhật vui vẻ nhé! 🥳🎊'}
            setText={setText} />
          <BirthdayCaption title={'Sinh nhật vui vẻ! Tận hưởng trọn vẹn nhé! 🥳🎂🎈'}
            setText={setText} />
        </div>
      </div>

    </div>
  )
}

export default memo(FriendPage5)