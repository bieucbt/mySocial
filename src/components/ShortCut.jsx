import React, { useEffect, useRef, useState } from 'react'
import {ShortCuts, userInfo} from '../data/user'
import { FaPlus } from "react-icons/fa6";

const ShortCut = () => {
    const shortCutWidth = useRef(null)
    const [index, setIndex] = useState(0)
    const [width, setWidth] = useState(shortCutWidth.current)
    useEffect(() => {
        window.addEventListener('resize', setWidth(shortCutWidth.current.offsetWidth) )
    })
  return (
    <div className='overflow-x-hidden relative'>
        <div  className=' flex items-center gap-2 duration-500 ease-linear '
        style={{transform: `translateX(-${(width + 10)* index}px )`}}>
            <div ref={shortCutWidth}
            className='relative w-[32%] h-[250px] rounded-2xl
            overflow-hidden border shrink-0'>
                <img src={userInfo.avatar} alt="img user"
                className='w-full h-full object-cover hover:scale-110
                duration-500 ease-linear cursor-pointer' />
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
                shrink-0 cursor-pointer'>
                    <img src={short.shortimg} alt="img short"
                    className='w-full h-full object-cover hover:scale-110 duration-500' />
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
            <button 
            className={`p-4 py-2 text-[20px] bg-gray-300 rounded-full flex items-center justify-center
                ${index <= 0 && 'hidden'} absolute left-0 top-[50%] translate-y-[-50%]`}
            onClick={() => setIndex(index-1)}>{'<'}</button>
            <button 
            className={`p-4 py-2 text-[20px] bg-gray-300 rounded-full flex items-center justify-center
            ${index >= ShortCuts.length-2 && 'hidden'} absolute right-0 top-[50%] translate-y-[-50%]`}
            onClick={() => setIndex(index+1)}>{'>'}</button>
    </div>
  )
}

export default ShortCut