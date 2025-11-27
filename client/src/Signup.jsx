import React, { useState } from "react";
import { signup_api } from "./APIs/auth.api"; 

function Signup() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirm, setConfirm] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) return setError("All fields are required");
    if (password !== confirm) return setError("Passwords do not match");
    try {
      const response = await signup_api({name, email, password})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label><br />
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label><br />
          <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label><br />
          <input type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password</label><br />
          <input type="password" placeholder="••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;