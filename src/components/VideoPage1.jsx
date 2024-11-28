import React from 'react'
import { postDataVideo } from '../data/post';
import Post from './../components/Post';

const VideoPage1 = () => {
  return (
    <div>
      {
        postDataVideo.map((video, i) => <Post key={i} post={video} />)
      } 
    </div>
  )
}

export default VideoPage1