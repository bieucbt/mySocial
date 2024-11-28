import React, { useState } from 'react'
import Sidebar from './../components/Sidebar';
import { GroupsOption } from '../data/option';
import GroupPage1 from './../components/GroupPage1';
import GroupPage2 from './../components/GroupPage2';
import GroupPage3 from './../components/GroupPage3';

const Group = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    <GroupPage1 />,
    <GroupPage2 />,
    <GroupPage3 />
  ]
  return (
    <div className=''>
      <Sidebar data={GroupsOption} setCurrentPage={setCurrentPage} 
      currentPage={currentPage} />
      <div className='ml-[30%] w-[70%] px-[5%]'>
        {
          pages[currentPage]
        }
      </div>
    </div>
  )
}

export default Group