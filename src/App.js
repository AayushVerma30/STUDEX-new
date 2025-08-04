import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartPage from "./components/StartPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Register from "./components/Register";
import CreateOffer from "./components/CreateOffer";
import ViewOffer from "./components/ViewOffers";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createOffer" element={<CreateOffer />} />
        <Route path="/ViewOffers" element={<ViewOffer />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
