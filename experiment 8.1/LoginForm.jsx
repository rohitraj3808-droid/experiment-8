import "./LoginForm.css";
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password.");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
    setError("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="off"
        />
        {error && (
          <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
            {error}
          </div>
        )}
        <button type="submit" style={{ background: "#0582f7", color: "white" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
