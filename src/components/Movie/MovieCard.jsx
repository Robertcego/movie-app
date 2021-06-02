import React from "react";
import "./MovieCard.component.css";

function MovieCard({ title, poster }) {
  return (
    <div className="card-container">
      <img width="auto" height="350rem" src={poster} alt={title} />
    </div>
  );
}

export default MovieCard;
