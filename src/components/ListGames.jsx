import React, { useEffect, useRef, useState } from 'react'
import { games } from '../data/games'

const ListGames = () => {
    
    const [filterGame, setFilterGame] = useState(games)
    const set = new Set()
    games.forEach(game => set.add(game.type))
    const typeGame = [...set]
    function handleFilterGame(value){
       const game = games.filter((item) => item.type == value)
        if(game.length <= 0) setFilterGame(games)
        else ( setFilterGame(game))
    }
  return (
    <div>
        <div className='flex items-center justify-between mt-5 mb-2'>
            <h3>Tất cả game</h3>
            <div className='flex items-center gap-5'>
                <div >
                    <span className='mr-2'>Hạng mục:</span>
                    <select onInput={e => handleFilterGame(e.target.value)} className='rounded'>
                        <option value='all'>all</option>
                        {
                            typeGame.map((type, i) => (
                            <option key={i} value={type}>{type}</option>))
                        }
                    </select>
                </div>
                <div >
                    <span className='mr-2'>Sắp xếp theo:</span>
                    <select className='rounded'>
                        <option value="name">Theo tên</option>
                        <option value="rate">Đánh giá</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-y-2'>
            {
                filterGame.map((game, i) => <div key={i}
                className='ml-2 rounded-md overflow-hidden
                flex flex-col cursor-pointer hover:opacity-80'>
                    <img src={game.img} alt="game"
                    className='h-[150px] w-full' />
                    <div className='bg-blue-500 text-white flex-1 p-2'>
                        <p className='whitespace-nowrap overflow-ellipsis overflow-hidden'>{game.name}</p>
                        <span className='px-3 rounded-md text-black bg-white'>{game.type}</span>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default ListGames