import React from 'react'
import {ShortCuts, userInfo} from '../data/user'
import { FaPlus } from "react-icons/fa6";

const ShortCut = () => {
  return (
    <div className='overflow-x-hidden flex items-center gap-2'>
        <div className='relative w-[32%] h-[250px] rounded-2xl
        overflow-hidden border shrink-0'>
            <img src={userInfo.avatar} alt="img user"
            className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 w-full h-[50px] z-10
            bg-white flex items-end justify-center pb-[10px]'>
                <div className='absolute top-[-15px] left-[50%] translate-x-[-50%]
                p-[5px] bg-white rounded-full cursor-pointer'>
                    <FaPlus size={30} color='white' 
                    className='rounded-full p-[5px] bg-[#0866ff]' />
                </div>
                <span className='font-bold'>Tạo tin</span>
            </div>
        </div>
        {
            ShortCuts.map((short, i) => <div key={i}
            className='w-[32%] h-[250px]
            overflow-hidden rounded-2xl relative flex items-end justify-center
            shrink-0'>
                <img src={short.shortimg} alt="img short"
                className='w-full h-full object-cover' />
                <div className='absolute top-3 left-3 rounded-full
                overflow-hidden p-[3px] bg-[#0866ff] '>
                    <img src={short.imgUser} alt="img user "
                    className='w-[30px] h-[30px] rounded-full object-cover' />
                </div>
                <h5 className='absolute bottom-[10px] pl-[5px] text-white w-full
                text-[14px]' >
                    {short.userName}
                </h5>
            </div>)
        }
    </div>
  )
}

export default ShortCut