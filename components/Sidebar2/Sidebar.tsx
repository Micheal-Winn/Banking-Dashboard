import React from 'react'
import { Menu } from '@mantine/core'

import User from './User'

const Sidebar = () => {
  return (
    <nav className=' h-screen w-[350px] bg-gray-200'>
        <h1 className='text-3xl font-bold p-4'>Smart Save</h1>

        <User/>
    </nav>
  )
}

export default Sidebar