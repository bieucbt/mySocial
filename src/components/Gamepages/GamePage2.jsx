import React from 'react'
import { notification } from '../../assets'

const GamePage2 = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src={notification} alt="" />
      <h1 className='text-[24px] font-bold'>Thông báo</h1>
      <p>Bạn hiện không có thông báo nào. Khi bạn chơi game hoặc
          khi người phát trực tiếp mà bạn theo dõi lên sóng, 
          các thông báo đó sẽ hiển thị ở đây.</p>
    </div>
  )
}

export default GamePage2