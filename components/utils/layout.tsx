import Header from '@/components/Header/Header'
import React, { ReactNode } from 'react'

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        <main className='h-[100vh-60px] bg-slate-50 overflow-y-scroll'>{children}</main>
    </>
  )
}

export default Layout


type  LayoutProps = {children:ReactNode}