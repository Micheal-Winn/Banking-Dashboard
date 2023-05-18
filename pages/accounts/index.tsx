import CustomerAccountListsTable from '@/components/AccountComponents/CustomerAccountListsTable'
import Layout from '@/components/utils/layout'
import React from 'react'

const AccountLists = () => {
  return (
    <Layout>
        <section className='pl-8 pr-8 pt-8'>
        <CustomerAccountListsTable/>
        </section>
    </Layout>
  )
}

export default AccountLists
