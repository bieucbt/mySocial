import React from 'react'

const BirthdayCaption = ({title, setText}) => {
  return (
    <div className='mt-3 border-s-gray-300 border
    rounded-[20px] px-2 w-max cursor-pointer hover:bg-gray-300'
    onClick={() => setText(title)}>{title}</div>
  )
}

export default BirthdayCaption