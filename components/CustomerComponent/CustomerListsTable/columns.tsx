import { ColumnDef } from "@tanstack/react-table";
import { statuses } from "@/components/TableData/data";
import { DataTableColumnHeader } from "@/components/TableComponents/data-table-column-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  profile: string;
  name: string;
  nrc: string;
  email: string;
  createdDate: string;
  totalAccount: number;
  Address: string;
  phone: string;
  status: "Online" | "Offline";
  gender: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <p>{row.getValue("name")}</p>,
  },
  {
    accessorKey: "nrc",
    header: "NRC",
  },
  {
    accessorKey: "email",
    header: ({column})=> (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({row})=> <p>{row.getValue("email")}</p>
  }
  ,
  {
    accessorKey: "createdDate",
    header: "Created Date",
  },
  {
    accessorKey: "totalAccount",
    header: "Total Account",
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
              className="mr-2 h-4"
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
    cell: ({ row }) => <p className="text-xs">{row.getValue("gender")}</p>,
  },
];
