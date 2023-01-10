import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { Chat } from "../Components/chat";
import { Draggable_Card } from "../Components/draggable/draggable_card";
import { Dheader } from "../Components/draggable/Dheader";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Sidebar /> */}
        {/* <Chat /> */}
        <Draggable_Card />
        <Dheader />
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
