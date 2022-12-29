// import { async } from "@firebase/util";
import { collection, doc, getDoc,getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
// import Messages from "./Messages";
export const Search = () => {
  const [userName, setuserName] = useState("");
  const [user, setuser] = useState(null);
  const [err, setErr] = useState(false);
  const {currentUser} = useContext(AuthContext)

  const handlesearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setuser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handlekey = (e) => {
    e.code === "Error" && handlesearch();
  };

  const handleSelect = async() => {
    // check if chat is in a firebase
    const CombinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
  const res = await getDoc(doc(db, "chats", CombinedId));

  if (!res.exists()) {
    await setDoc(doc,(db,"chats", CombinedId),{messages:[]})

    // create user chat 
   await updateDoc(doc(db,"userChats",currentUser.uid),{
    [CombinedId+".userInfo"]:{
      uid:user.uid,
      displayName: user.displayName,
      photo: user.photoURL,
    },
    [CombinedId+ ".date"]:serverTimestamp()
   });
   await updateDoc(doc(db,"userChats",user.uid),{
    [CombinedId+".userInfo"]:{
      uid: currentUser.uid,
      displayName:  currentUser.displayName,
      photo:  currentUser.photoURL,
    },
    [CombinedId+ ".date"]:serverTimestamp()
   }) 
    
  }

  
} catch (error) {
  
}
  };

  setuser(null);
  setuserName("")

  return (
    <div className="search">
      <div className="searchfo">
        <input
          type="text"
          placeholder="Find user"
          onKeyDown={handlekey}
          onChange={(e) => setuserName(e.target.value)}
          value={userName}
          
        ></input>
      </div>
      {err && <span>user not found</span>}
      {user && (
        <div className="userchat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userchinfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
