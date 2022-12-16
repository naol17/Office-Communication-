import React from 'react'

export const Register = () => {
  return (
    <div className='formcontainer'>
        <div className='formweapper'>
          <span className='logo'>Office Communication</span>
          <span className='title'>Register</span>
          <form>
            <input type='text' placeholder="diplay name"/>
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="password"/>
            <input type='file'/>

          </form>
            
        </div>
    </div>
  )
}
