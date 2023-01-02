import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { Input } from "./Input";
import { Mesage } from "./Mesage";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Mesage message={m} key={m.id} />
      ))}
    </div>
  );
};

// export default Messages;
