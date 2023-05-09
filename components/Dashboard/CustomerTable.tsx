import React, { useState } from "react";
import {
  Table,
  Checkbox,
  createStyles,
  Group,
  ActionIcon,
  Divider,
  Pagination,
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
        className={cx({ [classes.rowSelected]: selected })}
        style={{ paddingLeft: 2 }}
      >
        <td style={{ padding: "0.7rem 0.7rem 0.7rem 2rem" }}>
          <Checkbox
            checked={selection.includes(row.id)}
            onChange={() => toggleRow(row.id)}
            transitionDuration={0}
          />
        </td>
        <td className="text-center">{row.id}</td>
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
            <p>{row.name}</p>
          </div>
        </td>
        <td>{row.nrc}</td>
        <td>{row.email}</td>
        <td>{row.createdDate}</td>
        <td>
          <p className="text-center rounded-3xl overflow-hidden bg-blue-700 text-white  font-semibold py-2">
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
    <section className="mt-10 mr-14 mb-6 shadow-lg bg-white rounded-lg">
      <Table miw={800} verticalSpacing={"sm"} pl={2}>
        <thead>
          <tr>
            <th style={{ padding: "0.7rem 0.7rem 0.7rem 2rem" }}>
              <Checkbox
                onChange={toggleAll}
                indeterminate={
                  selection.length > 0 && selection.length !== tableData.length
                }
                checked={selection.length === tableData.length}
                transitionDuration={0}
              />
            </th>
            <th style={{ textAlign: "center" }} className="font-semibold">
              CustomerId
            </th>
            <th className="font-semibold">Customer Name</th>
            <th className="font-semibold">NRC</th>
            <th className="font-semibold">Email</th>
            <th className="font-semibold">Created Date</th>
            <th style={{ textAlign: "center" }} className="font-semibold">
              Status
            </th>
            <th style={{ textAlign: "center" }} className="font-semibold">
              Total Account
            </th>
            <th>
              {selection.length >= 2 && (
                <ActionIcon>
                  <IconTrash color="red" />
                </ActionIcon>
              )}
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Divider size="xs" />
      <div className="w-[300px] ml-auto py-6">
        <Pagination total={5}/>
      </div>
    </section>
  );
};

export default CustomerTable;
