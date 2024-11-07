import React, { useEffect, useRef, useState } from 'react'
import {navLinks} from '../data/linkHeader'
import { Link } from 'react-router-dom'

const NavHeader = () => {
  const [link, setLink] = useState('/')
  return (
    <nav className="flex-[2] grid grid-cols-5">
        {
            navLinks.map((item, i) => <div key={i} className={`${link == item.href && `border-b-4
            border-blue-500`}`}>
              <Link to={item.href} 
                className={` hover:bg-gray-300 rounded-xl block h-full
                  flex items-center justify-center `}
                onClick={()=>setLink(item.href)}><item.icon size={25} /></Link>
              </div>)
        }
    </nav>
  )
}

export default NavHeader