import { accountList } from "@/data/Data";
import {
  Checkbox,
  Divider,
  Group,
  MediaQuery,
  Modal,
  Pagination,
  Select,
  Table,
  TextInput,
  useMantineTheme,
  Text
} from "@mantine/core";
import React, { useState } from "react";
import Button from "../CustomerComponent/Button";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import CustomerDepositeModel from "./CustomerDepositeModel";

const CustomerAccountListsTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [statusOpened,setStatusOpened] = useState<boolean>(false);
  const [depositeAccountNo,setDepositeAccountNo] = useState<string | undefined>("")
  const theme = useMantineTheme();

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
      <td className="cursor-pointer text-blue-700"><button className="bg-blue-700 text-white rounded-2xl text-xs px-4 py-2 hover:bg-blue-600" onClick={()=>{
        setDepositeAccountNo(account.accountNo)
        setStatusOpened(!statusOpened)
      }}>{account?.accountStatus}</button></td>
      <td>...</td>
    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Text className="font-semibold text-lg tracking-wide text-blue-800">Create Bank Account</Text>}
        size="xl"
        padding="xl"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        classNames={{
          overlay: "bg-[#00000080]",
        }}
        centered
       radius={"md"}
      >
       <div  className="grid grid-cols-2 gap-x-8 gap-y-5">
       <Select data={["Saving Account", "Deposite Account"]} placeholder="Select Account Type"  label="Select Account"/>
        <TextInput label="Name" placeholder="Name"/>
        <TextInput label="Name" placeholder="Name"/>
       </div>
       <Group position="right" className="mt-6">
       <Button text="Create Account" bg='bg-blue-700' textColor='text-white' padding='px-8 py-3' />
       </Group>
        
      </Modal>

      <CustomerDepositeModel opened={statusOpened} close={()=>setStatusOpened(!statusOpened)} id={depositeAccountNo}/>


      <section className="mt-4">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-semibold my-3 text-gray-800">
            Account Lists
          </h2>
          <div>
            <Button
              handler={open}
              bg="bg-blue-700"
              textColor="text-white"
              text="Create Account"
              padding="px-5 py-2"
              icon={<IconPlus size={16} />}
            />
          </div>
        </div>
        <Table
          className="shadow-lg bg-white rounded-lg"
          verticalSpacing={"lg"}
          horizontalSpacing={"lg"}
          highlightOnHover
          fontSize={"sm"}
        >
          <thead>
            <tr className="uppercase bg-slate-200 text-center">
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
              <th className="text-center">Account Status</th>
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
            <Pagination total={5} size={"md"} />
          </div>
        </MediaQuery>
      </section>
    </>
  );
};

export default CustomerAccountListsTable;
