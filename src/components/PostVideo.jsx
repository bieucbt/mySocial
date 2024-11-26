import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FaPlay, FaPause  } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { ImVolumeMute, ImVolumeMute2  } from "react-icons/im";

const PostVideo = ({post}) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0)
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(false)
  const videoRef = useRef(null)

  const handleSliderChange = (e) => {
    const time = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = time;
    if(play) videoRef.current.play()
    else videoRef.current.pause()
    setProgress(e.target.value);
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); 
    const remainingSeconds = seconds % 60;
  
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${minutes}:${formattedSeconds}`;
  }

  function handlePlay(){
    videoRef.current.play()
    setPlay(true)
  }
  function handlePause(){
    videoRef.current.pause()
    setPlay(false)
  }

  function handleMute(){
    videoRef.current.muted = false
    setMuted(false)
  }

  function handleMute2(){
    videoRef.current.muted = true
    setMuted(true)
  }


  useEffect(() => {
    const video = videoRef.current
    const updateProgress = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
      setCurrentTime(Math.floor(Number(currentTime)))
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [])
 

  return (
    <div className='relative'>
      <video ref={videoRef} >
        <source src={post.video} type='video/mp4' />
      </video>
      <div className='absolute bottom-[5%] left-0 right-0 flex items-center text-white
      gap-3 px-2'>
        {play ? <FaPause onClick={handlePause} 
        className='cursor-pointer'/> : <FaPlay onClick={handlePlay}
        className='cursor-pointer' />}
        <span>{formatTime(currentTime)}</span> 
        <input type="range" className='flex-1' value={progress}
        onChange={(e) => handleSliderChange(e)} />
        <IoMdSettings className='cursor-pointer' />
        <MdOutlineZoomOutMap className='cursor-pointer' />
        {muted ? <ImVolumeMute2 className='cursor-pointer'
        onClick={handleMute} /> :  
        <ImVolumeMute className='cursor-pointer'
        onClick={handleMute2} />}
      </div>
    </div>
    
  )
}

export default PostVideo