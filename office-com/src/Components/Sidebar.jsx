import React from "react";
import { Chats } from "./chats";
import { Navbar } from "./Navbar";
import { Search } from './search'
// import Search from "./Search"
// import Chats from "./Chats"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <Navbar />
      <Search/>
      <Chats/>
      
    </div>
  );
};




// import React from 'react'
// import { Chats } from './chats'
// import { Navbar } from './Navbar'
// import { Search } from './search'

// export const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <Navbar/>
//       <Search/>
//       <Chats/>
//       {/* <div className='sidebar'>sdf</div> */}
//     </div>
//   )
// }

