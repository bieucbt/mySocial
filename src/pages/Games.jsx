import React from 'react'
import Sidebar from './../components/Sidebar';
import FavoriteGame from '../components/FavoriteGame';
import ListGames from '../components/ListGames';
import { GamesOption } from '../data/option';

const Games = () => {
  return (
    <div className='pb-9'>
      <Sidebar data={GamesOption}/>
      <div className='ml-[30%] w-[70%] px-5'>
        <FavoriteGame />
        <ListGames />
      </div>
    </div>
  )
}

export default Games