import { ReactNode } from "react"

interface Link {
    link:string,
    subLinks:Array<string>

}

interface NavLink{
    label:string
    links:Array<Link>
}

interface UserCardListInfo{
    total:number,
    name:string,
    bgColor:string
}

interface TableData{
    id?:string,
    profile?:string,
    name:string,
    nrc:string,
    email?:string,
    createdDate:string,
    totalAccount?:number,
    status?:string,
    Address?:string,
    phone?:string,
    accountNo?:string,
    amount?:number,
    accountType?:string,
    accountStatus?:string,
    // date:""

}

interface AccountTableData{
    id:string,
    type:string,
    amount:number
}

interface nested{
    id:string,
    name:string,
    path:string,
}

interface MobileNavLists{
    id:string,
    name:string,
    path:string,
    icon?:TablerIconsProps,
    nested?:Array<nested>
}

interface NewCusProps{
    name:string,
    placeholder:string,
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    photo?:string
}

