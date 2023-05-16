import React from "react";
import { Checkbox, Divider, MediaQuery, Table,Pagination } from "@mantine/core";
import { customerLists } from "@/data/Data";
import * as Avatar from "@radix-ui/react-avatar";
import EditDialog from "../utils/EditDialog";
import ModalDialog from "../utils/ModalDialog";

const CustomerListsTable = () => {
  const rows = customerLists.map((customer) => {
    return (
      <tr key={customer.id}>
        <td scope="col" className="pl-16">
          <Checkbox
            // checked={selection.includes(row.id)}
            // onChange={() => toggleRow(row.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          {" "}
          <div className="flex gap-1 items-center">
            <Avatar.Root className="bg-blackA3 inline-flex h-[35px] w-[35px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                delayMs={600}
              >
                CT
              </Avatar.Fallback>
            </Avatar.Root>
            <p className="font-semibold text-[0.65rem]">{customer.name}</p>
          </div>
        </td>
        <td>{customer.nrc}</td>
        <td>{customer.phone}</td>
        <td>{customer.email}</td>
        <td>{customer.Address}</td>
        <td>{customer.createdDate}</td>
        <td>
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
            Online
          </div>
        </td>
        <td>
          {/* <button className="text-blue-600 font-semibold">Edit User</button> */}
          <EditDialog/>
          {/* <ModalDialog/> */}
        </td>
      </tr>
    );
  });

  return (
    <section className="mt-4">
      <Table className="shadow-lg bg-white rounded-lg"  verticalSpacing={"sm"} horizontalSpacing={"lg"} highlightOnHover fontSize={"xs"}>
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
            <th>Email Address</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
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

export default CustomerListsTable;
