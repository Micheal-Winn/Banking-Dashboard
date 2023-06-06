import React from "react";
import { columns } from "./column";
import { CustomerDataTable } from "./data-table";
import { CustomerTableData } from "@/data/Data";

const CustomerTableShad = () => {
  return <CustomerDataTable columns={columns} data={CustomerTableData} />;
};

export default CustomerTableShad;
