import { async } from "@firebase/util";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";
export const Search = () => {
  const [userName, setuserName] = useState("");
  const [user, setuser] = useState(null);
  const [err, setErr] = useState(false);

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

  const handleSelect = () => {};

  return (
    <div className="search">
      <div className="searchfo">
        <input
          type="text"
          placeholder="Find user"
          onKeyDown={handlekey}
          onChange={(e) => setuserName(e.target.value)}
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
