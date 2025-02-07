import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { userInfo } from './../data/user';
import Menu from './Menu';
import HeaderRightMess from './HeaderRightMess';
import HeaderRightNoti from './HeaderRightNoti';
import HeaderRightUser from './HeaderRightUser';
import Avatar from './Avatar';

const HeaderRight = () => {
  const [hide, setHide] = useState(0)
  const headerRightRef = useRef(null)

  useEffect(() => {
    function clickOut(e) {
      if (!headerRightRef.current.contains(e.target)) {
        setHide(0)
      }
    }
    document.addEventListener('click', clickOut)
    return () => document.removeEventListener('click', clickOut)
  }, [hide])

  function activeInfo(e, key) {
    e && e.stopPropagation()
    setHide(key)
    if (key == hide) setHide(0)
  }

  const css = `w-[40px] h-[40px] flex items-center justify-center rounded-full p-1 `
  return (
    <div ref={headerRightRef} className="flex-1 flex items-center gap-3 
    justify-end relative bg-white">
      <div className={`${css} ${hide == 1 ? 'bg-blue-200' : 'bg-gray-200'}`}
        title='menu'>
        <CgMenuGridO size={25} className={` cursor-pointer ${hide == 1 ? 'text-blue-500' : ''}`}
          onClick={(e) => activeInfo(e, 1)} />
        <Menu show={hide} />
      </div>
      <div className={`${css} ${hide == 2 ? 'bg-blue-200' : 'bg-gray-200'}`}>
        <FaFacebookMessenger size={25} className='cursor-pointer'
          color={hide == 2 ? 'blue' : ''}
          onClick={(e) => activeInfo(e, 2)} />
        <HeaderRightMess show={hide} />
      </div>
      <div className={`${css} ${hide == 3 ? 'bg-blue-200' : 'bg-gray-200'}`}>
        <IoMdNotifications size={25} className='cursor-pointer'
          onClick={(e) => activeInfo(e, 3)}
          color={hide == 3 ? 'blue' : ''} />
        <HeaderRightNoti show={hide} />
      </div>
      <div onClick={(e) => activeInfo(e, 4)}>
        <Avatar link={userInfo.avatar} />
        <HeaderRightUser show={hide} setHide={setHide} />
      </div>
    </div>
  )
}

export default memo(HeaderRight)