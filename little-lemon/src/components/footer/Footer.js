import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src="/assets/images/footer-logo.png" alt="footer logo"></img>
        </div>
        <div>
          <ul>
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
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Adress: <br />
              123 Wallstreet Chicago
            </li>
            <li>
              Phone: <br /> + 486 (684) 654
            </li>
            <li>
              Email: <br />
              little@lemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <Link to="/" className="link">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                X
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
