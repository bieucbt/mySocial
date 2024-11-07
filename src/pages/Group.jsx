import React from 'react'
import Sidebar from './../components/Sidebar';
import { postGroups } from '../data/post';
import Post from './../components/Post';
import { GroupsOption } from '../data/option';

const Group = () => {
  return (
    <div className=''>
      <Sidebar data={GroupsOption} />
      <div className='ml-[30%] w-[70%] px-[5%]'>
        {
          postGroups.map((postGroup, i) => <Post key={i} post={postGroup} />)
        }
      </div>
    </div>
  )
}

export default Group