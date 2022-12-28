import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export const Navbar = () => {
  return (
    <div className='navbar'>

      <span className='logo'>Office-Comm </span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1671614188183-57bb238ad7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt=''></img>
        <span>Naol</span>
        <button onclick={()=>signOut(auth)}>Log out</button>
        
      </div>    




    </div>
  )
}
