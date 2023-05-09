import dynamic from 'next/dynamic'
import Card from '@/components/Dashboard/Card'
import Header from '@/components/Dashboard/Header'
import * as Progress from "@radix-ui/react-progress";

import React from 'react'
import ProgressStatus from '@/components/charts/ProgressStatus'
import ProgressBar from '@/components/charts/Demo';
import CustomerTable from '@/components/Dashboard/CustomerTable';
import AccountTable from '@/components/Dashboard/AccountTable';
import Footer from '@/components/Footer/Footer';

const TransactionChartDynamic = dynamic(() => import('@/components/charts/TransactionChart'), {ssr: false})
const TransactionPieChartDynamic = dynamic(() => import('@/components/charts/TransactionPieChart'), {ssr: false})

const dashboard = () => {
  return (
		<>
			<section className="h-screen bg-[#FBFBFB] overflow-y-scroll">
				<Header />
				<div className=" pl-10 ">
					<Card />
					<div className="flex gap-[2%] pr-2  box-border">
						<TransactionChartDynamic />
						<div className="flex flex-col w-[45%] gap-4">
							<div className="flex flex-col gap-4 py-3 px-3 rounded-lg mt-16 bg-white shadow-lg">
								<div className="flex items-center justify-between gap-[5%] text-sm font-semibold">
									<p className="w-[25%]">Customers</p>
									<div className="w-[70%]">
										<ProgressBar progress={10} color="bg-blue-700" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className="w-[25%]">Total Accounts</p>
									<div className="w-[70%]">
										<ProgressBar progress={20} color="bg-[#FE9520]" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className="w-[25%]">Deposit Accounts</p>
									<div className="w-[70%]">
										<ProgressBar progress={40} color="bg-[#BE1FE5]" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className='w-[25%]'>Transaction Accounts</p>
									<div className='w-[70%]'>
										<ProgressBar progress={80} color="bg-[#20C394]" />
									</div>
								</div>
							</div>
							<TransactionPieChartDynamic />
						</div>
					</div>
					<CustomerTable />
					<AccountTable/>
					
				</div>
				<Footer/>
			</section>
		</>
	);
}

export default dashboard