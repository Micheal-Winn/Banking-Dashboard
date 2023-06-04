import React from "react";
import { Breadcrumbs, Anchor ,Text} from "@mantine/core";
import Link from "next/link";
import Layout from "../../components/utils/layout";
import NewCustomer from "@/components/CustomerComponent/NewCustomer";

const links = [
  {
    title: "Customer Lists",
    href: "/customer",
  },
  {
    title: "Create",
    href: "/customer/create",
  },
].map((link, i) => (
  <Link href={link.href} key={i} className="hover:text-blue-700 hover:underline font-semibold text-gray-800 text-2xl mt-3">
    {link.title}
  </Link>
));

const CreateCustomer = () => {
  return (
    <Layout>
      <section className="pl-8 pr-8 pt-8">
      <Breadcrumbs className="flex items-center" separator={<Text className="text-2xl mt-3">/</Text>}>{links}</Breadcrumbs>
      <NewCustomer/>
      </section>
    </Layout>   
  );
};

export default CreateCustomer;
