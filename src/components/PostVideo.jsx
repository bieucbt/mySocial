import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FaPlay, FaPause  } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { ImVolumeMute, ImVolumeMute2  } from "react-icons/im";

const PostVideo = ({post}) => {
  const [progress, setProgress] = useState(1);
  const [currentTime, setCurrentTime] = useState(1)
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(null)
  const videoRef = useRef(null)
  const [changeRangeValume, setChangeRangeValume] = useState(false)


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

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if(muted) {
      videoRef.current.muted = false
      setMuted(false)
    }
    setVolume(newVolume); 
    videoRef.current.volume = newVolume; 
  };

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
    
    
    const winScroll = window.addEventListener('scroll', () => {
        const videoRect = video.getBoundingClientRect()
        if(videoRect.top <= 400) handlePlay()
        if(videoRect.bottom <= 200 || videoRect.top >= 400) handlePause()
       
      
    })

    const updateProgress = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
      setCurrentTime(Math.floor(Number(currentTime)))
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      window.removeEventListener('scroll', winScroll)
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
        <input type="range" className='flex-1 accent-blue-600 h-1 cursor-pointer' value={progress}
        onChange={handleSliderChange} />
        <IoMdSettings className='cursor-pointer' />
        <MdOutlineZoomOutMap className='cursor-pointer' />
        <div className='relative '
        onMouseEnter={() => setChangeRangeValume(true)}
        onMouseLeave={() => setChangeRangeValume(false)}>
          <div className={`changeVolume absolute top-[-271%] left-[-177%] ${changeRangeValume ? '' : 'hidden'}`}>
            <input type='range' min={0} max={1} step={0.01}
            value={volume} onChange={handleVolumeChange}
            className=' -rotate-90 h-3 w-[65px] accent-blue-600
            cursor-pointer' />
          </div>
          <div className='volumeVideo'>
            {muted ? <ImVolumeMute2 className='cursor-pointer'
            onClick={handleMute}  /> :  
            <ImVolumeMute className='cursor-pointer'
            onClick={handleMute2} />}
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default PostVideo