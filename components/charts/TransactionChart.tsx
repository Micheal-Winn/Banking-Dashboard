"use client"

import React from 'react'
import {IconCircleArrowUp} from "@tabler/icons-react"
import ReactApexChart from 'react-apexcharts'

import { TotalTransactionsSeries,TotalTransactionsOptions } from './chart.config'

const TransactionChart = () => {
  return (
		<section className="w-1/2 mt-16 flex flex-col gap-6 bg-white rounded-lg overflow-hidden shadow-lg pt-4 pl-4">
			<p className="text-lg font-bold">Total Transactions</p>
			<div className="flex gap-6">
				<p className="text-3xl font-extrabold text-blue-800">
					$ <span className='text-5xl'>25356544</span>
				</p>
				<div className="flex gap-2 items-center">
					{/**Arrow up and down */}
					<IconCircleArrowUp size={30} color="blue" className="" />

					<div className="flex flex-col">
						<p className="">
							{" "}
							<span className="text-blue-700 font-bold">0.9</span> %
						</p>
						<p>Last 24 Hours</p>
					</div>
				</div>
			</div>

			{/**Chart  */}
			<ReactApexChart
				series={TotalTransactionsSeries}
				type="bar"
				height={310}
				options={TotalTransactionsOptions}
			/>
		</section>
	);
}

export default TransactionChart