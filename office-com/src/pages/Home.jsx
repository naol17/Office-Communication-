import React from 'react'
import Sidebar from './Components/Sidebar'
import Chat from './Components/chat'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar></Sidebar>
            <Chat></Chat>

        </div>
        
    </div>
  )
}

export default Home