import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signin_api } from "../APIs/auth.api";
import { setAuth } from "../redux/auth.slice";

function Signin() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async(e) => { 
    e.preventDefault(); 
    if (!email || !password) return setError("Both fields are required"); 
    try {
        const response = await signin_api({email,password})
        if(response?.isLogin){
            dispatch(setAuth(true))
            navigate('/home')
        }
    } catch (error) {
        console.log(error)
    }
  };

  //srikanth.reddy.n@outlook.com

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label><br />
          <input type="email" value={email} placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label><br />
          <input type="password" value={password} placeholder="••••••" onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
