import React, { ReactNode } from 'react'
import {IconPlus, TablerIconsProps} from "@tabler/icons-react"


interface BtnProps{
    text:string,
    icon?:ReactNode,
    bg:string,
    textColor:string,
    border?:string,
    padding?:string,
    handler?:()=>void
}

const Button:React.FC<BtnProps> = ({text,icon,bg,textColor,border,padding,handler}) => {
  return (
    <button onClick={handler} className={`flex items-center gap-2 ${bg} ${textColor} ${border} ${padding} text-sm font-semibold`}  aria-label="Customise options">
        {icon}
        <p>{text}</p>
    </button>
  )
}

export default Button