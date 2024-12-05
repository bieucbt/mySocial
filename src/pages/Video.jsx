import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import { videosOption } from '../data/option';
import VideoPage1 from './../components/VideoPages/VideoPage1';
import VideoPage2 from './../components/VideoPages/VideoPage2';
import VideoPage4 from './../components/VideoPages/VideoPage4';
import VideoPage5 from './../components/VideoPages/VideoPage5';
import VideoPage6 from './../components/VideoPages/VideoPage6';


const Video = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    <VideoPage1 />,
    <VideoPage2 />,
    <></>,
    <VideoPage4 />,
    <VideoPage5 />,
    <VideoPage6 />,
  ]
  return (
    <div className='flex'>
      <Sidebar data={videosOption} currentPage={currentPage} 
      setCurrentPage={setCurrentPage} />
      <div className='flex-1 ml-[30%] px-[5%]'>
        {pages[currentPage]} 
      </div>
    </div>
  )
}

export default Video