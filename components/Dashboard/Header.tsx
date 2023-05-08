import React from 'react'
import Searchbar from './Searchbar'
import Noti from './Noti'

const Header = () => {
  return (
    <section className='flex p-3 justify-between mr-2 items-center sticky backdrop-blur-sm top-0'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>
        <Searchbar/>
        <Noti/>
    </section>
  )
}

export default Header