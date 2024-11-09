import React from 'react'



const Suggestion = ({data}) => {
    const cssBtn = `flex items-center justify-center 
                cursor-pointer rounded-md`
  return (
    <div className='rounded-md flex flex-col rounded-xl overflow-hidden
    bg-white'>
        <img src={data.img} alt="suggestion img"
        className='w-full h-[60%] object-cover cursor-pointer' />
        <div className='flex-1 flex flex-col p-2 '>
            <h3 className='font-bold'>{data.name}</h3>
            <div className='flex-1 flex flex-col justify-end gap-2'>
                <p className={`${cssBtn} bg-blue-500`}>Thêm bạn</p>
                <p className={`${cssBtn} bg-gray-300`}>Gỡ</p>
            </div>
        </div>
    </div>
  )
}

export default Suggestion