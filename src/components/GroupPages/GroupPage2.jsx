import React from 'react'
import GroupSuggestion from '../GroupSuggestion'
import { groupSuggest } from '../../data/groupSuggestData'

const GroupPage2 = () => {
  return (
    <div>
      <div className='pt-7'>
        <h3 className='text-[24px] font-bold'>Gợi ý khác</h3>
        <div className='grid grid-cols-3 gap-5 mt-3'>
          {groupSuggest.map((group, i) => <GroupSuggestion key={i} group={group} />)}
        </div>
      </div>
    </div>
  )
}

export default GroupPage2