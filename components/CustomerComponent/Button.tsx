import React, { ReactNode } from 'react'
import {IconPlus, TablerIconsProps} from "@tabler/icons-react"

interface BtnProps{
    text:string,
    icon:ReactNode
}

const Button:React.FC<BtnProps> = ({text,icon}) => {
  return (
    <button className='flex items-center gap-2 bg-blue-500 text-white px-5 text-sm rounded-md py-2 font-semibold'>
        {icon}
        <p>{text}</p>
    </button>
  )
}

export default Button