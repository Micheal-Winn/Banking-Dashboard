import dynamic from 'next/dynamic'
import Card from '@/components/Dashboard/Card'
import Header from '@/components/Dashboard/Header'
import * as Progress from "@radix-ui/react-progress";

import React from 'react'
import ProgressStatus from '@/components/charts/ProgressStatus'
import Demo from '@/components/charts/Demo';

const TransactionChartDynamic = dynamic(() => import('@/components/charts/TransactionChart'), {ssr: false})
const TransactionPieChartDynamic = dynamic(() => import('@/components/charts/TransactionPieChart'), {ssr: false})

const dashboard = () => {
  return (
    <section className='h-screen bg-[#FBFBFB] pl-10'>
        <Header/>
        <Card/>
        <div className='flex gap-[2%] pr-2  box-border'>
        <TransactionChartDynamic/>
        <div className='flex flex-col w-[45%]'>
          <div className='flex flex-col mt-16'>
           <Demo/>
          </div>
        <TransactionPieChartDynamic/>
        </div>
        </div>
    </section>
  )
}

export default dashboard