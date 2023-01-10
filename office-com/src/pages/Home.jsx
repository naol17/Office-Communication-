import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Chat } from "../Components/chat";
import { Draggable_card } from "../Components/draggable/draggable_card";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Sidebar /> */}
        {/* <Chat /> */}
        <Draggable_card />
      </div>
    </div>
  );
};
// import React from 'react'
// import { Sidebar } from '../Components/Sidebar'
// import { Chat } from '../Components/chat'
// import { Chats } from '../Components/chats'

// export const Home = () => {
//   return (
//     <div className='home'>
//         <div className='container'>
//             <Sidebar></Sidebar>
//             <Chats></Chats>

//         </div>

//     </div>
//   )
// }
