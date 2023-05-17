import Header from '@/components/Header/Header'
import React, { ReactNode } from 'react'

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        <main>{children}</main>
    </>
  )
}

export default Layout


type  LayoutProps = {children:ReactNode}