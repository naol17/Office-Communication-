import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const Register = () => {
  const [error, setError] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const Name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storage = getStorage();
      const storageRef = ref(storage, "images/rivers.jpg");

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
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
          <lable htmlFor="file">
            <img src="" alt="" />
            <span>
              {" "}
              <BsFillImageFill /> add avatr
            </span>
          </lable>
          <button>Sign up</button>
          {error && <span>Something went wrong </span>}
        </form>
        <p>Do You have an account? Log in</p>
      </div>
    </div>
  );
};
