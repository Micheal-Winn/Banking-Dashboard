import React, { useState } from 'react'
import { SibebarLists } from '@/data/Data'
import { Box, Group, NavLink ,Text, ThemeIcon, UnstyledButton,useMantineTheme} from '@mantine/core'
import Link from 'next/link'
import { IconGauge,IconUser,IconUsersGroup,IconReportAnalytics, IconChevronRight ,IconChevronLeft} from '@tabler/icons-react'

interface status{
  activeStatus : string,
  setActiveStatus:(str:string)=> void
}

const NavLinkGroup:React.FC<status> = ({activeStatus,setActiveStatus}) => {



  return (
    <section className='flex flex-col'>
      {SibebarLists.map((list)=>(
          <Box key={list.id} className='overflow-hidden rounded-md'>
          <NavLink  active={list.id === activeStatus} variant="filled" label={<Link href={`${list.path}`}>
          <Group spacing={"sm"}   className='rounded-md' p={4} onClick={()=>setActiveStatus(list.id)}>
          {list.leftIcon}<Text>{list.name}</Text>
        </Group>
          </Link>}
        rightSection={list.icon }
        >
            {
              list.nested !== undefined &&
              list.nested.map((nestedLink)=>(
                <div key={nestedLink.id} className=' border-gray-300 rounded-md overflow-hidden'>
                  <Link href={nestedLink.path} className=''>
                    <NavLink label={nestedLink.name}
                    className="font-semibold text-gray-600"
                    onClick={()=>{
                      setActiveStatus(nestedLink.id)
                      
                    }}
                    active={nestedLink.id === activeStatus}
                    variant='filled'
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