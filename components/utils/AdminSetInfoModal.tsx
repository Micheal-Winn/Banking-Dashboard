import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group,  Divider, TextInput ,useMantineTheme,Button, Text} from "@mantine/core";

import { useForm } from '@mantine/form';

const AdminSetInfoModal = () => {
  const form = useForm({
    initialValues: {
      name:"",
      email: '',
      phoneNo:"",
      department:"",
      position:"",
      role:"",
      managerName:"",
      managerPhone:"",
      address:"",
      city:"",
      township:"",
    },

    validate: {
      name:(value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? null : 'please provide a valid email'),
      phoneNo: (value) => (value.length < 10 ? 'Phone number must have at least 10 digits' : null),
      department: (value) => (value.length < 2 ? 'Department must have at least 2 letters' : null),
      position: (value) => (value.length < 2 ? 'Position must have at least 2 letters' : null),
      role: (value) => (value.length < 2 ? 'Role must have at least 2 letters' : null),
      managerName: (value) => (value.length < 2 ? 'Manager Name must have at least 2 letters' : null),
      managerPhone: (value) => (value.length < 10 ? 'Manager Phone must have at least 10 digits' : null),
      address: (value) => (value.length < 2 ? 'Address must have at least 2 letters' : null),
      city: (value) => (value.length < 2 ? 'City must have at least 2 letters' : null),
      township: (value) => (value.length < 2 ? 'Township must have at least 2 letters' : null),
    },
  });

  const [opened, { open, close }] = useDisclosure(true);
  const theme = useMantineTheme()
  const formHandler = (data:any)=>{console.log("data",data)}

  return (
    <Modal
      opened={opened}
      w={600}
      onClose={()=>{}}
      title="Account Information"
      centered
      transitionProps={{
        transition: "fade",
        duration: 600,
        timingFunction: "linear",
      }}
      size="xl"
      padding="xl"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 1,
        blur: 12,
      }}
      classNames={{
        overlay: "bg-[#00000080]",
      }}
      
    >
      <Divider size={"xs"} className="mb-4"/>
      <form className="grid grid-cols-2 gap-x-10 gap-y-5" onSubmit={form.onSubmit(formHandler)}>
        <TextInput
          label="FullName"
          placeholder="Enter your name"
          withAsterisk
          radius={"md"}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Phone No"
          placeholder="Enter your  phone number"
          {...form.getInputProps("phoneNo")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Department"
          placeholder="Enter your department"
          {...form.getInputProps("department")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Position"
          placeholder="Enter your position"
          {...form.getInputProps("position")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Role"
          placeholder="Enter your role"
          {...form.getInputProps("role")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Manager Name"
          placeholder="Enter your manager name"
          {...form.getInputProps("managerName")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Manager Phone No"
          placeholder="Enter your manager phone number"
          {...form.getInputProps("managerPhone")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Address"
          placeholder="Enter your address"
          {...form.getInputProps("address")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="City"
          placeholder="Enter your city"
          {...form.getInputProps("city")}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Township"
          placeholder="Enter your townships"
          {...form.getInputProps("township")}
          withAsterisk
          radius={"md"}
        />

      <Group position="right" className="mt-20">
        {/* <Button
          text="Save"
          bg="bg-blue-700"
          textColor="text-white"
          padding="px-8 py-2 rounded-md"
          disabled={true}
        /> */}
        <Button radius={"sm"} className="px-8 bg-blue-700" type="submit"><Text>Save</Text></Button>
      </Group>
      </form>
      
    </Modal>
  );
};

export default AdminSetInfoModal;
