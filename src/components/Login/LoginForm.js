import React, { useState } from "react";

const API = "http://localhost:3000";

const LoginForm = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();

        // Create a JSON object for the request body
        const requestBody = {
            user: loginUsername,
            password: loginPassword
        };

        // Send a POST request to the API endpoint
        fetch(`${API}/api/v1/login`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then((data) => localStorage.setItem("token", data.jwt));

        setLoginUsername("");
        setLoginPassword("");
    }

    return (
        <>
        <h1> Login </h1>
        <form onSubmit={submitLogin}>
            <label>
                Username:
                <input
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form></>
    );
}

export default LoginForm;
