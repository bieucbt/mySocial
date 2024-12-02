import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import { FaShare } from "react-icons/fa";

const PostOption = ({post, hiddenText}) => {
   const btncss = `flex-1 flex items-center gap-2 cursor-pointer justify-center
          hover:bg-gray-200 py-1`
  return (
    <div>
      <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex items-center'><AiFillLike />{post.like}</div>
          <div className='flex items-center'><RiMessage3Line />{post.comment}</div>
        </div>
        <div className='flex items-center border-t border-b border-gray-300
        py-2 justify-evenly'>
          <div className={btncss}>
            <AiFillLike size={20} />
            <span className={hiddenText && 'hidden'}>Thích</span>
          </div>
          <div className={btncss}>
            <RiMessage3Line size={20} />
            <span className={hiddenText && 'hidden'}>Bình luận</span>
          </div>
          <div className={btncss}>
            <FaShare size={20} />
            <span className={hiddenText && 'hidden'}>Chia sẻ</span>
          </div>
        </div>
    </div>
  )
}

export default PostOption