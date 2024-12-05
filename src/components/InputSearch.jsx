import React from 'react'
import { FaSearch } from 'react-icons/fa'

const InputSearch = ({setHidden, hidden, placeholder}) => {
  return (
    <div className="relative border border-solid w-[200px] rounded-[30px] 
    overflow-hidden ml-3 flex-1 w-full">
      <FaSearch className={`${hidden && 'hidden-icon'} absolute left-[10px] 
        top-[50%] translate-y-[-50%] flex-1 animation-move-left`} size={20} color="black" />
      <input type="text" placeholder={placeholder}
      className={`${hidden ? ' pl-[10px]' : ' pl-[40px]'} w-full h-[40px]
      outline-none pr-[10px] flex-1 duration-500 ease-linear`}
      onClick={()=>{
        setHidden && setHidden(true)}} />
    </div>
  )
}

export default InputSearch