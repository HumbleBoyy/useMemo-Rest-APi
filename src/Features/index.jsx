import React from 'react'
import Navbar from '../Modules/Navbar'
import Products from '../Pages/Products'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default Layout
