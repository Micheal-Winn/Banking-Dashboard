import React from "react";
import InputInfo from "./InputInfo";
import Button from "./Button";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import CustomerField from "./CustomerField";

const NewCustomer = () => {
  const cutomerForm = useForm({
    initialValues: {
      fullName: "",
      nrc: "",
      phoneNo: "",
      email: "",
      city: "",
      township: "",
      address: "",
      // dob: Date.toString(),
      jobTitle: "",
      gender: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      nrc: (value) =>
        value.length < 12 ? "NRC must have at least 13 digits" : null,
      phoneNo: (value) =>
        value.length < 10 ? "Phone number must have at least 10 digits" : null,
      email: (value) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
          ? null
          : "please provide a valid email",
      city: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      township: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      address: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      // dob:(value)=>
      // value.
      jobTitle: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <section>
      <form className="p-8 w-[80%] mx-auto bg-white rounded-lg mt-14 shadow-lg" onSubmit={cutomerForm.onSubmit((values) => console.log(values))}>
        <div className="grid grid-cols-2 gap-x-14 gap-y-8">
          <CustomerField
            label="Full Name"
            placeholder="Enter your full name"
            form={cutomerForm.getInputProps("fullName")}
          />
          <CustomerField
          label="NRC"
          placeholder="Enter your NRC"
          form={cutomerForm.getInputProps("nrc")}
          />
          <CustomerField
            label="Phone Number"
            placeholder="Enter your phone number"
            form={cutomerForm.getInputProps("phoneNo")}
          />
          <CustomerField
            label="Email"
            placeholder="Enter your email"
            form={cutomerForm.getInputProps("email")}
          />
          <CustomerField
            label="City"
            placeholder="Enter your city"
            form={cutomerForm.getInputProps("city")}
          />
          <CustomerField
            label="Township"
            placeholder="Enter your township"
            form={cutomerForm.getInputProps("township")}
          />
          <CustomerField
            label="Address"
            placeholder="Enter your address"
            form={cutomerForm.getInputProps("address")}
          />
          <CustomerField
            label="Job Title"
            placeholder="Enter your job title"
            form={cutomerForm.getInputProps("jobTitle")}
          />
          <DateInput
            label={<span className="font-medium">Date of Birth</span>}
            placeholder="Enter your date of birth"
            radius={"md"}
            size="md"
            required
            valueFormat="DD/MM/YYYY"
            {...cutomerForm.getInputProps("dob")}
          />
          <Select
            label={<span className="font-medium">Gender</span>}
            size="md"
            radius={"md"}
            data={["Male", "Female", "Others"]}
            placeholder="Select your gender"
            {...cutomerForm.getInputProps("gender")}
            required
          />
        </div>
        <div className="flex ml-auto justify-between w-[300px] px-6 mt-10">
          <Button
            text="Cancel"
            bg="bg-white"
            textColor="text-blue-700"
            border="border-[1px] border-blue-700"
            padding="px-8 py-2 rounded-md"
          />
          <Button
            type="submit"
            text="Create"
            bg="bg-blue-700"
            textColor="text-white"
            padding="px-8 py-2 rounded-md"
          />
        </div>
      </form>
    </section>
  );
};

export default NewCustomer;
