import Button from "@/components/CustomerComponent/Button";
import Header from "@/components/Header/Header";
import React from "react";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import CustomerListsTable from "@/components/CustomerComponent/CustomerListsTable";
import DownloadDropdown from "@/components/CustomerComponent/DownloadDropdown";
import Layout from "./layout";

const index = () => {
  return (
    <Layout>
       <section className="pl-8 pr-8 pt-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-semibold mt-3 text-gray-800">
            Customer Lists
          </h2>
          <div className="flex items-center gap-3">
            <Button text="Create Customer" icon={<IconPlus size={16} />} />
            <DownloadDropdown/>
          </div>
        </div>
        <CustomerListsTable/>
      </section>
    </Layout>
  );
};

export default index;
