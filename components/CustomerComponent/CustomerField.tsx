import { TextInput } from '@mantine/core'
import React from 'react'

const CustomerField:React.FC<FieldProps> = ({
    placeholder,label,form
}) => {
  return (
    <TextInput
        withAsterisk
        placeholder={placeholder}
        label={<span className='font-semibold'>{label}</span>}
        radius={"md"}
        {...form}
        required
    />
  )
}

export default CustomerField;

type FieldProps = {
    label: string;
    placeholder: string;
    form: any;
}