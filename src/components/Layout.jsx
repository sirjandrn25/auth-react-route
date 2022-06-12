import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-teal-100'>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
