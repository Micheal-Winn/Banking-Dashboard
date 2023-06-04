import {  columns } from "./columns"
import { DataTable } from "./data-table"
import { customerLists } from "@/data/Data"
 
 
export default  function DemoPage() {

 
  return (
    <div className="pt-2">
      <DataTable columns={columns} data={customerLists} />
    </div>
  )
}