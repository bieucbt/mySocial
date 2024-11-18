import React, { useEffect, useState } from 'react'



const Test = () => {
    const [data, setData] = useState(() => {
        const num = 3
        return num
    })

   function handleCLick(){
        setData(prev => prev + 1)
   }

  return (
    <div className='w-[400px] mx-auto my-[100px]'>
        <div>{data}</div>
        <button onClick={handleCLick}>click me</button>
    </div>
  )
}

export default Test