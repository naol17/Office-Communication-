import React from 'react'
import  { BsFillImageFill } from "react-icons/bs";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
export const Register = () => {


  const handlesubmit = (e)=>{
    e.preventDefault()
    const Name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

  }
  // const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return (
    <div className='formcontainer'>
        <div className='firmwrapper'>
          <span className='logo'>Office Communication</span>
          <span className='title'>Register</span>
          <form onSubmit={handlesubmit}>
            <input type='text' placeholder="Name"/>
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="password"/>
            <input style={{display:"none"}} type='file' id='file'/>
            <lable htmlFor='file'>
              <img src='' alt=''/> 
              <span> <BsFillImageFill />  add avatr</span>
              </lable>         
            <button>Sign up</button>
                      
          </form>
            <p>Do You have an account? Log in</p>
            
        </div>
    </div>
  )
}
