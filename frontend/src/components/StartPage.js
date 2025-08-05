import React from "react";
import './CSS/StartPage.css';
const StartPage = () => {
  return (
    <div className="startpage">
      <div className="startpage-content">
        <h1>Welcome to STUDEX</h1>
        <p>Exchange resources, skills, and needs with your fellow students  smartly and securely.</p>
        <a href="/login" className="start-btn">Get Started</a>
      </div>
    </div>
  );
};

export default StartPage;
