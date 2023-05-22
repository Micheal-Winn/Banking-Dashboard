import React, { ReactNode } from 'react'
import {IconPlus, TablerIconsProps} from "@tabler/icons-react"


interface BtnProps{
    text:string,
    icon?:ReactNode,
    bg:string,
    textColor:string,
    border?:string,
    padding?:string,
    handler?:()=>void,
    disabled?:boolean
}

const Button:React.FC<BtnProps> = ({text,icon,bg,textColor,border,padding,handler,disabled}) => {
  return (
    <button onClick={handler} className={`flex items-center gap-2 ${bg} ${textColor} ${border} ${padding} text-sm font-semibold disabled:bg-gray-400`}  aria-label="Customise options" disabled={disabled}>
        {icon}
        <p>{text}</p>
    </button>
  )
}

export default Button