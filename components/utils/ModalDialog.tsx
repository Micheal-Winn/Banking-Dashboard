import React from 'react'
import { Modal,Group,Button, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const ModalDialog = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit User" centered>
        <TextInput label="Name" value={"thantzinwin"}/>
      </Modal>
      <Group position='center'>
        <Button onClick={open} color='blue' className='bg-blue-700'>Open</Button>
      </Group>
    </>
  )
}

export default ModalDialog