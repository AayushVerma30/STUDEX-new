import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./CSS/Header.css";
import logo from "./image/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, [location]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isStartOrLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">STUDEX</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>

        {!isLoggedIn && isStartOrLoginPage && (
          <NavLink to="/login" className="nav-link">Login</NavLink>
        )}

        {isLoggedIn && !isStartOrLoginPage && (
          <>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
            <button className="nav-link logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
