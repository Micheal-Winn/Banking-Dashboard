import React from 'react'
import InputInfo from './InputInfo'
import Button from './Button'


const NewCustomer = () => {
  return (
    <section>
      <form className='p-8 w-[80%] mx-auto bg-white rounded-lg mt-14 shadow-lg'>
        <InputInfo/>
        <div className='flex ml-auto justify-between w-[300px] px-6 mt-10'>
          <Button text='Cancel' bg='bg-white' textColor='text-blue-700' border='border-[1px] border-blue-700' padding='px-8 py-2'/>
          <Button text='Create' bg='bg-blue-700' textColor='text-white' padding='px-8 py-2'/>
        </div>
      </form>
    </section>
  )
}

export default NewCustomer