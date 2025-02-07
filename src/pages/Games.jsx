import React, { useEffect, useState } from 'react'
import Sidebar from './../components/Sidebar';
import { GamesOption } from '../data/option';
import GamePage1 from './../components/Gamepages/GamePage1';
import GamePage2 from './../components/Gamepages/GamePage2';

const Games = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    <GamePage1 />,
    <GamePage2 />
  ]

  return (
    <div className='pb-9'>
      <Sidebar data={GamesOption} setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
      <div className='ml-[30%] w-[70%] px-5'>
        {
          pages[currentPage]
        }
      </div>
    </div>
  )
}

export default Games