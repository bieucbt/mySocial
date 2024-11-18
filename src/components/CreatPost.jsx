import React, {  useState } from 'react'
import { FaTimes, FaUserTag } from "react-icons/fa";
import { FaLocationDot, FaLock, FaRegFaceSmile } from "react-icons/fa6";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoIosArrowDown, IoIosMore } from 'react-icons/io';
import {avatar1} from '../assets/'


const CreatPost = ({showPost, setShowPost}) => {
    const [widthTexera, setWidthTexera] = useState('')
  return (
    <div className={`${!showPost && 'hidden'} fixed inset-0  duration-700 ease-linear
    z-50 animation-fadein`}>
        <div className=' bg-gray-200 opacity-70 absolute inset-0 z-50 duration-700 ease-linear'
        onClick={() => setShowPost(false)}></div>
        <div className='w-[40%] m-auto mt-[10%] relative z-[100] bg-white p-3 rounded-xl
        text-black'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] ml-[32%]'>Tạo bài viết</h3>
                <div onClick={() => setShowPost(false)} 
                className='cursor-pointer'><FaTimes size={20} /></div>
            </div>
            <hr className='w-full h-[1px] bg-white my-3' />
            <div className='flex items-center gap-2'>
                <img src={avatar1} alt="avatar"
                className='w-[50px] h-[50px] object-cover rounded-full' />
                <div >
                    <p className=' text-gray-700'>john wick</p>
                    <p className='flex items-center gap-1 cursor-pointer bg-gray-200 rounded-lg
                    p-1'>
                        <FaLock /> 
                        <span className='text-[14px]'>chỉ mình tôi</span>
                        <IoIosArrowDown />
                    </p>
                </div>
            </div>
            <textarea className={`resize-none w-full outline-none mt-4
            h-[100px] ${widthTexera.length > 50 ? 'text-[16px] h-[130px]' : 'text-[20px]'}`}
            placeholder={`${widthTexera}'john wick ơi, bạn đang nghĩ gì thế?'`}
            onKeyUp={(e) => setWidthTexera(e.target.value)}></textarea>
            <div className='flex items-center justify-between my-3'>
                <span>color</span>
                <MdOutlineInsertEmoticon size={25} />
            </div>
            <div className='flex items-center gap-2 mb-4 justify-between
            p-4 border-gray-300 rounded-xl border'>
                <h4 className='cursor-pointer'>Thêm vào bài viết của bạn</h4>
                <div className='flex items-center gap-4'>
                    <CiImageOn size={25} className='cursor-pointer' />
                    <FaUserTag size={25} className='cursor-pointer' /> 
                    <FaRegFaceSmile size={25} className='cursor-pointer' />
                    <FaLocationDot size={25} className='cursor-pointer' />
                    <IoIosMore size={25} className='cursor-pointer' /> 
                </div>
            </div>
            <div className={`w-full text-center rounded-md cursor-pointer
            hover:opacity-90 py-1 text-white ${widthTexera.length > 0 ? 'bg-blue-600' :'bg-gray-300'}`}>
                Đăng
            </div>
        </div>
    </div>
  )
}

export default CreatPost