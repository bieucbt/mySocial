import { memo, useEffect, useRef, useState } from "react";
import {
  FaFacebook, FaSearch, FaArrowLeft
} from "react-icons/fa";
import ListSearch from "./ListSearch";
import { useNavigate } from "react-router-dom";
import { navLinks } from './../data/linkHeader';
import InputSearch from "./InputSearch";

const HeaderLeft = () => {
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && inputRef.current.contains(e.target) && hidden != false) {
        setHidden(true)
      } else {
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
                onClick={() => navigate(navLinks[0].href)} />
          }
        </div>
        <InputSearch hidden={hidden} setHidden={setHidden} placeholder='Tìm kiếm trên Facebook' />
      </div>
      {hidden && <ListSearch />}
    </div>
  )
}

export default memo(HeaderLeft)