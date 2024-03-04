import PropTypes from "prop-types";
import React from "react";
import "../../App.css";

function DishCard(props) {
  return (
    <div className="menu-items" key={props.id}>
      <img src={props.imageSrc} alt="dish" />
      <div className="menu-content">
        <div className="heading">
          <h5>{props.title}</h5>
          <h5 className="price">${props.price}</h5>
        </div>
        <p className="description">{props.description}</p>
        <button className="orderbtn">Order a delivery</button>
      </div>
    </div>
  );
}

DishCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default DishCard;
