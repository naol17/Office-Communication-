import React, { useContext } from "react";
import { GrAttachment } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { async } from "@firebase/util";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const Input = () => {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const{currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  
  const handleSend = async()=>{
    if (img) {

      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error)=>{

        },
        ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db,"chats",data.chatId),{
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img:downloadURL,
            }),
          });
        })
      }
      );
      
    }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }), 
      });
    }
  

    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text,
      },
      [data.chatId + ".date"]:serverTimestamp(),
    });
    setText("");
    setImg(null)
  }
  return (
    <div className="input">
      <input type="text" placeholder="Type message..."  onChange={(e)=>setText(e.target.value)}
      value={text}/>
      <div className="send">
        <GrAttachment style={{ cursor: "pointer" }} />
        <input type="file" style={{ display: "none" }} id="file" onChange={(e)=> setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <BsFillImageFill style={{ cursor: "pointer" }} />
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};
