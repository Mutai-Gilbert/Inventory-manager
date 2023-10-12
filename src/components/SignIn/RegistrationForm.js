import React from 'react'
import { useState } from 'react'

const Signin = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        
    }



  return (
    <div className="App">
        <h1>Create a new User</h1>

        <form>
            <label>
                Username:
                <input 
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ></input>
            </label>
            <label>
                Email:
                <input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </label>
            <label>
                Password:
                <input 
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
      
    </div>
  )
}

export default Signin;
