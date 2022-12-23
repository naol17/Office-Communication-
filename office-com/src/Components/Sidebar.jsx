import React from 'react'
import { Chats } from './chats'
import { Navbar } from './Navbar'
import { Search } from './search'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
      {/* <div className='sidebar'>sdf</div> */}
    </div>
  )
}

