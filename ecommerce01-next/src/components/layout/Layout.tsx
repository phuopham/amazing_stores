import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout({children}:{children: React.ReactNode}) {
  return (
    <main className={inter.className}>
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout