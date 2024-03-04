import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Hero() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>CHICAGO</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click" className="green-text">
              Reserve a table
            </button>
          </Link>
        </div>
        <div className="banner-img">
          <img src="/assets/images/restaurant-food.jpg" alt="restaurant food" />
        </div>
      </section>
    </header>
  );
}

export default Hero;
