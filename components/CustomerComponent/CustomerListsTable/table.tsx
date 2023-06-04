import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
 
 
export default  function DemoPage() {
  const data:Payment[] = [{
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Thant Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  },
  {
    id: "CUS000001",
    profile:
      "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Zin Win",
    nrc: "5/MaMaNa(N)12345",
    email: "test1@gmail.com",
    createdDate: "12/12/2021",
    totalAccount: 2,
    Address: "Yangon",
    phone: "0987654321111",
    status: "Online",
    gender:"Male"
  }]
 
  return (
    <div className=" py-10 overflow-x-scroll">
      <DataTable columns={columns} data={data} />
    </div>
  )
}