import React, { memo } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'

const EyeLiveStream = ({ controlVideo }) => {
  return (
    <div className='absolute top-0 left-0 right-0 flex items-center justify-between
      text-white p-4'>
      <div className='flex items-center gap-3'>
        <div className='bg-[#ad1b29] py-1 px-2 rounded-md uppercase
        text-[14px] livestream'>Trực tiếp</div>
        <div className='flex items-center gap-1 text-[13px]'><FaEye /><span>999</span></div>
      </div>
      {controlVideo && <IoIosMore size={20} />}
    </div>
  )
}

export default memo(EyeLiveStream)