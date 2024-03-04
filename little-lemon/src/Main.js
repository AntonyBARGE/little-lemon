import React, { useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ConfirmedBooking from "./components/booking/confirmed-booking/ConfirmedBooking";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";

function Main() {
  const fetchApi = function (date) {
    let result = [];
    for (let i = 17; i < 23; i++) {
      if (Math.random() < 0.5) {
        result.push(i + ":00");
      } else {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitApi = function (data) {
    return true;
  };

  const initialeSate = {
    availableTimes: fetchApi(new Date()),
  };
  const [state, dispatch] = useReducer(updateTimes, initialeSate);

  function updateTimes(state, date) {
    return { availableTimes: fetchApi(new Date()) };
  }

  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();
  function submitForm(data) {
    if (submitApi(data)) {
      console.log(data);
      setFormData(data);
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking formData={formData} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
