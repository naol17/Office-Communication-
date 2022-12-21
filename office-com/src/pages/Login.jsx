import React from 'react'

export const Login = () => {
  return (
    <div className='formcontainer'>
        <div className='firmwrapper'>
          <span className='logo'>Office Communication</span>
          <span className='title'>Login</span>
          <form>
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="password"/>
            <input style={{display:"none"}} type='file' id='file'/>
                    
            <button>Log In</button>
                      
          </form>
            <p>Don't You have an account? Register</p>
            
        </div>
    </div>
  )
}
