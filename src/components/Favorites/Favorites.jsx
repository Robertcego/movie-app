import React from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

function Favorites({ favorites, removeMovieFavorite }) {
  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            <button onClick={() => removeMovieFavorite(movie.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
