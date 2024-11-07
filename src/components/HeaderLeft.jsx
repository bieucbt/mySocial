import { useState } from "react";
import { FaFacebook, FaSearch, FaArrowLeft  
} from "react-icons/fa";

const HeaderLeft = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="flex-1 flex items-center">
      {
        hidden ? <FaArrowLeft size={30}/> : <FaFacebook size={40}  />
      }
      <div className="relative border border-solid w-[200px] rounded-[30px] 
      overflow-hidden ml-3 flex-1">
        <FaSearch className={`${hidden && 'hidden-icon'} absolute left-[10px] 
          top-[50%] translate-y-[-50%] flex-1`} size={20} />
        <input type="text" placeholder="Tìm kiếm trên Facebook"
        className={`${hidden ? ' pl-[10px]' : ' pl-[40px]'} w-full h-[40px]
        outline-none pr-[10px] flex-1`}
        onFocus={()=>setHidden(true)}
        onBlur={()=>setHidden(false)} />
      </div>
    </div>
  )
}

export default HeaderLeft