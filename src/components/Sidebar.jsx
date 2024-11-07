import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = ({data}) => {
  const [active, setActive] = useState(0)
  return (
    <div className='w-[30%] h-full bg-gray-400 fixed p-3'>
        <div className='flex justify-between'>
            <h3 className='text-[25px] font-bold'>{data.title}</h3>
            <div className='bg-gray-500 rounded-full p-2'>
                <data.icon size={25} color='white' />
            </div>
        </div>
        {
          data.placeholder && <div className='flex items-center bg-white 
          rounded-3xl overflow-hidden relative p-2 my-4'>
            <FaSearch className="" />
            <input type="text" placeholder={data.placeholder}
            className='border-none w-full h-full outline-none
            pl-2' />
        </div>
        }
        
        <div>
          {
            data.linkSidebar.map((link, i) => <div key={i}
            className={`${i==active && 'bg-blue-300'} flex items-center gap-2
            hover:bg-blue-300 cursor-pointer flex items-center p-2 rounded-md`}
            onClick={() => setActive(i)}>
              <div className={`rounded-full p-2  ${i==active ? 'bg-blue-600' : 'bg-gray-600'}`}>
                <link.icon size={25} color='white' />
              </div>
              <Link to={link.path}>{link.name}</Link>
            </div>)
          }
        </div>
    </div>
  )
}

export default Sidebar