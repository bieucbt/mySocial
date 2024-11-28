import React from 'react'

const Avatar = ({link, className}) => {
  return (
    <img src={link} 
          alt="" className={`w-[40px] h-[40px] object-cover rounded-full
          cursor-pointer ${className}`} />
  )
}

export default Avatar