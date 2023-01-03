import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">MySpc</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}





// import { signOut } from 'firebase/auth'
// import React from 'react'
// import { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import { auth } from '../firebase'

// export const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)
//   return (
//     <div className='navbar'>

//       <span className='logo'>Myspace </span>
//       <div className='user'>        
//         <img src={currentUser.photoURL} alt=''></img>
//         <span>{currentUser.displayName}</span>
//         <button onClick={()=>signOut(auth)}>LogOut</button>
        
//       </div>    




//     </div>
//   )
// }
