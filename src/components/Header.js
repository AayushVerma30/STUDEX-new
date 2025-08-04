import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./CSS/Header.css";
import logo from "./image/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, [location]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isStartOrLogin = location.pathname === "/" || location.pathname === "/login";

  return (
    <header className="custom-header">
      <div className="header-left">
        <img src={logo} alt="STUDEX Logo" className="custom-logo" />
        <h1 className="brand-name">STUDEX</h1>
      </div>

      <div className="header-right">
        <NavLink to="/" className="nav-item">Home</NavLink>
        {isLoggedIn && !isStartOrLogin && (
          <NavLink to="/profile" className="nav-item">Profile</NavLink>
        )}
        {!isLoggedIn && isStartOrLogin && (
          <NavLink to="/login" className="nav-button">Login</NavLink>
        )}
        {isLoggedIn && !isStartOrLogin && (
          <button className="nav-button logout" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </header>
  );
};

export default Header;
