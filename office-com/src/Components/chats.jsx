import React from 'react'

export const Chats = () => {
  return (
    <div>
      {Object.entries(Chats)?.map((Chat)=>())}
       <div className='userchat'>
        <img src='https://images.unsplash.com/photo-1671614188183-57bb238ad7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className='userchinfo'>
          <span>Naol</span>
          <p>Hello</p>

        </div>
      </div>
     
      <div className='userchat'>
        <img src='https://images.unsplash.com/photo-1671614188183-57bb238ad7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className='userchinfo'>
          <span>{chat[]}</span>
          <p>Hello</p>

        </div>
      </div>
      <div className='userchat'>
        <img src='https://images.unsplash.com/photo-1671614188183-57bb238ad7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className='userchinfo'>
          <span>Naol</span>
          <p>Hello</p>

        </div>
      </div>  
    </div>
  )
}

