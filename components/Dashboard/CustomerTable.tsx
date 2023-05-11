import React, { useState } from "react";
import {
  Table,
  Checkbox,
  createStyles,
  Group,
  ActionIcon,
  Divider,
  Pagination,
  ScrollArea,
  rem
} from "@mantine/core";
import * as Avatar from "@radix-ui/react-avatar";
import { IconDots, IconUserEdit, IconTrash } from "@tabler/icons-react";
import * as Popover from "@radix-ui/react-popover";

import { tableData } from "@/data/Data";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  tr:{
    fontWeight:"bold",

    [theme.fn.smallerThan("lg")]:{
      fontSize:"0.65rem"
    }
  }
}));

const CustomerTable = () => {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState<Array<string>>([]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === tableData.length ? [] : tableData.map((row) => row.id)
    );

  const rows = tableData.map((row) => {
    const selected = selection.includes(row.id);

    return (
      <tr
        key={row.id}
        style={{ paddingLeft: 2 }}
        className=""
      >
        {/* <td style={{ padding: "0.7rem 0.7rem 0.7rem 1rem" }}>
          <Checkbox
            checked={selection.includes(row.id)}
            onChange={() => toggleRow(row.id)}
            transitionDuration={0}
          />
        </td> */}
        <td className="text-center font-bold text-xs">{row.id}</td>
        <td>
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
            <p className="font-semibold">{row.name}</p>
          </div>
        </td>
        <td className="font-semibold">{row.nrc}</td>
        {/* <td className="font-semibold">{row.email}</td> */}
        <td className="font-semibold">{row.createdDate}</td>
        <td>
          <p className="text-center flex items-center justify-center  rounded-2xl overflow-hidden border-[1px] border-blue-700 text-blue-700  font-semibold sm:py-1 lg:py-[0.3rem] 2xl:py-2 sm:px-2  lg:px-3 xl:px-0 2xl:px-1 2xl:text-[0.9rem] xl:text-[0.8rem] lg:text-[0.6rem]">
            Active
          </p>
        </td>
        <td className="text-center font-bold">{row.totalAccount}</td>
        <td className="cursor-pointer">
          <Popover.Root>
            <Popover.Trigger asChild>
              <ActionIcon>
                <IconDots />
              </ActionIcon>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="rounded  flex flex-col  bg-white  shadow-2xl overflow-hidden">
                <div className="flex gap-4 py-2 cursor-pointer px-6 hover:bg-slate-300">
                  <IconUserEdit />
                  <p className="text-blue-400">Edit</p>
                </div>
                <div className="flex gap-4 cursor-pointer py-2 px-6 hover:bg-slate-200">
                  <IconTrash color="red" />
                  <p className="text-red-500">Delete</p>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </td>
      </tr>
    );
  });

  return (
    <section className="mt-10 sm:mr-5 md:mr-6 lg:mr-7 xl:mr-10 2xl:mr-14 mb-6 shadow-lg bg-white rounded-lg">
      <ScrollArea w={{}}  type="always">
      <Table miw={800} verticalSpacing={"sm"} className="2xl:pl-4 xl:pl-0 " style={{fontWeight:"bold"}} fontSize={'sm'}>
        <thead >
          <tr className="text-[0.65rem]">
            {/* <th style={{ padding: "0.7rem 0.7rem 0.7rem 1rem"}}>
              <Checkbox
                onChange={toggleAll}
                indeterminate={
                  selection.length > 0 && selection.length !== tableData.length
                }
                checked={selection.length === tableData.length}
                transitionDuration={0}
              />
            </th> */}
            <th style={{ textAlign: "center" }}  className="font-bold ">
              {/* <p className="xl:hidden block">ID</p> */}
              <p className="">Customer ID</p>
            </th>
            <th  className={"font-bold"}>Customer Name</th>
            <th className="font-bold">NRC</th>
            {/* <th className="font-bold ">Email</th> */}
            <th className="font-bold ">Created Date</th>
            <th style={{ textAlign: "center" }} className="font-bold">
              Status
            </th>
            <th style={{ textAlign: "center" }} className="font-bold ">
              Total Account
            </th>
            <th>
              {/* {selection.length >= 2 && (
                <ActionIcon>
                  <IconTrash color="red" />
                </ActionIcon>
              )} */}
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      </ScrollArea>
      <Divider size="xs" />
      <div className=" w-[400px] ml-auto py-6">
        <Pagination total={5} size={"lg"}/>
      </div>
    </section>
  );
};

export default CustomerTable;
