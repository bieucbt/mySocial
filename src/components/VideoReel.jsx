import React, { useEffect, useRef, useState } from 'react'
import { reelsdata } from '../data/reelsData'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { FaVolumeMute } from 'react-icons/fa'
import { IoMdVolumeMute } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

const VideoReel = ({index}) => {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(true)
  const location = useLocation()

  const handleMute = () => {
    if(!videoRef.current) return
    if(muted){
      videoRef.current.muted = false
      setMuted(false)
    }else{
      videoRef.current.muted = true
      setMuted(true)
    }
  } 
  
  const handlePlay = () => {
    if(!videoRef.current) return
    else{
      videoRef.current.play()
      setPlay(true)
    }
  }

  const handlePause = () => {
    if(!videoRef.current) return
    videoRef.current.pause()
    setPlay(false)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.src = reelsdata[index];
      video.load();
      handlePlay();
    }
    const videoEnded = video.addEventListener('ended', () =>{
      handlePlay();
    })
    return () => {
      video.removeEventListener('ended', videoEnded)
    }
  }, [index, videoRef.current]);
  

  return (
    <>
      <div className='absolute right-0 top-0 text-gray-500 flex items-center
      gap-3 z-10'>
        {play ? <FaPause onClick={handlePause} 
        className='cursor-pointer'/> : <FaPlay onClick={() => handlePlay()}
        className='cursor-pointer' />}
        {muted ? <FaVolumeMute className='cursor-pointer'
        onClick={() => handleMute()}  /> :  
        <IoMdVolumeMute className='cursor-pointer'
        onClick={() =>handleMute()} />}
      </div>
      <video ref={videoRef} className='h-full' muted>
        <source src={reelsdata[index]} type='video/mp4' />
      </video>
    </>
  )
}

export default React.memo( VideoReel)