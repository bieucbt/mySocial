import React from 'react'
import ShortCut from '../components/ShortCut'
import Status from '../components/Status'
import Post from '../components/Post'
import SideBarLeft from '../components/SideBarLeft'
import SideBarRight from '../components/SideBarRight'
import { posts } from '../data/post'

const Home = () => {
  return (
    <div className='flex'>
      <SideBarLeft />
      <div className='bg-gray-100 w-[50%] ml-[25%]'>
        <ShortCut />
        <div className='px-[20px]'>
          <Status />
          {
            posts.map((post, i) => <Post key={i} post={post} />)
          }
        </div>
      </div>
      <SideBarRight />
    </div>
  )
}

export default Home