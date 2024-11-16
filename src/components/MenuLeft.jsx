import React from 'react'
import { FaSearch } from "react-icons/fa";
import { dataHeaderLeft } from '../data/dataHeaderLeft';

const MenuLeft = () => {
  return (
    <div className='flex-[2] bg-white rounded-lg p-3 h-max '>
        <div className='relative w-[85%] h-[40px] rounded-[30px] bg-slate-200
        px-1 '>
            <FaSearch className='absolute top-[50%] left-3 translate-y-[-50%]' />
            <input type="text" placeholder='Tìm kiếm trong menu'
            className='h-full w-full outline-none border-none pl-8 bg-transparent' />
        </div>
        <div className='pb-5 '>
            {
                dataHeaderLeft.map((data, i) => <div key={i}
                className='mt-5'>
                <h3 className='text-[20px] font-bold'>{data.heading}</h3>
                <div className='mt-[20px]'>
                    {
                        data.list.map((item, i) => <div key={i} 
                        className='flex items-center gap-2 mt-3 cursor-pointer
                        hover:bg-gray-200 rounded-xl px-2'>
                        <div><item.icon size={30}  /></div>
                        <div className='flex-1'>
                            <span className='font-bold'>{item.title}</span>
                            <p className='max-w-[78%]'>{item.descript}</p>
                        </div>
                        </div> )
                    }
                </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default MenuLeft