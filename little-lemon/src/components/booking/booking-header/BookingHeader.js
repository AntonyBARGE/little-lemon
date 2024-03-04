import React from "react";
import "../../../App.css";

function BookingHeader() {
  return (
    <div className="booking-header">
      <img src="/assets/images/restaurant-chef.jpg" alt="restaurant teaser" />
      <h2 className="booking-select">
        Select date and time for your reservation
      </h2>
    </div>
  );
}

export default BookingHeader;
