import React, { memo, useEffect, useState } from 'react'
import { navLinks } from '../data/linkHeader'
import { Link, useLocation } from 'react-router-dom'

const NavHeader = () => {
  const [link, setLink] = useState(navLinks[0].href)
  const location = useLocation()
  useEffect(() => {
    setLink(location.pathname)
  }, [location])
  return (
    <nav className="flex-[2] grid grid-cols-5 ml-[25%]">
      {
        navLinks.map((item, i) => {
          const active = link == item.href
          return <div key={i} className={`${active && `border-b-4
            border-blue-500`}`}
            title={item.title}>
            <Link to={item.href}
              className={`hover:bg-gray-300 rounded-xl block h-full
                  flex items-center justify-center `}
              onClick={() => setLink(item.href)}><item.icon size={25}
                className={active && 'text-blue-500'} /></Link>
          </div>
        })
      }
    </nav>
  )
}

export default memo(NavHeader)