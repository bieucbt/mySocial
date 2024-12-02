import React, { useCallback, useEffect, useRef, useState } from 'react'
import { formatTime} from '../Store/handlVideo';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { IoMdSettings, IoMdVolumeMute} from 'react-icons/io';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { FaVolumeMute } from 'react-icons/fa';

const PostVideo = ({post}) => {
  const videoRef = useRef(null)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0);
  const [play, setPlay] = useState(false)
  const [muted, setMuted] = useState(true)
  const [changeRangeValume, setChangeRangeValume] = useState(false)
  

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

  const handleChangeCurrentTime = (e) =>{
    const newProcess = e.target.value
    setProgress(newProcess)
    if(videoRef.current){
      const video = videoRef.current
      const duration = video.duration
      video.currentTime = (newProcess / 100) * duration
    }
  }


  useEffect(() => {
    const video = videoRef.current
    if(video){
        const handleScroll = () => {
          const videoRect = video.getBoundingClientRect();
          if (videoRect.top <= 450  ) handlePlay();
          if (videoRect.bottom <= 300 || videoRect.top >= 500 ) handlePause();
        };

        video.addEventListener('ended', () => handlePause())
        
        const winScroll = window.addEventListener('scroll', handleScroll)
  
        const updateProgress = () => {
          const currentTime = video.currentTime || 0;
          const duration = video.duration || 1;
          setProgress((currentTime / duration) * 100);
          setCurrentTime(Math.floor(Number(currentTime)))
        };
    
        const videoEnded = video.addEventListener('timeupdate', updateProgress);
    
        return () => {
          video.removeEventListener('timeupdate', updateProgress);
          window.removeEventListener('scroll', winScroll)
          video.removeEventListener('ended', videoEnded)
        };
    }

  }, [videoRef.current])

  const handleVolumeChange = (e) => {
    if(!videoRef.current) return 
    const newVolume = parseFloat(e.target.value);
    if(muted) {
      videoRef.current.muted = false
      setMuted(false)
    }
    setVolume(newVolume); 
    videoRef.current.volume = newVolume; 
  };
  
  
 

  return (
    <div className='relative'>
      <video ref={videoRef} muted >
        <source src={post.video} type='video/mp4' />
      </video>
      <div className='absolute bottom-[5%] left-0 right-0 flex items-center text-white
      gap-3 px-2'>
        {play ? <FaPause onClick={handlePause} 
        className='cursor-pointer'/> : <FaPlay onClick={() => handlePlay()}
        className='cursor-pointer' />}

        <span>{formatTime(currentTime)}</span> 

        <input type="range" className='flex-1 accent-blue-600 h-1 cursor-pointer' value={progress || 0}
        onInput={handleChangeCurrentTime} />

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
            {muted ? <FaVolumeMute className='cursor-pointer'
            onClick={() => handleMute()}  /> :  
            <IoMdVolumeMute className='cursor-pointer'
            onClick={() =>handleMute()} />}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PostVideo