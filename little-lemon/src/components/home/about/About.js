import React from "react";
import "../../../App.css";

function About() {
  return (
    <div className="presentation">
      <section>
        <div className="text">
          <h2>Little Lemon</h2>
          <h3>CHICAGO</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        <div className="image-container">
          <img
            src="/assets/images/mario&adrian.jpg"
            alt="owners"
            className="image-top"
          />
          <img
            src="/assets/images/mario&adrian-2.jpg"
            alt="adrian and mario"
            className="image-bottom"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
