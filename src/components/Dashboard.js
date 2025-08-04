import React from 'react';
import './CSS/Dashboard.css';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaEye, FaBullhorn, FaList } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>STUDEX</h1>
        <p>Exchange what you have. Get what you need.</p>
      </div>
      <div className="particles-bg"></div>


      <div className="dashboard-grid">
        <Link to="/CreateOffer" className="dashboard-card">
          <FaPlusCircle className="dashboard-icon" />
          <h3>Create Offer</h3>
          <p>Post something you want to exchange.</p>
        </Link>

        <Link to="/offers" className="dashboard-card">
          <FaEye className="dashboard-icon" />
          <h3>View Offers</h3>
          <p>See what others are offering.</p>
        </Link>

        <Link to="/create-need" className="dashboard-card">
          <FaBullhorn className="dashboard-icon" />
          <h3>Post a Need</h3>
          <p>Let others know what you’re looking for.</p>
        </Link>

        <Link to="/needs" className="dashboard-card">
          <FaList className="dashboard-icon" />
          <h3>View Needs</h3>
          <p>Check if someone needs what you have.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
