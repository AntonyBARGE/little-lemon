import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "visible" : ""}`}>
      <Link to="/" className="logo">
        <img src="/assets/images/logo.svg" alt="logo"></img>
      </Link>

      {/* mobile navbar button */}
      <button className="menu-icon" onClick={toggleMenu}>
        <img src="/assets/icons/hamburger.svg" alt="menu-icon"></img>
      </button>

      {/* nav items */}
      <ul className={`nav-links ${isMenuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Order online
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
