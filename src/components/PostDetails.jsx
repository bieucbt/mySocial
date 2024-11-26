import React, { useState } from 'react'
import {FaTag, FaTimes, FaComment} from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { FiZoomOut } from "react-icons/fi";
import { MdOutlineZoomOutMap, MdKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import PostHeader from './PostHeader';
import PostOption from './PostOption';
import UserTypeComment from './UserTypeComment';

const PostDetails = ({data, setShowPostDetail}) => {
  const [index, setIndex] = useState(0)
  if(index < 0) setIndex(data.imgs.length-1)
  else if(index >= data.imgs.length) setIndex(0)
  
  return (
    <div className='fixed inset-0 z-[49]  flex items-center top-[58px]'>
      <div className='flex-[2] h-full absolute top-0 left-0 bg-black
      relative text-white'>
        <div className='h-full w-full'>
          <div className='flex items-center justify-between absolute top-0 left-0 right-0
          bg-transparent gap-3 p-3 z-40'>
            <div>
              <FaTimes onClick={(e) => {
                e.stopPropagation()
                setShowPostDetail(false)
                }} className='cursor-pointer'
                size={22} />
            </div>
            <div className='flex items-center gap-2'>
              <LuZoomIn size={22} className='cursor-pointer' /> 
              <FiZoomOut size={22} className='cursor-pointer'/>
              <FaTag size={22} className='cursor-pointer' /> 
              <MdOutlineZoomOutMap size={22} className='cursor-pointer' />
            </div>
            
          </div>
          <div className='w-full h-full flex justify-center relative'>
            {data.imgs.map((img, i) =>{ 
              return <img src={img} alt='post' key={i}
              className={`object-contain ${i !== index ? 'hidden' : ''}`} />})}
            <div className='flex items-center justify-between absolute
            top-[50%] left-[0] right-0'>
              <div className='bg-white p-3 rounded-full cursor-pointer
              text-black'
              onClick={() => setIndex(index - 1)}>
                <MdKeyboardArrowLeft size={25} />
              </div>
              <div className='bg-white p-3 rounded-full cursor-pointer
              text-black'
              onClick={() => setIndex(index + 1)}>
                <MdKeyboardArrowRight size={25} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex-1 h-full bg-white p-3'>
        <PostHeader post={data} />
        <p className='mt-3 text-[12px]'>{data.caption}</p>
        <PostOption post={data} hiddenText={true} />
        <div>
          <UserTypeComment />
        </div>
      </div>
    </div>
  )
}

export default PostDetails