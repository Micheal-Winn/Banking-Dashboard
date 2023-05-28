import React from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import { Text, TextInput } from "@mantine/core";

interface FormValues {
  name?: string;
}

interface LabelProps{
    label:string,
    prop:string,
    form:any,
    placeholder:string
}

const ProfileInput:React.FC<LabelProps> = (
{
    form,
    label,
    prop,
    placeholder

}
) => {
  return (
    <TextInput
      label={<Text color="dimmed" className="font-semibold text-[0.8rem] tracking-wide">{label}</Text>}
      placeholder={placeholder}
      {...form.getInputProps(`${prop}`)}
      radius={"md"}
      variant="filled"
    />
  );
};

export default ProfileInput;
