import React, { useState } from 'react'
import { SibebarLists } from '@/data/Data'
import { Box, Group, NavLink ,Text, ThemeIcon, UnstyledButton,useMantineTheme} from '@mantine/core'
import Link from 'next/link'
import { IconGauge,IconUser,IconUsersGroup,IconReportAnalytics, IconChevronRight ,IconChevronLeft} from '@tabler/icons-react'


const NavLinkGroup = () => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState( false);
  const [active, setActive] = useState("1");
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
  return (
    <section className='flex flex-col'>
      {SibebarLists.map((list)=>(
          <Box key={list.id} className='overflow-hidden rounded-md'>
          <NavLink  active={list.id === active} variant="filled" label={<Link href={`${list.path}`}>
          <Group spacing={"sm"}   className='rounded-md' p={4} onClick={()=>setActive(list.id)}>
          {list.leftIcon}<Text>{list.name}</Text>
        </Group>
          </Link>}
        rightSection={list.icon }
        >
            {
              list.nested !== undefined &&
              list.nested.map((nestedLink)=>(
                <div key={nestedLink.id} className='border-l-[1px] border-gray-300 '>
                  <Link href={nestedLink.path}>
                    <NavLink label={nestedLink.name}
                    className="font-semibold text-gray-600"
                    />
                  </Link>
                </div>
              ))
            }
        </NavLink>
        </Box>
      ))}

    </section>
  )
}

export default NavLinkGroup