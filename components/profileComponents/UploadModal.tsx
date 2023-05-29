import React from 'react'
import { FileInput, Modal } from '@mantine/core'
import { IconUpload } from '@tabler/icons-react'

const UploadModal:React.FC<ModalProps> = (
    {
        open,close,title,placeholder,handler,imageUrl,alt
    }
) => {
  return (
    <Modal opened={open} onClose={close} title={title}
    centered size={"xs"}
    >
        <FileInput placeholder={placeholder}  onChange={handler} accept="image/*" icon={<IconUpload size={"0.8rem"}/>}/>
    </Modal>
  )
}

export default UploadModal

type ModalProps = {
    open:boolean,
    close:()=>void,
    title?:string,
    placeholder:string,
    handler:(data:File)=>void,
    imageUrl?:string,
    alt?:string
}