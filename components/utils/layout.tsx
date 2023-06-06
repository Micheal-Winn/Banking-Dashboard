import Header from '@/components/Header/Header'
import React, { ReactNode } from 'react'

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <main className='h-screen bg-white overflow-y-scroll'>
        <Header/>
        <section className=''>{children}</section>
    </main>
  )
}

export default Layout


type  LayoutProps = {children:ReactNode}