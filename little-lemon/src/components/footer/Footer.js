import React from "react";
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
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">X</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
