import React from "react";
import Layout from "../utils/layout";
import { Box, Divider, Group, Text, TextInput,Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import ProfileInput from "./ProfileInput";
import ProfilePhoto from "./ProfilePhoto";

const ProfileInfo = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      department: "",
      position: "",
      role: "",
      managerName: "",
      managerPhone: "",
      address: "",
      city: "",
      township: "",
      profileUrl:"",
      backgroundUrl:"",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
          ? null
          : "please provide a valid email",
      phoneNo: (value) =>
        value.length < 10 ? "Phone number must have at least 10 digits" : null,
      department: (value) =>
        value.length < 2 ? "Department must have at least 2 letters" : null,
      position: (value) =>
        value.length < 2 ? "Position must have at least 2 letters" : null,
      role: (value) =>
        value.length < 2 ? "Role must have at least 2 letters" : null,
      managerName: (value) =>
        value.length < 2 ? "Manager Name must have at least 2 letters" : null,
      managerPhone: (value) =>
        value.length < 10 ? "Manager Phone must have at least 10 digits" : null,
      address: (value) =>
        value.length < 2 ? "Address must have at least 2 letters" : null,
      city: (value) =>
        value.length < 2 ? "City must have at least 2 letters" : null,
      township: (value) =>
        value.length < 2 ? "Township must have at least 2 letters" : null,
    },
  });

  return (
    <main className="bg-slate-50 h-screen">
      <Layout>
        <form className="pt-6 pl-3 pr-5 pb-10 mt-4 mr-20 shadow-slate-300 shadow-lg mx-3 bg-white rounded-lg">
          <Text className="font-semibold text-2xl">Profile Information</Text>
          <Box className="flex gap-4">
            <Box className="w-[70%]">
              <Divider size={"xs"} className="my-3" />
              <section className=" ml-8">
                <Box className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <ProfileInput form={form} label="FullName" prop="name" placeholder="Enter your Full Name"/>
                  <ProfileInput form={form} label="Email" prop="email" placeholder="Enter your Email Address"/>
                  <ProfileInput form={form} label="Phone Number" prop="phoneNo" placeholder="Enter your Phone Number"/>
                </Box>
                <Text className="my-4 text-black font-semibold tracking-wide text-base">Personal Work</Text>
                <Box className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <ProfileInput form={form} label="Department" prop="department" placeholder="Enter your Department"/>
                  <ProfileInput form={form} label="Position" prop="position" placeholder="Enter your Position"/>
                  <ProfileInput form={form} label="Role" prop="role" placeholder="Enter your Role"/>
                  <ProfileInput form={form} label="Manager Name" prop="managerName" placeholder="Enter your Manager Name"/>
                  <ProfileInput form={form} label="Manager Phone Number" prop="mangerPhone" placeholder="Enter your Manager Phone Number"/>
                </Box>
                <Text className="my-4 text-black font-semibold tracking-wide text-base">Personal Address</Text>
                <Box className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <ProfileInput form={form} label="Address" prop="address" placeholder="Enter your Address" />
                  <ProfileInput form={form} label="City" prop="city" placeholder="Enter your City"/>
                  <ProfileInput form={form} label="Township" prop="township" placeholder="Enter your Township"/>
                </Box>
              </section>
            </Box>
            <Box className="w-[30%]">
              <ProfilePhoto/>
            </Box>
          </Box>
          <Group  position="right" className="mt-4">
            <Button className="bg-blue-700 hover:bg-blue-600">Save Profile</Button>
          </Group>
        </form>
      </Layout>
    </main>
  );
};

export default ProfileInfo;
