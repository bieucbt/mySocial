import React, { useEffect, useRef, useState } from 'react'

const VideoShow = ({show}) => {
  const [subShow, setSubShow] = useState(false)
  const [positionSubShow, setPositionSubShow] = useState(false)
  const showRef = useRef(null)
  useEffect(() => {
    const show = showRef.current
    const showRect = show.getBoundingClientRect()
    if(showRect.top > 500 ) setPositionSubShow(true)
  },[])
  return (
    <div ref={showRef} className='relative'>
        <div className='overflow-hidden cursor-pointer rounded-md'
        onMouseEnter={() => setSubShow(true)}
        onMouseOut={() => setSubShow(false)}>
          <img src={show.img} alt="show"
          className='hover:scale-110 duration-500 ease-linear
          w-full h-full' />
        </div>
        {
          subShow && <div className={`absolute ${positionSubShow ? 'bottom-full' : 'top-full'} 
          right-0 bg-white shadow-lg z-30 w-[250%] rounded-lg p-3`}>
            <span className='text-[12px] text-gray-400'>{show.episode}</span>
            <h3 className='text-[15px] font-bold'>{show.name}</h3>
            <p className='text-[13px]'>{show.discript}</p>
          </div>
        }
      </div>
  )
}

export default VideoShow