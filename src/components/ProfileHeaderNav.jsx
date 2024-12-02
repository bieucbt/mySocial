import React, { useContext, useState } from 'react'
import { profileNav } from '../data/profileData'
import Li from './Li'
import { IoIosMore } from "react-icons/io";
import { ProfileContext } from '../pages/Profile';

const ProfileHeaderNav = () => {
  const {currentPage, setCurrentPage} = useContext(ProfileContext)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const value = {currentPage, setCurrentPage}
  return (
    <div className='flex items-center justify-between mr-1'>
      <ul className='flex items-center mt-2 ml-1'>
        {
          profileNav.map((item, i) => (
            <Li key={i} data={item} num={i == profileNav.length-1 ? null : i+1} value={value}
            showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
          ))
        }
      </ul>
      <div className='p-3 bg-[#e2e5e9] rounded-md cursor-pointer'><IoIosMore size={16} /></div>
    </div>
  )
}

export default ProfileHeaderNav