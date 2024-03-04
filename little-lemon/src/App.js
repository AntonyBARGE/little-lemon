import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Nav";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";

const App = () => (
  <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
    <Footer />
  </>
);

export default App;
