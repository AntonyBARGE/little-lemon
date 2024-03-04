import React from "react";
import "../../App.css";
import recipes from "../../recipes";
import DishCard from "./DishCard";

function Highlights() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Specials</h2>
        <button>On the menu</button>
      </div>
      <div className="cards">{recipes.map((recipe) => DishCard(recipe))}</div>
    </div>
  );
}

export default Highlights;
