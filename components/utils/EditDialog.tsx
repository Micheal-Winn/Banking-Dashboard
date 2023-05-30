// import React from "react";

// import * as Dialog from "@radix-ui/react-dialog";
// import { Divider, Group, TabProps, Text, TextInput } from "@mantine/core";
// import { IconX } from "@tabler/icons-react";
// import { useForm } from "@mantine/form";

// // to add state when data is completed
// // to use useMemo not to render unnecessary rendering
// const EditDialog: React.FC<Props> = ({ user }) => {
//   console.log("render");

//   const editForm = useForm({
//     initialValues: {
//       name: user.name,
//       nrc: user.nrc,
//       phone: user.phone,
//       email: user.email,
//       address: user.address,
//       createdDate: user.createdDate,
//       gender: user.gender,
//       totalAccount: user.totalAccount,
//     },
//     validate: {
//       name: (value) =>
//         value.length < 3 ? "Name must be at least 3 characters long" : null,
//       nrc: (value) =>
//         value.length < 12 ? "NRC must be at least 12 characters long" : null,
//       phone: (value) =>
//         value.length < 11
//           ? "Phone number must be at least 11 characters long"
//           : null,
//       email: (value) =>
//         /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
//           ? null
//           : "please provide a valid email",
//       address: (value) =>
//         value.length < 3 ? "Address must be at least 3 characters long" : null,
//       createdDate: (value) =>
//         value.length < 3
//           ? "Created date must be at least 3 characters long"
//           : null,
//       gender: (value) =>
//         value.length < 3 ? "Gender must be at least 3 characters long" : null,
//     },
//   });

//   const editFormHadler = (data: any) => {
//     console.log("data", data);
//   };

//   return (
//     <Dialog.Root>
//       <Dialog.Trigger asChild>
//         <button className="text-blue-600 font-semibold">Edit User</button>
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-400 bg-opacity-70 z-40">
//           <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
//             <Dialog.Title className="">Edit User</Dialog.Title>
//             <Divider className="my-3" />

//             <form onSubmit={editForm.onSubmit(editFormHadler)}>
//               <div className="grid grid-cols-2 gap-6">
//                 <TextInput
//                   label={<h2 className="text-sm font-light">NAME</h2>}
//                   {...editForm.getInputProps("name")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<Text className="text-sm font-light">NRC</Text>}
//                   {...editForm.getInputProps("nrc")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">PHONE NUMBER</h2>}
//                   {...editForm.getInputProps("phone")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">EMAIL ADDRESS</h2>}
//                   {...editForm.getInputProps("email")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">ADDRESS</h2>}
//                   {...editForm.getInputProps("address")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">CREATED DATE</h2>}
//                   {...editForm.getInputProps("createdDate")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">GENDER</h2>}
//                   {...editForm.getInputProps("gender")}
//                   disabled
//                 />
//                 <TextInput
//                   label={<h2 className="text-sm font-light">TOTAL ACCOUNT</h2>}
//                   {...editForm.getInputProps("totalAccount")}
//                   disabled
//                 />
//               </div>

//               <Group position="right" className="mt-[25px] w-full">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white hover:bg-blue-700  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:outline-none border-none"
//                 >
//                   Save changes
//                 </button>
//               </Group>
//             </form>

//             <Dialog.Close asChild>
//               <button
//                 className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex  appearance-none items-center justify-center   outline-none focus:outline-none"
//                 aria-label="Close"
//               >
//                 <IconX size={15} />
//               </button>
//             </Dialog.Close>
//           </Dialog.Content>
//         </Dialog.Overlay>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default EditDialog;

// type Props = {
//   user: Partial<TabProps>;
// };
