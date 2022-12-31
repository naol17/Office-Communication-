import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

export const Chats = () => {
  const [Chats, setchats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setchats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);
  console.log(Object.entries(Chats));
  return (
    <div className="chats">
      {Object.entries(Chats)?.map((Chat) => (
        <div className="userchat" key={Chat[0]}>
          <img src={Chat[1].userInfo.photoURL} alt="" />
          <div className="userchinfo">
            <span>{Chat[1].userInfo.displayName}</span>
            <p>{Chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
