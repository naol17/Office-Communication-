import React from 'react'
import {HiUserAdd} from 'react-icons/hi'
import{FiMoreVertical} from 'react-icons/fi'
import Messages from './Messages'
import { Input } from './Input'
export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Naol</span>
        <div className="chaticons">
        <HiUserAdd style={{color: 'red', fontSize: '20px'}} /> <FiMoreVertical  style={{color: 'red', fontSize: '20px'}}/>
        </div>
      </div>
      
      <Messages/>
      <Input/>

    </div>
  )
}

