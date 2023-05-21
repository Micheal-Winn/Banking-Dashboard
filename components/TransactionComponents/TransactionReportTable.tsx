import { transactionReportTableHeadData, transactionReportTableRowsData } from "@/data/Data";
import { Checkbox, Divider, Input, MediaQuery, Pagination, Table } from "@mantine/core";
import React from "react";
import Searchbar from "../Dashboard/Searchbar";
import { IconSearch } from "@tabler/icons-react";

const TransactionReportTable = () => {

    const rows = transactionReportTableRowsData.map((data,i)=> <tr key={i} className="text-center">
        <td scope="col" className="pl-16"><Checkbox
          // checked={selection.includes(row.id)}
          // onChange={() => toggleRow(row.id)}
          transitionDuration={0}
        /></td>
        <td>{data.id}</td>
        <td>{data.accountNo}</td>
        <td>{data.amount}</td>
        <td>{data.flash}</td>
        <td>{data.type}</td>
        <td>{data.date}</td>
        <td>...</td>
    </tr>)

  return (
    <section className="mt-4 pl-8 pr-8 pt-8">
      <div className="flex justify-between items-center w-full my-3">
          <h2 className="text-2xl font-semibold  text-gray-800">
            Account Lists
          </h2>
          <div className="w-[250px]">
            <Input icon={<IconSearch size={16} stroke={1.5}/>} radius={"xl"} placeholder="Search"/>
          </div>
        </div>
      <Table className="shadow-lg bg-white rounded-lg overflow-hidden"
          verticalSpacing={"lg"}
          horizontalSpacing={"lg"}
          highlightOnHover
          fontSize={"sm"}
          >
        <thead>
          <tr className="uppercase bg-slate-200">
            <th scope="col" className="pl-16">
              <Checkbox
                onChange={() => {}}
                // indeterminate={
                //   selection.length > 0 && selection.length !== tableData.length
                // }
                // checked={selection.length === tableData.length}
                transitionDuration={0}
              />
            </th>
            {transactionReportTableHeadData.map((label, i) => (
              <th key={i} scope="col" style={{textAlign:"center"}}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <div className=" w-[250px] ml-auto py-6">
            <Pagination total={5} size={"sm"} />
          </div>
        </MediaQuery>
        <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
          <div className=" w-[400px] ml-auto py-6">
            <Pagination total={5} size={"md"} />
          </div>
        </MediaQuery>
    </section>
  );
};

export default TransactionReportTable;
