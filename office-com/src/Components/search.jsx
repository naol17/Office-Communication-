import { async } from '@firebase/util';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'

export const Search = () => {
  const [userName, setuserName] = useState("");
  const [user, setuser] = useState(null);
  const [err, setErr] = useState(false);


  const handlesearch = async()=>{
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach(doc => {
      
    });

  }

  const handlekey = (e)=>{
    e.code === "Error" && handlesearch();

  }


  return (
    <div className='search'>
      <div className='searchfo'>
        <input type='text' placeholder='Find user'onKeyDown={handlekey} onChange={e=>setuserName(e.target.value)}>

        </input>
      </div>
      <div className='userchat'>
        <img src='https://images.unsplash.com/photo-1671614188183-57bb238ad7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className='userchinfo'>
          <span>Naol</span>

        </div>
      </div>

    </div>
  )
}
