import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import NavHeader from './NavHeader'
import HeaderLeft from "./HeaderLeft";
import './header.css'
import { userInfo } from './../data/user';

const Header = () => {

  return (
    <header className='sticky top-0 w-full flex items-center 
    pr-[16px] py-[8px] gap-3 bg-white z-50 border border-solid
    border-gray-400'>
        <HeaderLeft />
        <NavHeader />
        <div className="flex-1 flex items-center gap-3 justify-end">
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <CgMenuGridO size={25} />
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
           <AiOutlineMessage size={25} />
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <IoMdNotifications size={25} />
          </div>
          <div>
            <img src={userInfo.avatar} 
            alt="" className="w-[40px] h-[40px] object-cover rounded-full" />
          </div>
        </div>
    </header>
  )
}

export default Header