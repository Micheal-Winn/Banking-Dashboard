import React, { useMemo, useState } from "react";
import {
  Checkbox,
  Divider,
  MediaQuery,
  Table,
  Pagination,
  ScrollArea,
} from "@mantine/core";
import { customerLists } from "@/data/Data";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import * as Avatar from "@radix-ui/react-avatar";
// import EditDialog from "../utils/EditDialog";
import ModalDialog from "../utils/ModalDialog";
import { CustomerEditProps } from "@/Types";
import CustomerEditModal from "./CustomerEditModal";

const CustomerListsTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const xsScreen = useMediaQuery("(min-width:36em)");
  const smScreen = useMediaQuery("(min-width:40em)");
  const mdScreen = useMediaQuery("(min-width:48em)");
  const lgScreen = useMediaQuery("(min-width:64em)");
  const xlScreen = useMediaQuery("(min-width:75em)");
  const xl2Screen = useMediaQuery("(min-width:88em)");

  const editUser = (user: any) => {
    console.log("user", user);
    setEditingUser(user);
    open();
  };

  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const rows = customerLists.map((customer) => {
    return (
      <tr key={customer.id}>
        {/*<td scope="col" className="pl-16">*/}
        {/*  <Checkbox*/}
        {/*    // checked={selection.includes(row.id)}*/}
        {/*    // onChange={() => toggleRow(row.id)}*/}
        {/*    transitionDuration={0}*/}
        {/*  />*/}
        {/*</td>*/}
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
        <td>{customer.gender}</td>
        <td>
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
            Online
          </div>
        </td>
        <td>
          <button
            onClick={() => {
              editUser(customer);
            }}
            className="text-blue-600 font-semibold"
          >
            Edit User
          </button>
          {/* <EditDialog user={customer}/> */}
          {/* <ModalDialog/> */}
        </td>
      </tr>
    );
  });

  return (
    <div className="mt-4 shadow-xl bg-white rounded-lg w-full h-full">
        <Table
          className="rounded-lg overflow-hidden"
          verticalSpacing={"sm"}
          horizontalSpacing={"lg"}
          highlightOnHover
          fontSize={"xs"}
        >
          <thead>
            <tr className="uppercase bg-slate-200">
              {/*<th scope="col" className="pl-16">*/}
              {/*  <Checkbox*/}
              {/*    onChange={() => {}}*/}
              {/*    // indeterminate={*/}
              {/*    //   selection.length > 0 && selection.length !== tableData.length*/}
              {/*    // }*/}
              {/*    // checked={selection.length === tableData.length}*/}
              {/*    transitionDuration={0}*/}
              {/*  />*/}
              {/*</th>*/}
              <th>CustomerName</th>
              <th>NRC</th>
              <th>Phone NO</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>Created Date</th>
              <th>Gender</th>
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
     
      {editingUser ? (
      <CustomerEditModal opened={opened} onClose={close} user={editingUser}/>
    ): null}
    </div>
  );
};

export default CustomerListsTable;
