import React from 'react'
import { PiGlobeLight } from "react-icons/pi";


const PostHeader = ({post}) => {
  const groupImg = !post.imgGroup
  const groupName = !post.groupName
  return (
    <div className='flex items-center gap-2'>
      <div className='relative w-[50px] h-[50px]'>
        <img src={post.imgGroup} alt="img group"
        className={`absolute top-0 left-0 w-[39px] h-[39px] rounded-md
        ${groupImg && 'hidden'}`} />
        <img src={post.avatar} alt="avatar user"
        className={`rounded-full relative z-10
          ${groupImg ? 'w-full h-full top-0 left-0' : 'top-[20px] left-[20px] w-[25px] h-[25px] '}`} />
      </div>
      <div>
        <h4 className={`font-bold ${groupName && 'hidden'}`}>{post.groupName}</h4>
        <div className={`${groupName ? 'flex-col' : 'gap-2'} flex text-[14px] text-gray-500`}>
          <h5 className={`${groupName ? 'flex items-center text-black font-bold' : 
            ' text-gray-500'}`}>
            {post.nameUser}
          </h5>
          <div className='flex items-center'>
            <p>{post.time}</p>
            <PiGlobeLight size={14} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader