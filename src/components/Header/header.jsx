import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/patientdashboard">Patient System</Link></div>
      <nav className="nav-links">
      <Link to="/services">Services</Link>
        <Link to="/bookappointment">Book an appointment</Link>
        <Link to="/myappointments">My appointment</Link>
      </nav>
    </header>
  );
};


export default Header;

