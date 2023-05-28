import React from "react";
import { Box, Button, Group, Text } from "@mantine/core";
import * as Avatar from "@radix-ui/react-avatar";

const ProfilePhoto = () => {
  return (
    <section className=" lg:pt-6 sm:pl-2 xl:pl-14 w-full xl:pr-1 2xl:pr-4">
     <Box className="flex  lg:flex-col gap-[2.5rem] sm:gap-16 md:gap-2 ">
      <Box className="">
      <Text className="text-xs sm:text-sm xl:text-lg mb-2 mt-7 lg:mt-0 font-semibold tracking-wide">Update Profile</Text>
      <Text color="dimmed" className="text-[0.55rem] sm:text-xs xl:text-sm mt-4 xl:mt-0 ">
        Profile of at least Size <span className="text-black">300x300</span>
      </Text>
      <Text color="dimmed" className="mt-2 xl:mt-1 text-[0.55rem] sm:text-xs xl:text-sm ">
        Gifs work too. <span className="text-black">Max 5mb</span>
      </Text>
      </Box>
      
      <Avatar.Root className=" sm:ml-8 my-4 bg-blackA3 inline-flex h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px]  md:w-[150px] xl:h-[135px] xl:w-[135px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          alt="Profile Photo"
          src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        >
          PT
        </Avatar.Fallback>
      </Avatar.Root>
     </Box>
      
      <Text className="text-xs sm:text-sm xl:text-lg mb-2 font-semibold tracking-wide mt-2">Update Cover</Text>
      <Text  color="dimmed" className="text-[0.65rem] sm:text-xs xl:text-sm">
        Cover of at least Size <span className="text-black">1170x920</span>
      </Text>
      <Avatar.Root className="bg-blackA3 inline-flex h-[200px] w-full lg:w-full xl:w-full 2xl:w-full  select-none items-center justify-center overflow-hidden  align-middle mt-2 rounded-md">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          className="h-full w-full rounded-[inherit] object-cover"
          alt="Cover Photo"
        />
        <Avatar.Fallback
          className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
          delayMs={600}
        >
          BP
        </Avatar.Fallback>
      </Avatar.Root>
     
    </section>
  );
};

export default ProfilePhoto;
