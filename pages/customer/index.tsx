import Button from "@/components/CustomerComponent/Button";
import Header from "@/components/Header/Header";
import React from "react";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import CustomerListsTable from "@/components/CustomerComponent/CustomerListsTable";
import DownloadDropdown from "@/components/CustomerComponent/DownloadDropdown";
import Layout from "../../components/utils/layout";
import { useRouter } from "next/router";

const CustomerLists = () => {
  const router = useRouter()
  return (
    <Layout>
      <section className="pl-8 pr-8 pt-8">
        <div className="flex justify-between items-center w-full">
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
      </section>
    </Layout>
  );
};

export default CustomerLists;
