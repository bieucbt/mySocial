import React from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'


const Menu = ({show}) => {
  return (
    <div className={`absolute right-0 top-full bg-gray-200
    p-5 rounded-2xl ${show == 1 ? '' : 'hidden'}`} >
        <h3 className='text-[24px] font-bole'>Menu</h3>
        <div className='mt-2 bg-white min-w-[650px] h-[80vh] flex
        overflow-y-scroll bg-slate-200 gap-4 bg-transparent'>
          <MenuLeft />
          <MenuRight />
        </div>
    </div>
  )
}

export default Menu