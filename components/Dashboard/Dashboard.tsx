import dynamic from 'next/dynamic'
import Card from '@/components/Dashboard/Card'
import Header from '@/components/Dashboard/Header'

import React from 'react'
import ProgressBar from '@/components/charts/Demo';
import CustomerTable from '@/components/Dashboard/CustomerTable';
import AccountTable from '@/components/Dashboard/AccountTable';
import Footer from '@/components/Footer/Footer';
import TransactionDoughnutChart from '../charts/TransactionDoughnutChart';

const TransactionChartDynamic = dynamic(() => import('@/components/charts/TransactionChart'), {ssr: false})
const TransactionPieChartDynamic = dynamic(() => import('@/components/charts/TransactionPieChart'), {ssr: false})

const Dashboard = () => {
  return (
		<>
			<section className="box-border h-screen bg-[#FBFBFB] overflow-y-scroll">
				<Header />
				<div className=" 2xl:pl-10 xl:pl-5 lg:pl-8 md:pl-5 sm:pl-6 pl-8">
					<Card />
					<div className="flex flex-col xl:flex-row gap-6 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-[2%] pr-6 sm:pr-7 md:pr-6 lg:pr-7 xl:pr-0 2xl:pr-1 box-border">
						<TransactionChartDynamic />
						<div className="flex flex-col w-full xl:w-[45%] gap-4">
							<div className="flex flex-col gap-4 py-3 px-3 rounded-lg xl:mt-6 2xl:mt-16 bg-white shadow-lg">
								<div className="flex items-center justify-between gap-[5%] text-sm font-semibold">
									<p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">Customers</p>
									<div className="w-[70%]">
										<ProgressBar progress={10} color="bg-blue-700" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">Total Accounts</p>
									<div className="w-[70%]">
										<ProgressBar progress={20} color="bg-[#FE9520]" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className="w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base">Deposit Accounts</p>
									<div className="w-[70%]">
										<ProgressBar progress={40} color="bg-[#BE1FE5]" />
									</div>
								</div>
								<div className="flex items-center gap-[5%] text-sm font-semibold">
									<p className='w-[25%] text-[0.65rem] sm:text-[0.8rem] md:text-base'>Transaction Accounts</p>
									<div className='w-[70%]'>
										<ProgressBar progress={80} color="bg-[#20C394]" />
									</div>
								</div>
							</div>
							<TransactionPieChartDynamic />
                            <div className='w-full bg-white rounded-lg shadow-lg py-2 block sm:hidden'>
                                <TransactionDoughnutChart/>
                            </div>
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

export default Dashboard