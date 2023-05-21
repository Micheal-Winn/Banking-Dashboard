import { datePickerHeadData, datePickerTableRowsData } from "@/data/Data";
import { MediaQuery, Pagination, Table } from "@mantine/core";
import React from "react";

const TransactionFilterTable = () => {
  const rows = datePickerTableRowsData.map((data, i) => (
    <tr key={i} className="text-center">
      <td>{i + 1}</td>
      <td>{data.amount}</td>
      <td>{data.receiverNo}</td>
      <td>{data.amount}</td>
      <td>{data.date}</td>
      <td>...</td>
    </tr>
  ));
  return (
    <>
      <Table
        className="shadow-lg bg-white rounded-lg overflow-hidden"
        verticalSpacing={"lg"}
        horizontalSpacing={"lg"}
        highlightOnHover
        fontSize={"sm"}
      >
        <thead>
          <tr className="uppercase bg-slate-200">
            {datePickerHeadData.map((label, i) => (
              <th key={i} scope="col" style={{ textAlign: "center" }}>
                {label}
              </th>
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
    </>
  );
};

export default TransactionFilterTable;
