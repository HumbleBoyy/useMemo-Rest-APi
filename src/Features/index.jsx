import React from 'react'
import Navbar from '../Modules/Navbar'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
