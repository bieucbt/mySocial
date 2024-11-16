import React from 'react'
import { dataHeaderRight } from '../data/dataHeaderRight'
import List from './List'

const MenuRight = () => {
  return (
    <div className='flex-1 sticky top-0 bg-white rounded-lg p-2'>
        <div>
            <h3 className='text-[20px] font-bold'>Tạo</h3>
            <div>
                {
                    dataHeaderRight.map((item, i) => <div key={i} 
                    className='mt-2'><List data={item} type={1} /></div>)
                }
            </div>
        </div>
    </div>
  )
}

export default MenuRight