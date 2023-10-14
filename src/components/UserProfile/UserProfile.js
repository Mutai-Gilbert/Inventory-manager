import React, { useState, useEffect } from 'react'

const API = "http://localhost:3000";
const StoreLoggedInUser = () => {

    const [loggedUsername, setLoggedUsername] = useState("");
    const [loggedEmail, setLoggedEmail] = useState("");

    const getProfile = () => {
        fetch(`${API}/api/v1/profile`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.user && data.user.username && data.user.email) {
                    setLoggedUsername(data.user.username);
                    setLoggedEmail(data.user.email);
                } else {
                    // Handle the case where data.user or its properties are undefined.
                    console.error("User data is missing.");
                }
            })
    }

    useEffect(() => {
        getProfile();
    }, []);


    return (
        <div>
            {!loggedUsername ? (
                <button onClick={getProfile}> Get Profile</button>
            ) : (
                <>
                    <h1>{loggedUsername}</h1>
                    <h1>{loggedEmail}</h1>
                    <button onClick={localStorage.clear}></button>
                </>
            )}
        </div>
    )
}

export default StoreLoggedInUser;