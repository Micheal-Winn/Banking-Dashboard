import React from 'react'

import { Table,createStyles,Pagination, Divider } from '@mantine/core'
import { accountTableData } from '@/data/Data';

//later below codes will be deprecated
const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
          : theme.colors[theme.primaryColor][0],
    },
  }));

const AccountTable = () => {
    const { classes, cx } = useStyles();


    const rows = accountTableData.map((account)=>(
        <tr key={account.id} className='hover:bg-gray-100'>
            <td  style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>{account.id}</td>
            <td  style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>{account.type}</td>
            <td  style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>{account.amount}</td>
        </tr>
    ))

  return (
    <section className='bg-white rounded-lg shadow-lg mt-10 mb-6 max-w-[800px] mr-auto'>
        <Table >
            <thead>
                <tr>
                    <th style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>Account No</th>
                    <th style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>Account Type</th>
                    <th style={{padding:"0.7rem 0.7rem 0.7rem 2rem"}} className='font-semibold'>Total Amount</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
        <Divider size={'xs'}/>
        {/** change total according to the data */}
        <div className='w-[300px] ml-auto py-6'>
          <Pagination total={5}/>
        </div>
    </section>
  )
}

export default AccountTable