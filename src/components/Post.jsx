import React, { useState } from 'react'
import ImgPost from './ImgPost';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';
import PostOption from './PostOption';
import PostVideo from './PostVideo';

const Post = ({post}) => {
  const [showPostDetail, setShowPostDetail] = useState(false)
 
  return (
    <div className='p-2 first-of-type:mt-0 mt-3 rounded-lg bg-white '
    onClick={() => {
      if(!post.video)
      setShowPostDetail(true)
      }}>
        {
          showPostDetail && <PostDetails data={post} setShowPostDetail={setShowPostDetail} />
        }
        <PostHeader post={post} />
        <div className='py-3'>
          {post.caption}
        </div>
        <div>
          {post.video ? <PostVideo post={post} /> :<ImgPost data={post.imgs} />}
        </div>
        <PostOption post={post} />
    </div>
  )
}

export default Post