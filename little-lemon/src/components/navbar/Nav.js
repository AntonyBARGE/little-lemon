import React, { useState } from "react";
import "../../App.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "visible" : ""}`}>
      <a href="/" className="logo">
        <img src="/assets/images/logo.svg" alt="logo"></img>
      </a>

      {/* mobile navbar button */}
      <button className="menu-icon" onClick={toggleMenu}>
        <img src="/assets/icons/hamburger.svg" alt="menu-icon"></img>
      </button>

      {/* nav items */}
      <ul className={`nav-links ${isMenuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
        <li>
          <a href="/">Order online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
