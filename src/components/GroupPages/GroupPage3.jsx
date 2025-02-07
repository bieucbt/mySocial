import React, { useEffect } from 'react'
import { groupSuggest } from '../../data/groupSuggestData';
import GroupFlowing from '../GroupFlowing';

const GroupPage3 = () => {

  useEffect(() => {
    scrollTo({ top: 0 })
  }, [])
  return (
    <div className=''>
      <div className='flex items-center justify-between pt-5'>
        <p className='font-bold'>Tất cả các nhóm bạn đã tham gia ({groupSuggest.length})</p>
        <p className='text-[#0064D1] text-[14px]'>Sắp xếp</p>
      </div>
      <div className='grid grid-cols-3 mt-3 cursor-pointer flex-1 gap-4'>
        {
          groupSuggest.map((group, i) => <GroupFlowing data={group} key={i} />)
        }
      </div>
    </div>
  )
}

export default GroupPage3