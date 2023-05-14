import { AccountTableData, MobileNavLists, NavLink, TableData, UserCardListInfo } from "@/Types";
import {IconBellRinging,IconMessage,IconChevronRight} from "@tabler/icons-react"


export const NavbarLinks:Array<NavLink> = [
    {
        label:"Main Menu",
        links:[
            {
                link:"Dashboard",
                subLinks:[]
            },
            {
                link:"Dashboard",
                subLinks:[]
            },
            {
                link:"Dashboard",
                subLinks:[]
            },
            {
                link:"Dashboard",
                subLinks:[]
            },
            {
                link:"Dashboard",
                subLinks:[]
            },
        ]
    },
    {
        label:"Others",
        links:[
            {
                link:"Contacts",
                subLinks:[]
            },
            {
                link:"Messages",
                subLinks:[]
            },
            {
                link:"Settings",
                subLinks:[]
            },
        ]
    },
]


export const AdminCards:Array<UserCardListInfo> = [
    {
        total:9,
        name:"Created Customers",
        bgColor:'bg-blue-700'
    },
    {
        total:3,
        name:"Total Account",
        bgColor:'bg-[#FE9520]'
    },
    {
        total:10252000,
        name:"Total Deposit Amounts",
        bgColor:'bg-[#BE1FE5]'
    },
    {
        total:3758000,
        name:"Total Transaction Amounts",
        bgColor:'bg-[#20C394]'
    },
];


export const tableData: Array<TableData> = [
	{
		id: "CUS000001",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant Zin Win",
		nrc: "5/MaMaNa(N)12345",
		email: "test1@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "2",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test2@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "3",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test3@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "4",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test4@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "5",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test5@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "6",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test6@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "7",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test7@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
	{
		id: "8",
		profile:
			"https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Thant",
		nrc: "5/MaMaNa(N)12345",
		email: "test8@gmail.com",
		createdDate: "12/12/2021",
		totalAccount: 2,
	},
];


export const accountTableData:Array<AccountTableData> = [
	{
		id:"ACCC00004",
		type:"Saving",
		amount:205.221
	},
	{
		id:"ACCC00004",
		type:"Saving",
		amount:205.221
	},
	{
		id:"ACCC00004",
		type:"Saving",
		amount:205.221
	},
	{
		id:"ACCC00004",
		type:"Saving",
		amount:205.221
	},
	{
		id:"ACCC00004",
		type:"Saving",
		amount:205.221
	},
];

export const mobileLists : Array<MobileNavLists> = [
	{
		id:"1",
		name:"Dashboard",
		path:"/dashboard"
	},
	{
		id:"2",
		name:"Customer Accounts",
		path:"/",
		icon:<IconChevronRight size="1rem" stroke={1.5}/>,
		nested:[
			{
				id:"cus1",
				name:"Customer List",
				path:"/customer"
			},
			{
				id:"cus2",
				name:"Create Customer",
				path:"/createCustomer"
			}
		]
	},
	{
		id:"3",
		name:"Customer Accounts",
		path:"/transaction",
		icon:<IconChevronRight size="1rem" stroke={1.5}/>,
		nested:[
			{
				id:"acc1",
				name:"Account List",
				path:"/account-list"
			}
		]
	},
	{
		id:"4",
		name:"Transaction Reports",
		path:"/transaction-reports",
		icon:<IconChevronRight size="1rem" stroke={1.5}/>,
		nested:[
			{
				id:"tran1",
				name:"All Reports",
				path:"/account-list"
			},
			{
				id:"tran2",
				name:"Transfer Report",
				path:"/account-list"
			},
			{
				id:"tran3",
				name:"Customer Inqury",
				path:"/account-list"
			},
		]
	}
	,
	// {
	// 	id:"5",
	// 	name:"Notification",
	// 	path:"/noti",
	// 	icon:<IconBellRinging size="1rem" stroke={1.5}/>
	// },
	// {
	// 	id:"6",
	// 	name:"Message",
	// 	path:"/message",
	// 	icon:<IconMessage size="1rem" stroke={1.5}/>
	// },
	
]