import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  return (
    <div>
        <h1>LOgin</h1>

<form>
  <label>
    Username:
    <input
      type="text"
      name="name"
      value={loginUsername}
      onChange={(e) => setLoginUsername(e.target.value)}
    />
  </label>

  <label>
    Password:
    <input
      type="text"
      name="password"
      value={loginPassword}
      onChange={(e) => setLoginPassword(e.target.value)}
    />
  </label>
  <button onClick={submitLogin}>Submit</button>
</form>
      
    </div>
  )
}

export default Login
