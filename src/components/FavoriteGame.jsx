import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { games } from '../data/games';

const FavoriteGame = () => {
    const [index, setIndex] = useState(0)
    const [move, setMove] = useState()
    const elementRef = useRef(123)
    useEffect(() => {
      function updateWidth(){
        if(elementRef.current){
          setMove(elementRef.current.offsetWidth)
        }
      }
      updateWidth()
      const addlisten = window.addEventListener('resize', updateWidth)
      return () => window.removeEventListener('resize',addlisten)
    }, [])
    let hiddenButtonLeft = false
    let hiddenButtonRight = false
    const cssButton = `w-[40px] h-[40px] rounded-full bg-white
              flex justify-center items-center cursor-pointer`
    if(index == 0){
      hiddenButtonLeft = true
    }else if(index == 1){
      hiddenButtonRight = true
    }
  return (
    <div className='relative '>
          <h4>Game chúng tôi yêu thích nhất</h4>
          <div className={` overflow-hidden `}>
            <div className={`flex duration-500 ease-linear 
            translate-x-[-${move*index}px]`}
            style={{transform: `translateX(-${move * index}px)`}}>
            {
              games.filter(game=> game.rate == 10).map((game, i) => <div ref={elementRef} key={i}
              className='shrink-0 rounded-md overflow-hidden px-1
              w-[25%] cursor-pointer hover:opacity-80'>
                <img src={game.img} alt="game"
                className='w-full h-[100px]  object-cover' />
                <div className='relative h-[80px]'>
                  <img src={game.img} alt="game"
                  className='w-full h-full blur-lg'  />
                  <div className='absolute inset-0 px-2 py-1'>
                    <h3 className='overflow-ellipsis whitespace-nowrap
                    overflow-x-hidden'>{game.name}</h3>
                    <p >{game.countPlayer} số người chơi</p>
                  </div>
                </div>
              </div>)
            }
            </div>
          </div>
            <button className={`${cssButton} ml-[-20px] ${hiddenButtonLeft && 'hidden'}
            absolute bottom-[50%] left-0 translate-y-[50%]`}
            onClick={() => setIndex(index-1)}>
              <IoIosArrowBack size={20} />
            </button>
            <button className={`${cssButton} ml-auto mr-[-20px] ${hiddenButtonRight && 'hidden'}
            absolute bottom-[50%] right-0 translate-y-[50%]`}
            onClick={() => setIndex(index+1)}><IoIosArrowForward /></button>
      </div>
  )
}

export default FavoriteGame