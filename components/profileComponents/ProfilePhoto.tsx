import React from "react";
import { Button, Group, Text } from "@mantine/core";
import * as Avatar from "@radix-ui/react-avatar";

const ProfilePhoto = () => {
  return (
    <section className="pt-6 pl-14 w-full">
      <Text className="text-lg mb-2 font-semibold tracking-wide">Update Profile</Text>
      <Text color="dimmed">
        Profile of at least Size <span className="text-black">300x300</span>
      </Text>
      <Text color="dimmed" className="mt-1">
        Gifs work too. <span className="text-black">Max 5mb</span>
      </Text>
      
      <Avatar.Root className="ml-8 my-4 bg-blackA3 inline-flex h-[125px] w-[125px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
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
      
      <Text className="text-lg mb-2 font-semibold tracking-wide">Update Cover</Text>
      <Text  color="dimmed">
        Cover of at least Size <span className="text-black">1170x920</span>
      </Text>
      <Avatar.Root className="bg-blackA3 inline-flex h-[200px] w-[300px] select-none items-center justify-center overflow-hidden  align-middle mt-2 rounded-md">
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
