import React, { useEffect, useRef, useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { userInfo } from './../data/user';
import Menu from './Menu';
import HeaderRightMess from './HeaderRightMess';
import HeaderRightNoti from './HeaderRightNoti';
import HeaderRightUser from './HeaderRightUser';

const HeaderRight = () => {
  const [hide, setHide] = useState({menu: false, mess: false, noti: false, user: false})
  const headerRightRef = useRef(null)
  useEffect(() => {
    function clickOut(e){
      if(!headerRightRef.current.contains(e.target) ){
        setHide({menu: false, mess: false, noti: false, user: false})
      }
    }
    document.addEventListener('click', clickOut )
    return () => document.removeEventListener('click', clickOut)
  }, [])
  
  function activeInfo(e,key){
    e && e.stopPropagation()
    setHide(prev => {return {menu: false, mess: false, noti: false, user: false}})
    hide[key] && hide[key] == true ?
      setHide(prev => {return {...prev,[key]: false}}) :
      setHide(prev => {return {...prev,[key]: true}})
  }
  const css = `w-[40px] h-[40px] flex items-center justify-center rounded-full p-1 `
  return (
    <div ref={headerRightRef} className="flex-1 flex items-center gap-3 justify-end relative">
        <div className={`${css} ${hide.menu ? 'bg-blue-200' : 'bg-gray-200'}`}
        title='menu'>
            <CgMenuGridO size={25} className={` cursor-pointer ${hide.menu ? 'text-blue-500' : ''}`}
            onClick={(e) => activeInfo(e,'menu')} />
            <Menu show={hide.menu} />
        </div>
        <div className={`${css} ${hide.mess ? 'bg-blue-200' : 'bg-gray-200'}`}>
          <FaFacebookMessenger size={25} className='cursor-pointer' 
          onClick={(e) => activeInfo(e,'mess')}
          color={hide.mess ? 'blue' : ''} />
          <HeaderRightMess show={hide.mess} />
        </div>
        <div className={`${css} ${hide.noti ? 'bg-blue-200' : 'bg-gray-200'}`}>
          <IoMdNotifications size={25} className='cursor-pointer' 
          onClick={(e) => activeInfo(e,'noti')}
          color={hide.noti ? 'blue' : ''}/>
          <HeaderRightNoti show={hide.noti} />
        </div>
        <div>
          <img src={userInfo.avatar} 
          alt="" className="w-[40px] h-[40px] object-cover rounded-full
          cursor-pointer" 
          onClick={(e) => activeInfo(e,'user')}/>
          <HeaderRightUser show={hide.user} />
        </div>
    </div>
  )
}

export default HeaderRight