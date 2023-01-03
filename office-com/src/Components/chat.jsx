import React, { useContext } from "react";
import { HiUserAdd } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";

import { ChatContext } from "../context/ChatContext";
import { Messages } from "./Messages";
import { Input } from "./Input";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
        <div className="chaticons">
          <HiUserAdd style={{ color: "red", fontSize: "20px" }} />{" "}
          <FiMoreVertical style={{ color: "red", fontSize: "20px" }} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

// import React from 'react'
// import {HiUserAdd} from 'react-icons/hi'
// import{FiMoreVertical} from 'react-icons/fi'
// import { Input } from './Input'
// import {Messages} from './Messages'
// import { useContext } from 'react'
// // import { AuthContext } from '../context/AuthContext'
// import { ChatContext } from '../context/ChatContext'
// export const Chat = () => {
//   const[data] = useContext(ChatContext)
//   return (
//     <div className='chat'>
//       <div className="chatinfo">
//       <span>{data.user?.displayName}</span>
//           <div className="chaticons">
//         <HiUserAdd style={{color: 'red', fontSize: '20px'}} /> <FiMoreVertical  style={{color: 'red', fontSize: '20px'}}/>
//         </div>
//       </div>
//       <Messages/>
//       <Input/>

//     </div>
//   )
// }
