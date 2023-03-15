import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

interface LayoutProp {
  children: React.ReactElement

}

const Layout: React.FC<LayoutProp> = ({children}:any) => {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout