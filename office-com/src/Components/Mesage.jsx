import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Mesage = ({message}) => {
  const{currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()


  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  



  console.log(message);
  return (
    <div ref={ref}
    className={`message ${message.senderId === currentUser.uid}`}>
      <div className="mesageinfo">
        <img
          src={message.senderId === currentUser.uid ? currentUser.photoURL:data.user.photoURL && "owner"}
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messagecontent">
        <p>{message.text}</p>
       { message.img && <img
          src={message.img}
          alt=""
        />}
      </div>
    </div>
  );
};
