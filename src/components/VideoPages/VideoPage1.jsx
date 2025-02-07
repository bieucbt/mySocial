import React, { useEffect } from 'react'
import { postDataVideo } from '../../data/post';
import Post from '../Post';

const VideoPage1 = () => {
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div>
      {
        postDataVideo.map((video, i) => <Post key={i} post={video} />)
      }
    </div>
  )
}

export default VideoPage1