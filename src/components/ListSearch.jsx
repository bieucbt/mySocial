import React, { useState } from 'react'
import { dataSearch } from '../data/dataSearch'

const ListSearch = () => {
    const [childSeenter, setChildSeenter] = useState(false)
    const [data, setData] = useState(dataSearch)
    function deleteData(e,id){
        e.stopPropagation()
        setData(prev =>prev.filter(item => item.id !=id))
    }
  return (
    <div className={`w-full bg-white  duration-500 ease-linear `}>
        {
            data.length == 0 ? <h4 className='pt-5 pb-2'>Không có tìm kiếm nào gần đây</h4> : <>
            <div className='flex items-center justify-between pt-3'>
                <h5>Mới đây</h5>
                <p className='text-blue-300 cursor-pointer'>chỉnh sửa</p>
            </div>
            <div className='py-3'>
                {
                    data.map(data => <div key={data.id} 
                className={`parent-delele-dataSearch flex items-center justify-between
                cursor-pointer mt-1 px-1 rounded-md ${childSeenter ? '' : 'hover:bg-gray-300' }`}
                >
                    <div className='flex items-center gap-2 max-w-[80%]'>
                        <img src={data.img} alt="search" 
                        className='w-[30px] h-[30px] object-cover rounded-full ' />
                        <div>
                            <h4 className='font-bold whitespace-break-spaces overflow-hidden'>{data.name}</h4>
                            <p>{data.info}</p>
                        </div>
                    </div>
                    <div className='delele-dataSearch cursor-pointer hover:bg-slate-400
                    px-2  rounded-full flex items-center justify-center'
                    onClick={(e) => deleteData(e,data.id)}
                    onMouseOver={() => setChildSeenter(true)}
                    onMouseLeave={() => setChildSeenter(false)}
                    >x</div>
                </div>)
                }
            </div>
            </>
        }
        
    </div>
  )
}

export default ListSearch