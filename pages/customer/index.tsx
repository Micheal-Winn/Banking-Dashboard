import Button from "@/components/CustomerComponent/Button";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import CustomerListsTable from "@/components/CustomerComponent/CustomerListsTable";
import DownloadDropdown from "@/components/CustomerComponent/DownloadDropdown";
import Layout from "../../components/utils/layout";
import { useRouter } from "next/router";
import {  Checkbox, ScrollArea, Table } from "@mantine/core";
import { customerLists } from "@/data/Data";
import * as Avatar from "@radix-ui/react-avatar";
import Example from "@/components/CustomerComponent/MantineCustomerTable";
import DemoPage from "@/components/CustomerComponent/CustomerListsTable/table";

const CustomerLists = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const editUser = (user: any) => {
    console.log("user", user);
    setEditingUser(user);
    open();
  };




  return (
    
      
       <Layout>
       <section className="pl-4 pr-3 overflow-hidden bg-white">
       <div className="flex justify-between items-center w-full" >
          <h2 className="text-2xl font-semibold mt-3 text-gray-800">
            Customer Lists
          </h2>
          <div className="flex items-center gap-3">
            <Button
              bg="bg-blue-700"
              textColor="text-white"
              text="Create Customer"
              padding="px-5 py-2 rounded-md"
              icon={<IconPlus size={16} />}
              handler={()=> router.push('/customer/create')}
            />
            <DownloadDropdown />
          </div>
          
        </div>
        <DemoPage/>
       </section>
      
        
       </Layout>
     
    
  );
};

export default CustomerLists;
{/* <Layout>
       <div className="pt-8 pr-8 pl-6 pb-6 h-full">
       <div className="flex justify-between items-center w-full " >
          <h2 className="text-2xl font-semibold mt-3 text-gray-800">
            Customer Lists
          </h2>
          <div className="flex items-center gap-3">
            <Button
              bg="bg-blue-700"
              textColor="text-white"
              text="Create Customer"
              padding="px-5 py-2 rounded-md"
              icon={<IconPlus size={16} />}
              handler={()=> router.push('/customer/create')}
            />
            <DownloadDropdown />
          </div>
        </div>
        <CustomerListsTable />
       </div>
       </Layout> */}