import React, { useEffect, useRef, useState } from 'react'
import EyeLiveStream from '../EyeLiveStream';
import { videoLive } from '../../data/videoLiveData';
import PostHeader from '../PostHeader';
import { CiSettings } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GoMute, GoUnmute } from "react-icons/go";

const VideoPage2 = () => {
  const [videoLiveCount, setVideoLiveCount] = useState(3)
  const [muted, setMuted] = useState(true)
  const [controlVideo, setControlVideo] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {

    const video = videoRef.current
    if (!video) return
    const videoEnd = video.addEventListener('ended', () => {
      video.play()
    })

    return () => {
      video.removeEventListener('ended', videoEnd)
    }
  }, [videoRef.useEffect])
  return (
    <div>
      <div className=''>
        <div className='relative'
          onMouseOver={() => setControlVideo(true)}
          onMouseOut={() => setControlVideo(false)}>
          <EyeLiveStream controlVideo={controlVideo} />
          <video muted autoPlay={true} ref={videoRef} className='cursor-pointer'>
            <source src={videoLive[0].video} type="video/mp4" />
          </video>
          <div className='absolute bottom-0 left-0 z-10 text-white
          p-5 flex justify-between w-full'>
            <PostHeader post={{ avatar: videoLive[0].img, groupName: videoLive[0].discrip }}
              className={!controlVideo && 'hidden'} />
            <div className='flex items-center gap-3 flex-1 justify-end'>
              {controlVideo && <CiSettings size={20} className='cursor-pointer' />}
              {controlVideo && <MdOutlineZoomOutMap size={20} className='cursor-pointer' />}
              <div >
                {muted ? <GoMute size={20} className='cursor-pointer'
                  onClick={() => setMuted(false)} /> : <GoUnmute size={20} className='cursor-pointer'
                    onClick={() => setMuted(true)} />}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-2xl p-5'>
          <h3 className='text-[20px] font-bold'>Video trực tiếp cho bạn</h3>
          <div className='grid grid-cols-3 gap-x-3 gap-y-4 mt-3'>
            {
              videoLive.slice(0, videoLiveCount).map((live, i) => <div key={i}
                className='relative'>
                <EyeLiveStream />
                <video src={live.video} className='rounded-lg cursor-pointer' ></video>
                <PostHeader post={{ avatar: live.img, groupName: live.name, nameUser: live.discrip }}
                  className='mt-2' />
              </div>)
            }
          </div>
          <div className='text-[#0064d1] bg-[#ebf5ff] w-full flex items-center
          justify-center cursor-pointer rounded-lg py-2 mt-5'
            onClick={() => setVideoLiveCount(videoLiveCount + 6)}>Xem thêm</div>
        </div>
      </div>
    </div>
  )
}

export default VideoPage2