import React from 'react'
import Searchbar from './Searchbar'
import Noti from './Noti'

const Header = () => {
  return (
    <section className='flex p-3 justify-between mr-2 items-center'>
        <h2 className='text-3xl font-bold'>Dashboard</h2>
        <Searchbar/>
        <Noti/>
    </section>
  )
}

export default Header