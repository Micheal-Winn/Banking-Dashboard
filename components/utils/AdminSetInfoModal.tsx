import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group,  Divider, TextInput ,useMantineTheme} from "@mantine/core";
import Button from "../CustomerComponent/Button";

const AdminSetInfoModal = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const theme = useMantineTheme()

  return (
    <Modal
      opened={opened}
      w={600}
      onClose={close}
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
        opacity: 0.55,
        blur: 3,
      }}
      classNames={{
        overlay: "bg-[#00000080]",
      }}
      
    >
      <Divider size={"xs"} className="mb-4"/>
      <section className="grid grid-cols-2 gap-x-10 gap-y-5">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={"Thant Zin Win"}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          value={"thantzinwindev@gmail.com"}
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Phone No"
          placeholder="Enter your phone number"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Department"
          placeholder="Enter your department"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Position"
          placeholder="Enter your position"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Role"
          placeholder="Enter your role"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Manager Name"
          placeholder="Enter your manager name"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Manager Phone No"
          placeholder="Enter your manager phone number"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Address"
          placeholder="Enter your address"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="City"
          placeholder="Enter your city"
          withAsterisk
          radius={"md"}
        />
        <TextInput
          label="Township"
          placeholder="Enter your townships"
          withAsterisk
          radius={"md"}
        />
      </section>
      <Group position="right" className="mt-8">
        <Button
          text="Save"
          bg="bg-blue-700"
          textColor="text-white"
          padding="px-8 py-2 rounded-md"
          disabled={true}
        />
      </Group>
    </Modal>
  );
};

export default AdminSetInfoModal;
