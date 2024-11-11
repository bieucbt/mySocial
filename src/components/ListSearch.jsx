import React, { useState } from 'react'
import { dataSearch } from '../data/dataSearch'

const ListSearch = ({hidden}) => {
    const [data, setData] = useState(dataSearch)
    const [childSeenter, setChildSeenter] = useState(false)
    function deleteData(id){
        const newdata = data.filter((data) => data.id !=id )
        console.log(newdata)
    }
  return (
    <div className={`w-full bg-white  duration-500 ease-linear
    ${!hidden ? 'hidden h-0' : 'animaiton-height-dataSearch'} `}>
        <div className='flex items-center justify-between pt-3'>
            <h5>Mới đây</h5>
            <p className='text-blue-300 cursor-pointer'>chỉnh sửa</p>
        </div>
        <div className='py-3'>
            {data.map(data => <div key={data.id} 
            className={`parent-delele-dataSearch flex items-center justify-between
            cursor-pointer mt-1 px-1 rounded-md ${childSeenter ? '' : 'hover:bg-gray-300' }`}
            >
                <div className='flex items-center gap-2'>
                    <img src={data.img} alt="search" 
                    className='w-[30px] h-[30px] object-cover rounded-full ' />
                    <div>
                        <h4 className='font-bold'>{data.name}</h4>
                        <p>{data.info}</p>
                    </div>
                </div>
                <div className='delele-dataSearch cursor-pointer hover:bg-slate-400
                px-2 py-1 rounded-full'
                onClick={() => deleteData(data.id)}
                onMouseOver={() => setChildSeenter(true)}
                onMouseLeave={() => setChildSeenter(false)}
                >x</div>
            </div>)}
        </div>
    </div>
  )
}

export default ListSearch