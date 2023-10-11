import React from 'react'
import { useState } from 'react';

const storeLoggedInUser = () => {

    const [loggedUsername, setLoggedUsername] = useState("");
    const [ loggedEmail, setLoggedEmail] = useState("");

    return (
        <div>

    {!loggedUsername ? (
        <button onClick={getProfile}> Get Profile</button>
    ) :(
        <>
        <h1>{loggedUsername}</h1>
        <h1>{loggedEmail}</h1>
        <button onClick={localStorage.clear}></button>
        </>      
    )}
      </div>
)}

export default storeLoggedInUser
