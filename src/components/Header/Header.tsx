import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Navbar */}

      <div className="logo-direction">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <button className="btn-login">Login</button>
      </div>
    </header>
  );
};

export default Header;
