import Button from "@/components/CustomerComponent/Button";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import CustomerListsTable from "@/components/CustomerComponent/CustomerListsTable";
import DownloadDropdown from "@/components/CustomerComponent/DownloadDropdown";
import Layout from "../../components/utils/layout";
import { useRouter } from "next/router";
import { Checkbox, ScrollArea, Table } from "@mantine/core";
import { customerLists } from "@/data/Data";
import * as Avatar from "@radix-ui/react-avatar";
import Example from "@/components/CustomerComponent/MantineCustomerTable";
import DemoPage from "@/components/CustomerComponent/CustomerListsTable/table";

const CustomerLists = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const editUser = (user: any) => {
    console.log("user", user);
    setEditingUser(user);
    open();
  };

  return (
      <Layout>
        <section className="pl-4 pr-3 bg-white">
          <DemoPage />
        </section>
      </Layout>
  );
};

export default CustomerLists;
