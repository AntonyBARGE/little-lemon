import React from "react";
import "../../../App.css";
import comments from "../../../comments";
import Comment from "./Comment";

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="cards">{comments.map((comment) => Comment(comment))}</div>
      <button className="green-text">Add comment</button>
    </div>
  );
}

export default Testimonials;
