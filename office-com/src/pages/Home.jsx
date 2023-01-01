import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Chat } from '../Components/chat'
import { Chats } from '../Components/chats'


export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar></Sidebar>
            <Chats></Chats>

        </div>
        
    </div>
  )
}

