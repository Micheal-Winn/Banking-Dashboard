import React from 'react'
import Searchbar from './Searchbar'
import Noti from './Noti'
import { Burger,Drawer ,MediaQuery,NavLink,Text} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { mobileLists } from '@/data/Data';
import Link from 'next/link';

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return (
    <section className='flex p-3 justify-between items-center sticky backdrop-blur-lg top-0 z-50'>
        <h2 className='sm:text-3xl font-bold'>Dashboard</h2>
        <Searchbar/>
        <Noti/>
        <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
          <Burger opened={opened} onClick={toggle} aria-label={label} />
        </MediaQuery>

        {/** Mobile NavLists */}
        <Drawer
          opened={opened}
          onClose={toggle}
          title={<Text>Pages</Text>}
          size={"xs"}
          overlayProps={{opacity:0.5,blur:4}}
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <div>
            {mobileLists.map((list)=>(
              <NavLink key={list.id} label={list.name} childrenOffset={28} rightSection={list.icon}>
                {list.nested !== undefined && (
                  list.nested.map((nestLink)=>(
                    <NavLink key={nestLink.id} label={nestLink.name}/>
                  ))
                )}
              </NavLink>
            ))}
          </div>
        </Drawer>
    </section>
  )
}

export default Header