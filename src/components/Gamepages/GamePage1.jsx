import React, { useEffect } from 'react'
import FavoriteGame from '../FavoriteGame';
import ListGames from '../ListGames';
const GamePage1 = () => {
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div>
      <FavoriteGame />
      <ListGames />
    </div>
  )
}

export default GamePage1