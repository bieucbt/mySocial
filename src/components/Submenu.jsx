import React from 'react'
import Li from './Li'

const Submenu = ({data}) => {
  return (
    <ul className='absolute top-full left-0 bg-white shadow-xl
    min-w-[200px]'>
      {
        data.map((item, i) => <li key={i} className='text-black
        flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer
    relative text-[14px] text-[#65686c] gap-1'>{item}</li>)
      }
    </ul>
  )
}

export default Submenu