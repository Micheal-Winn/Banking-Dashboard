import React from 'react'
import { Menu, Navbar } from '@mantine/core'

import User from './User'

const Sidebar = () => {
  return (
    <nav className=' h-screen w-[350px] bg-gray-200'>
       <section className='hidden sm:block'>
        <Navbar width={{ sm: 175 ,md:215,lg:230,xl:300}} p="md">
          <Navbar.Section>
          <h1 className='text-3xl font-bold p-4'>Smart Save</h1>
          </Navbar.Section>
          <Navbar.Section grow>
              <div className='bg-gray-500'>links</div>
          </Navbar.Section>
          <Navbar.Section>
            <div>User</div>
          </Navbar.Section>
        </Navbar>
       </section>
    </nav>
  )
}

export default Sidebar