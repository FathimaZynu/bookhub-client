import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; 

const Header = () => {
  return (
    <div className="hero-container" >
      <div className="hero-content">
        <h1>Welcome to My Book Hub</h1>
        <p>Find, Manage, and Enjoy Your Favorite Books!</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
