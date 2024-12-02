import React, { createContext, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePage1 from './../components/ProfilePages/ProfilePage1';
import ProfilePage3 from './../components/ProfilePages/ProfilePage3';
import ProfilePage2 from './../components/ProfilePages/ProfilePage2';
import ProfilePage4 from './../components/ProfilePages/ProfilePage4';
import ProfilePage5 from './../components/ProfilePages/ProfilePage5';
import ProfilePage6 from './../components/ProfilePages/ProfilePage6';


export const ProfileContext = createContext(null)
const Profile = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const value = {currentPage, setCurrentPage}
  const pages = [
    <ProfilePage1 />,
    <ProfilePage2 />,
    <ProfilePage3 />,
    <ProfilePage4 />,
    <ProfilePage5 />,
    <ProfilePage6 />
  ]
 
  return (
    <div>
      <ProfileContext.Provider value={value}>
        <ProfileHeader setCurrentPage={setCurrentPage} currentPage={currentPage} data={data} />
        <div>
          {
            currentPage && pages[currentPage-1] 
          }
        </div>
      </ProfileContext.Provider>
    </div>
  )
}

export default Profile