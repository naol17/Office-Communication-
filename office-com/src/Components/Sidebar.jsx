import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './search'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      {/* <div className='sidebar'>sdf</div> */}
    </div>
  )
}

