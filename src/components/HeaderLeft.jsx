import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaSearch, FaArrowLeft  
} from "react-icons/fa";
import ListSearch from "./ListSearch";
import { useNavigate } from "react-router-dom";

const HeaderLeft = () => {
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(()=>{
    const handleClickOutside = (e) => {
      if (inputRef.current && inputRef.current.contains(e.target) && hidden != false) {
        setHidden(true)
      }else{
        setHidden(false);
      }
    };
    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [hidden])

  return (
    <div className={`fixed w-[25%] top-0 pt-2 pb-1 max-w-[300px] pl-4
     ${hidden && 'bg-white rounded-md overflow-hidden shadow-2xl px-2'}`}
     ref={inputRef}>
      <div className="flex items-center">
        <div className=" w-[40px] animationParentMove">
          {
            hidden ? <div className=" p-2 hover:bg-gray-300 rounded-full 
            cursor-pointer duration-100 ease-linear"
            onClick={() => setHidden(false)}><FaArrowLeft size={15} color="black"
            className="w-full animationArrowMove" /></div> :  
            <FaFacebook size={40} color="black" className="cursor-pointer" 
            onClick={() => navigate('/')}/>
          }
        </div>
        <div className="relative border border-solid w-[200px] rounded-[30px] 
        overflow-hidden ml-3 flex-1 w-full">
          <FaSearch className={`${hidden && 'hidden-icon'} absolute left-[10px] 
            top-[50%] translate-y-[-50%] flex-1 animation-move-left`} size={20} color="black" />
          <input type="text" placeholder="Tìm kiếm trên Facebook"
          className={`${hidden ? ' pl-[10px]' : ' pl-[40px]'} w-full h-[40px]
          outline-none pr-[10px] flex-1 duration-500 ease-linear`}
          onFocus={()=>setHidden(true)} 
          />
        </div>
      </div>
      {hidden && <ListSearch />}
    </div>
  )
}

export default HeaderLeft