import {
  Group,
  Modal,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import React, { ReactNode } from "react";
import Button from "../CustomerComponent/Button";

const CustomerDepositeModel: React.FC<StatusProps> = ({
  opened,
  close,
  id,
}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Text className="font-semibold text-lg tracking-wide text-blue-800">
          Deposite Form
        </Text>
      }
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
      centered
      radius={"md"}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        <TextInput label="Account No" value={id} disabled />
        <TextInput label="Account Type" placeholder="Saving" />
        <TextInput label="Amount" placeholder="0.00" />
      </div>
      <Group position="right" className="mt-6">
        <Button
          text="Deposite"
          bg="bg-blue-700"
          textColor="text-white"
          padding="px-8 py-3"
        />
      </Group>
    </Modal>
  );
};

export default CustomerDepositeModel;

type StatusProps = {
  opened: boolean;
  close: () => void;
  id: string | undefined;
};
