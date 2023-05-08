import dynamic from 'next/dynamic'
import Card from '@/components/Dashboard/Card'
import Header from '@/components/Dashboard/Header'
import * as Progress from "@radix-ui/react-progress";

import React from 'react'
import ProgressStatus from '@/components/charts/ProgressStatus'
import ProgressBar from '@/components/charts/Demo';

const TransactionChartDynamic = dynamic(() => import('@/components/charts/TransactionChart'), {ssr: false})
const TransactionPieChartDynamic = dynamic(() => import('@/components/charts/TransactionPieChart'), {ssr: false})

const dashboard = () => {
  return (
    <section className='h-screen bg-[#FBFBFB] pl-10 overflow-y-scroll'>
        <Header/>
        <Card/>
        <div className='flex gap-[2%] pr-2  box-border'>
        <TransactionChartDynamic/>
        <div className='flex flex-col w-[45%] gap-4'>
          <div className='flex flex-col gap-2 p-2 rounded-lg mt-16 bg-white shadow-lg'>
           <div className='flex flex-col gap-2 text-sm font-semibold'>
            <p>Customers</p>
            <ProgressBar progress={10} color='bg-blue-700'/>
           </div>
           <div  className='flex flex-col gap-2 text-sm font-semibold'>
            <p>Total Accounts</p>
            <ProgressBar progress={20} color='bg-[#FE9520]'/>
           </div>
           <div  className='flex flex-col gap-2 text-sm font-semibold'>
            <p>Deposit Accounts</p>
            <ProgressBar progress={40} color='bg-[#BE1FE5]'/>
           </div>
           <div  className='flex flex-col gap-2 text-sm font-semibold'>
            <p>Transaction Accounts</p>
            <ProgressBar progress={80} color='bg-[#20C394]'/>
           </div>
          </div>
        <TransactionPieChartDynamic/>
        </div>
        </div>
    </section>
  )
}

export default dashboard