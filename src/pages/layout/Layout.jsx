import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Top from '../../components/top/Top'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout