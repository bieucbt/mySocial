import { memo } from "react"


const List = ({ data, type }) => {
    return (
        <div>
            {
                Array.isArray(data) && <ul>
                    {
                        data.map((item, i) => <li key={i}
                            className='flex items-center gap-2
                inline-block hover:bg-gray-200 cursor-pointer
                w-full px-1 py-2 rounded-md'>
                            {
                                type == 1 ? <item.img size={20} /> :
                                    <img src={item.img} alt="avatar friend"
                                        className='w-[40px] h-[40px] object-cover rounded-full shrink-0' />
                            }
                            <span>{item.name}</span>
                        </li>)
                    }
                </ul>
            }
        </div>
    )
}

export default memo(List)