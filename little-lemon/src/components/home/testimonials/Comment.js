import PropTypes from "prop-types";
import React from "react";
import "../../../App.css";

function Comment(props) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<span className="star filled">★</span>);
    } else {
      stars.push(<span className="star">★</span>);
    }
  }
  return (
    <div className="comment" key={props.id}>
      <div>
        <div>{stars}</div>
        <img
          src={props.profilePictureSrc}
          alt="Profile"
          className="profile-pic"
        />
        <h3 className="username">{props.username}</h3>
      </div>
      <div>
        <h5>Comment</h5>
        <p className="testimony">“{props.comment}“</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  profilePictureSrc: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
