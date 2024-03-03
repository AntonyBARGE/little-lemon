import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import NavBar from "./components/navigationBar/nav";

const App = () => (
  <div className="container">
    <Helmet>
      <meta charset="UTF-8" />
      <title>Little Lemon</title>
      <meta name="description" content="Based in Chicago," />
      <meta
        name="keywords"
        content="little, lemon, restaurant, Mediterranean, traditional, recipes"
      />
      <meta name="author" content="Antony BARGE" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Little Lemon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="Logo.svg" />
      <meta property="og:url" content="https://littlelemon/" />
      <meta property="og:description" content="Little Lemon " />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Little Lemon" />
    </Helmet>
    <NavBar />
  </div>
);

export default App;
