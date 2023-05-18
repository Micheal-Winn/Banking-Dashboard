import { accountList } from "@/data/Data";
import {
  Checkbox,
  Divider,
  MediaQuery,
  Pagination,
  Table,
} from "@mantine/core";
import React from "react";

const CustomerAccountListsTable = () => {
  const rows = accountList.map((account, i) => (
    <tr key={i}>
      <td scope="col" className="pl-16">
        <Checkbox
          // checked={selection.includes(row.id)}
          // onChange={() => toggleRow(row.id)}
          transitionDuration={0}
        />
      </td>
      <td>{account.name}</td>
      <td>{account.nrc}</td>
      <td>{account.phone}</td>
      <td>{account.accountNo}</td>
      <td>{account.amount}</td>
      <td>{account.accountType}</td>
      <td>{account.createdDate}</td>
      <td>{account.accountStatus}</td>
      <td>...</td>
    </tr>
  ));

  return (
    <section className="mt-4">
      <Table
        className="shadow-lg bg-white rounded-lg"
        verticalSpacing={"sm"}
        horizontalSpacing={"lg"}
        highlightOnHover
        fontSize={"xs"}
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
            <th>CustomerName</th>
            <th>NRC</th>
            <th>Phone NO</th>
            <th>Account No</th>
            <th>Amount</th>
            <th>Account Type</th>
            <th>Created Date</th>
            <th>Account Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Divider size="xs" />
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <div className=" w-[250px] ml-auto py-6">
          <Pagination total={5} size={"sm"} />
        </div>
      </MediaQuery>
      <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
        <div className=" w-[400px] ml-auto py-6">
          <Pagination total={5} size={"lg"} />
        </div>
      </MediaQuery>
    </section>
  );
};

export default CustomerAccountListsTable;
