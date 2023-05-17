import React from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Divider,Text,TextInput } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

// to add state when data is completed

const EditDialog = () => {
  return (
   
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-blue-600 font-semibold">Edit User</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-400 bg-opacity-70 z-40">
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="">Edit User</Dialog.Title>
            <Divider className="my-3" />

            <form className="grid grid-cols-2 gap-6">
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<Text className="text-sm font-light">Email</Text>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
                <TextInput label={<h2 className="text-sm font-light">Name</h2>} value={"Thant Zin Win"} disabled/>
            </form>


            <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-blue-600 text-white hover:bg-blue-700  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none border-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex  appearance-none items-center justify-center   outline-none focus:outline-none"
                aria-label="Close"
              >
                <IconX size={15}/>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditDialog;
