import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // const auth = getAuth();
     await signInWithEmailAndPassword(auth, email, password)
       navigate("/")
    } catch (err) {
      setErr(true);
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
          {err && <span>Something went wrong </span>}

        </form>
        <p>Don't You have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};
 
// export default Login;