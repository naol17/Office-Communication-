import React from 'react'

export const Register = () => {
  return (
    <div className='formcontainer'>
        <div className='firmwrapper'>
          <span className='logo'>Office Communication</span>
          <span className='title'>Register</span>
          <form>
            <input type='text' placeholder="diplay name"/>
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="password"/>
            <input style={{display:"none"}} type='file' id='file'/>
            <lable htmlFor='file'>
              <img src='' alt='I'/> 
              <span>add avatr</span>
              </lable>         
            <button>Sign up</button>
                      
          </form>
            <p>Do You have an account? Log in</p>
            
        </div>
    </div>
  )
}
