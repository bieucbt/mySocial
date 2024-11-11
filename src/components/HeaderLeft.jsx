import { useState } from "react";
import { FaFacebook, FaSearch, FaArrowLeft  
} from "react-icons/fa";
import ListSearch from "./ListSearch";

const HeaderLeft = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className={`fixed w-[25%] top-0 pt-2 max-w-[300px] pl-4
     ${hidden && 'bg-white rounded-md overflow-hidden shadow-2xl px-2'}`}>
      <div className="flex items-center">
        <div className=" w-[40px] animationParentMove">
          {
            hidden ? <FaArrowLeft size={15} 
            className="w-full animationArrowMove" /> : <FaFacebook size={40}  />
          }
        </div>
        <div className="relative border border-solid w-[200px] rounded-[30px] 
        overflow-hidden ml-3 flex-1 w-full">
          <FaSearch className={`${hidden && 'hidden-icon'} absolute left-[10px] 
            top-[50%] translate-y-[-50%] flex-1 animation-move-left`} size={20} />
          <input type="text" placeholder="Tìm kiếm trên Facebook"
          className={`${hidden ? ' pl-[10px]' : ' pl-[40px]'} w-full h-[40px]
          outline-none pr-[10px] flex-1 duration-1000 ease-linear`}
          onFocus={()=>setHidden(true)} />
        </div>
      </div>
      <ListSearch hidden={hidden} />
    </div>
  )
}

export default HeaderLeft