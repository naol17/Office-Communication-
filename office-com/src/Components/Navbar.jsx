import { signOut } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>

      <span className='logo'>Office-Comm </span>
      <div className='user'>
        <img src={currentUser.photoURL} alt=''></img>
        <span>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>LogOut</button>
        
      </div>    




    </div>
  )
}
