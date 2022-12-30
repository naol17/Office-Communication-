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
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);

          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            
            await setDoc(doc(db, "users", res.user.uid), {

              uid: res.user.uid,
              displayName,               
              email,
              password,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid),{});
            navigate("/")
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formcontainer">
      <div className="firmwrapper">
        <span className="logo">Office Communication</span>
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
          {error && <span>Something went wrong </span>}
        </form>
        <p>Do You have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};
