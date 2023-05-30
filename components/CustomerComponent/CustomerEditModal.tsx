import React, { useEffect } from "react";
import { Modal, TextInput,Text, Group } from "@mantine/core";
import { CustomerEditProps } from "@/Types";
import { useForm } from "@mantine/form";

const CustomerEditModal:React.FC<Props> = ({user,opened,onClose}) => {
    console.log("editUser",user)


    const editForm = useForm({
        initialValues: {
          name: user?.name,
          nrc: user.nrc,
          phone: user.phone,
          email: user.email,
          address: user.Address,
          createdDate: user.createdDate,        
          gender: user.gender,
          totalAccount: user.totalAccount,
        },
        validate: {
          name: (value) =>
            value.length < 3 ? "Name must be at least 3 characters long" : null,
          nrc: (value) =>
            value.length < 12 ? "NRC must be at least 12 characters long" : null,
          phone: (value) =>
            value.length < 11
              ? "Phone number must be at least 11 characters long"
              : null,
          email: (value) =>
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
              ? null
              : "please provide a valid email",
          address: (value) =>
            value.length < 3 ? "Address must be at least 3 characters long" : null,
          createdDate: (value) =>
            value.length < 3
              ? "Created date must be at least 3 characters long"
              : null,
          gender: (value) =>
            value.length < 3 ? "Gender must be at least 3 characters long" : null,
        },
      });

      useEffect(() => {
        editForm.setValues(user)
      },[user])
    
      const editFormHadler = (data: any) => {
        console.log("data", data);
        onClose()
        editForm.reset();
        
      };

  return (
    <Modal opened={opened} onClose={onClose} size={"xl"} centered title={<Text>Edit Customer</Text>}>
      <form onSubmit={editForm.onSubmit(editFormHadler)} className="px-2">
              <div className="grid grid-cols-2 gap-6">
                <TextInput
                  label={<h2 className="text-sm font-light">NAME</h2>}
                  {...editForm.getInputProps("name")}
                  disabled
                />
                <TextInput
                  label={<Text className="text-sm font-light">NRC</Text>}
                  {...editForm.getInputProps("nrc")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">PHONE NUMBER</h2>}
                  {...editForm.getInputProps("phone")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">EMAIL ADDRESS</h2>}
                  {...editForm.getInputProps("email")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">ADDRESS</h2>}
                  {...editForm.getInputProps("address")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">CREATED DATE</h2>}
                  {...editForm.getInputProps("createdDate")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">GENDER</h2>}
                  {...editForm.getInputProps("gender")}
                  disabled
                />
                <TextInput
                  label={<h2 className="text-sm font-light">TOTAL ACCOUNT</h2>}
                  {...editForm.getInputProps("totalAccount")}
                  disabled
                />
              </div>

              <Group position="right" className="mt-[25px] w-full">
                <button
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none border-none"
                >
                  Save changes
                </button>
              </Group>
            </form>

    </Modal>
  );
};

export default CustomerEditModal;

type Props = {
    user: CustomerEditProps;
    opened:boolean,
    onClose:()=>void
  };