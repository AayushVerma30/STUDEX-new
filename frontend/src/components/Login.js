import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const TEMP_EMAIL = "testuser@gmail.com";
const TEMP_PASSWORD = "12345678";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === TEMP_EMAIL && password === TEMP_PASSWORD) {
      // ✅ Yahan same key use karo jo Header me check ho rahi hai
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); // ya "/" agar tum home pe bhejna chahte ho
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="register-link">
          Don’t have an account?{" "}
          <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
