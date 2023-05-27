import React from 'react'
import { Divider, Menu, Navbar } from '@mantine/core'

import User from './User'
import NavLinkGroup from './NavLinkGroup'

const Sidebar = ({children}:any) => {
  return (
    <nav className=' h-screen  bg-gray-200 flex'>
       <section className='hidden sm:block'>
        <Navbar width={{ sm: 175 ,md:215,lg:230,xl:300}} p="md">
          <Navbar.Section>
          <h1 className='text-3xl font-bold text-blue-700 mb-2'>Smart Save</h1>
          <Divider size={"xs"} className='my-4'/>
          </Navbar.Section>
          <Navbar.Section grow>
             <NavLinkGroup/>
          </Navbar.Section>
          <Navbar.Section>
            <div>User</div>
          </Navbar.Section>
        </Navbar>
       </section>
       <main className='w-screen '>
        
        {children}
        </main>
    </nav>
  )
}

export default Sidebar