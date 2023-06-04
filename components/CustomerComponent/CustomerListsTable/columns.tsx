import { ColumnDef } from "@tanstack/react-table";
import { statuses } from "@/components/TableData/data";
import { DataTableColumnHeader } from "@/components/TableComponents/data-table-column-header";
import { DataForTable } from "@/Types";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<DataForTable>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <p className="">{row.getValue("name")}</p>,
  },
  {
    accessorKey: "nrc",
    header: "NRC",
  },
  {
    accessorKey: "email",
    header: ({column})=> (
      <DataTableColumnHeader column={column} title="Email" className=""/>
    ),
    cell: ({row})=> <p className="2xl:text-xs">{row.getValue("email")}</p>
  }
  ,
  {
    accessorKey: "createdDate",
    header: "Created Date",
  },
  {
    accessorKey: "totalAccount",
    header: "Account",
    cell:({row})=> <p className="pl-4">{row.getValue("totalAccount")}</p>
  },
  {
    accessorKey: "Address",
    header: ({column})=> (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({row})=> <p>{row.getValue("Address")}</p>
  }
  ,
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.label === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon
              color={status.value === "online" ? "green" : "red"}
              className={`mr-1 h-3 ${status.value === "online" ? "text-green-500" : "text-red-500"}`}
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => <p className="text-xs 2xl:text-xs">{row.getValue("gender")}</p>,
  },
];
