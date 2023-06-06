import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { customerLists } from "@/data/Data";

export default function DemoPage() {
  return <DataTable columns={columns} data={customerLists} />;
}
