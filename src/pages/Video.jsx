import React from 'react'
import { postDataVideo } from '../data/post';
import Post from './../components/Post';
import Sidebar from '../components/Sidebar';
import { videosOption } from '../data/option';


const Video = () => {
  return (
    <div className='flex'>
      <Sidebar data={videosOption} />
      <div className='flex-1 ml-[30%] px-[5%]'>
        {
          postDataVideo.map((video, i) => <Post key={i} post={video} />)
        }         
      </div>
    </div>
  )
}

export default Video