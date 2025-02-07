import NavHeader from './NavHeader'
import HeaderLeft from "./HeaderLeft";
import './header.css'
import HeaderRight from "./HeaderRight";
import { memo } from 'react';

const Header = () => {

  return (
    <header className='sticky top-0 w-full flex items-center 
    pr-[16px] py-[8px] gap-3 bg-white z-50 border border-solid
    shadow-2xl'>
      <HeaderLeft />
      <NavHeader />
      <HeaderRight />
    </header>
  )
}

export default memo(Header)