import React, {useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdVideoLibrary } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { reelsdata } from '../data/reelsData';
import VideoReel from '../components/VideoReel';


const Reels = () => {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const cssBtn = `border-solid border-[3px] border-gray-500 
          w-[47px] h-[47px] rounded-full grid place-items-center
          cursor-pointer text-gray-500 hover:border-white hover:text-white
          duration-300 ease-linear`
  
  return (
    <div className='bg-black w-full h-[91vh] flex px-4 pt-5'>
      <div className='flex  text-white gap-3 flex-[2]'>
        <div className='self-start flex items-center gap-4'>
          <RxCross1 size={25} className='cursor-pointer' 
          onClick={() => navigate('/video')}/>
          <h3 className='text-[24px] font-bold cursor-pointer hover:underline'>Reel</h3>
        </div>
      </div>
      <div className='flex-[2] h-full relative flex justify-center'>
        <div className='flex items-center justify-center h-full'>
            <VideoReel index={index} /> 
        </div>
        <div className='flex items-center justify-between  absolute 
        top-[50%] left-0 right-0'>
          <div className={`${cssBtn} translate-x-[-100px] hover:translate-x-[-105px]
            ${index == 0 && 'hidden'}` }
          onClick={() => setIndex(index-1)}>
            <IoIosArrowBack size={30}  />
          </div>
          <div className={`${cssBtn} translate-x-[100px] hover:translate-x-[105px]
            ${index == reelsdata.length-1 && 'hidden'} ml-auto`}
          onClick={() => setIndex(index+1)}>
            <IoIosArrowForward size={30}  />
          </div>
        </div>
        <div className='flex flex-col gap-2 absolute bottom-[80px] right-[-80px] 
        text-gray-500'>
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 rounded-full bg-[#ffffff1a] grid place-items-center
            hover:bg-gray-400 cursor-pointer'>
              <AiOutlineLike size={20} />
            </div>
            <span className='text-[12px] text-white mt-1'>11,1K</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 rounded-full bg-[#ffffff1a] grid place-items-center
            hover:bg-gray-400 cursor-pointer'>
              <FaRegComment size={20} />
            </div>
            <span className='text-[12px] text-white mt-1'>140</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-10 h-10 rounded-full bg-[#ffffff1a] grid place-items-center
            hover:bg-gray-400 cursor-pointer'>
              <FaRegShareSquare size={20} />
            </div>
            <span className='text-[12px] text-white mt-1'>235</span>
          </div>
        </div>
      </div>
      <div className='flex-[2]'>
        <div className='w-full'>
          <div className='bg-[#e2e5e9] w-max flex items-center rounded-xl p-3
          ml-auto cursor-pointer'>
            <MdVideoLibrary size={16} />
            <span className='text-[14px]'>Tạo thước phim</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reels