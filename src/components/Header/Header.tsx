import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      {/* Logo e Direção */}
      <div className="logo-direction">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Botão Hambúrguer */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
          {/* Botão Login dentro do Menu */}
          <li>
            <button className="btn-login">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
