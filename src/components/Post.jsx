import React, { useState } from 'react'
import { PiGlobeLight } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import ImgPost from './ImgPost';

const Post = ({post}) => {
  const [showPostMore, setShowPostMore] = useState(false)
  const groupImg = !post.imgGroup
  const groupName = !post.groupName
  const btncss = `flex-1 flex items-center gap-2 cursor-pointer justify-center
          hover:bg-gray-200 py-1`
  return (
    <div className='p-2 first-of-type:mt-0 mt-3 rounded-lg bg-white  '>
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
        <div className='py-3'>
          {post.caption}
        </div>
        <div>
          {post.video ? <video controls >
            <source src={post.video} type='video/mp4' />
          </video>:<ImgPost data={post.imgs} />}
          
        </div>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex items-center'><AiFillLike />{post.like}</div>
          <div className='flex items-center'><RiMessage3Line />{post.comment}</div>
        </div>
        <div className='flex items-center border-t border-b border-gray-300
        py-2 justify-evenly'>
          <div className={btncss}>
            <AiFillLike size={20} />
            <span>Thích</span>
          </div>
          <div className={btncss}
          onClick={() => setShowPostMore(true)}>
            <RiMessage3Line size={20} />
            <span>Bình luận</span>
          </div>
          <div className={btncss}>
            <FaShare size={20} />
            <span>Chia sẻ</span>
          </div>
        </div>
    </div>
  )
}

export default Post