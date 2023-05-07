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