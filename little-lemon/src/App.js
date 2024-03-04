import React from "react";
import "./App.css";
import Main from "./Main";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Nav";

const App = () => (
  <>
    <NavBar />
    <div className="container">
      <Main />
    </div>
    <Footer />
  </>
);

export default App;
