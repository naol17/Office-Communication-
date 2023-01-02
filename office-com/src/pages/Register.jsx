import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {  Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
        setLoading(true);

    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // const storage = getStorage();
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`); 
      // const uploadTask = uploadBytesResumable(storageRef, file);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formcontainer">
      <div className="firmwrapper">
        <span className="logo">My Work-Space</span>
        <span className="title">Register</span>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="" />
            <BsFillImageFill />
            <span> add avatr</span>
          </label>
          <button>Sign up</button>
          {loading && "Uploading please wait..."}
          {err && <span>Something went wrong </span>}
        </form>
        <p>Do You have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};
