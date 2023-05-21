import React from 'react'
import TransactionFilterTable from './TransactionFilterTable'
import { Input, Text } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import Button from '../CustomerComponent/Button'

const TransactionFilterId = () => {
  return (
    <section className="mt-4 pl-8 pr-8 pt-8">
<div className="flex justify-between items-center w-full my-3">
      <h2 className="text-2xl font-semibold  text-blue-500">
        Transaction History Filter By Customer ID
      </h2>
      <div className='flex gap-4 items-center'>
        <div className="w-[250px]">
            <Input icon={<IconSearch size={16} stroke={1.5}/>} radius={"xl"} placeholder="Enter CustomerId"/>
          </div>
          <Button text='Search' bg='bg-blue-700' textColor='text-white' padding='px-5 py-2 rounded-2xl' />
      </div>
      
    </div>
    <TransactionFilterTable/>
  
</section>
  )
}

export default TransactionFilterId