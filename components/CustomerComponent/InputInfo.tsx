import React from "react";
import { TextInput,Select } from "@mantine/core";
import { newCusData } from "@/data/Data";
import { DateInput } from "@mantine/dates";

const InputInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-x-14 gap-y-8">
      {/* <TextInput label="Full Name" withAsterisk placeholder='Please enter your full name'/> */}
      {newCusData.map((info, i) => (
        <TextInput
          key={i}
          withAsterisk
          placeholder={info.placeholder}
          label={<span className="font-medium">{info.name}</span>}
          radius={"md"} 
          size="md"
          required
        />
      ))}
      <DateInput label={<span className="font-medium">Date of Birth</span>} placeholder="Enter your date of birth" radius={"md"} size="md" required valueFormat="DD/MM/YYYY"/>
      <Select label={<span className="font-medium">Gender</span>} size="md" radius={"md"} data={["Male", "Female", "Others"]} required/>
    </div>
  );
};

export default InputInfo;
