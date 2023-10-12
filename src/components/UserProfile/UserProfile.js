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
                setLoggedUsername(data.user.username);
                setLoggedEmail(data.user.email);
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