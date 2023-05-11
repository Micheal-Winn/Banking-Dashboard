import { Indicator, Avatar, Group,ActionIcon } from '@mantine/core';

import {IconBellRinging,IconMessage} from "@tabler/icons-react"

export default function Noti() {
  return (
    <Group position="apart" className='mr-10 lg:gap-6 xl:gap-10 hidden sm:flex'>
    <Indicator label="4" size={16}>
     <ActionIcon variant='subtle'><IconBellRinging size={"2rem"}/></ActionIcon>
    </Indicator>
    <Indicator label="4" size={16}>
      <ActionIcon variant='subtle'><IconMessage size={"2rem"}/></ActionIcon>
      </Indicator>
  </Group>
  )
}