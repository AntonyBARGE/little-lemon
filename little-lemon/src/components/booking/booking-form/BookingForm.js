import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(4);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+");
  const [email, setEmail] = useState("");
  const [wish, setWish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      date,
      time,
      guests,
      firstName,
      lastName,
      phoneNumber,
      email,
      wish,
    };
    props.submitForm(data);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="top-form">
        <div>
          <label htmlFor="book-date">Choose date :</label>
          <input
            id="book-date"
            value={date}
            onChange={(e) => handleChange(e.target.value)}
            type="date"
            required
          ></input>
        </div>
        <div className="custom-select">
          <label htmlFor="book-time">Select time :</label>
          <select
            id="book-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select an hour :</option>
            {props.availableTimes.availableTimes.map((availableTimes) => {
              return <option key={availableTimes}>{availableTimes}</option>;
            })}
          </select>
        </div>
        <div>
          <label htmlFor="book-guests">Number of guests :</label>
          <input
            id="book-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            type="number"
            required
          ></input>
        </div>
      </div>
      <div className="bot-form">
        <div>
          <label htmlFor="book-firstname">Firstname :</label>
          <input
            id="book-firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="book-lastname">Lastname :</label>
          <input
            id="book-lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="book-phone">Phone :</label>
          <input
            id="book-phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="book-email">Email :</label>
          <input
            id="book-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          ></input>
        </div>
      </div>
      <div>
        <label htmlFor="book-wish">Any wish ?</label>
        <textarea
          id="book-wish"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Reserve a table</button>
      </div>
    </form>
  );
}

export default BookingForm;
