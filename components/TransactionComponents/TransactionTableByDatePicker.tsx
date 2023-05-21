import React from 'react'
import { Text,} from "@mantine/core";
import DateRangePicker from './DateRangePicker';
import TransactionFilterTable from './TransactionFilterTable';


const TransactionTableByDatePicker = () => {

return (
<section className="mt-4 pl-8 pr-8 pt-8">
<div className="flex justify-between items-center w-full my-3">
      <h2 className="text-2xl font-semibold  text-blue-500">
        Transaction History Between Desired Dates
      </h2>
      <div className='flex gap-4 items-center'>
        <Text className='text-xs font-semibold text-slate-600'>Filter By Date Range</Text>
        <DateRangePicker/>
      </div>
      
    </div>
    <TransactionFilterTable/>
  
</section>
);
  
}

export default TransactionTableByDatePicker