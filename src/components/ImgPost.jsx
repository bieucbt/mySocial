import React from 'react'
import './imgPost.css'

const ImgPost = ({data}) => {
    let cssImg = ' w-full h-full object-cover'
    let cssDiv = 'grid-cols-2 '
   if(data.length == 1){ 
        cssImg='w-full col-span-2'
    }
    else if(data.length == 3){
        cssDiv+=`grid-row-2`
    }
    else if(data.length == 4){
    }else if(data.length >= 5){
        cssDiv=`grid grid-cols-6  grid-rows-2`
    }
  return (
    <div className={`grid divImg ${cssDiv} gap-1 max-h-[500px]`}>
       {
            data.map((img, i) => <img key={i} src={img} 
            className={`
            ${i==0 && data.length==1 && 'row-span-2 h-full object-contain' || ''}
            ${i==0 && data.length==2 && 'row-span-2' || ''} 
            ${i==1 && data.length==2 && 'row-span-2' || ''} 
            ${i==0 && data.length==3 && 'row-span-2 h-full' || ''} 
            ${i==0 && data.length==5 && 'col-span-3' || ''}
            ${i==1 && data.length==5 && 'col-span-3' || ''}
            ${i>1 && data.length==5 && 'col-span-2' || ''}
            ${data.length==4 && 'object-contain' || ''}
            ${cssImg}`} />)
       }
    </div>
  )
}

export default ImgPost