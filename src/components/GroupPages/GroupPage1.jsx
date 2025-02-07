import React, { useEffect } from 'react'
import { postGroups } from '../../data/post';
import Post from '../Post';

const GroupPage1 = () => {
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div>{
      postGroups.map((postGroup, i) => <Post key={i} post={postGroup} />)
    }</div>
  )
}

export default GroupPage1