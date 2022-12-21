import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Chat } from '../Components/chat'


export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar></Sidebar>
            <Chat>dfb</Chat>

        </div>
        
    </div>
  )
}

