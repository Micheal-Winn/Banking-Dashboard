import { Avatar, Box, Button, Group, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface status{
  setActiveStatus:(str:string)=> void
}

const UserProfileButton:React.FC<status> = ({setActiveStatus}) => {
  return (
    <Link href={"/profile"} onClick={()=>setActiveStatus("profile")}>
      <Group position="apart" className="hover:bg-gray-100 py-1 px-1 rounded-md">
        <Group>
          <Avatar
            alt="profile"
            radius={"xl"}
            src={
              "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <div>
            <Text size="sm" weight={500}>
              Thant Zin Win
            </Text>

            <Text color="dimmed" size="xs">
              thantzinwin@gamil.com
            </Text>
          </div>
        </Group>
        <IconChevronRight size={"1rem"} stroke={1.5}/>
      </Group>
    </Link>
  );
};

export default UserProfileButton;
