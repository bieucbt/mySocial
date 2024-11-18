import React, { useEffect } from 'react'
import {avatar1,avatar10,avatar11} from '../assets/index'
import { ImCross } from "react-icons/im";
import Post from './Post';

const PostMore = ({post}) => {
    useEffect(() => {
        const WinScroll = window.addEventListener('scroll', (e)=>{
            e.preventDefault()
        })
        return () => window.removeEventListener('wheel', WinScroll)
    },[])
  return (
    <div className='bg-gray-300 absolute inset-0'>
        <div>
            <div>
                <div>Bài viết của Sài Gòn</div>
                <div>
                    <ImCross />
                </div>
            </div>
            <div className='w-1/2'>
                <Post post={post} />
            </div>
            
        </div>
    </div>
  )
}

export default PostMore