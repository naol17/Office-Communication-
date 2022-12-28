import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formcontainer">
      <div className="firmwrapper">
        <span className="logo">Office Communication</span>
        <span className="title">Login</span>
        <form onSubmit={handlesubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <button>Log In</button>
        </form>
        <p>Don't You have an account? Register</p>
      </div>
    </div>
  );
};
