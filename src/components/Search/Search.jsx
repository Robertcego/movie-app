import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovieFavorite, getMovies } from "../../actions";
import { Link } from "react-router-dom";

function Search({ movies, getMovies, addMovieFavorite }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(title);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Search</label>
        <input type="text" value={title} onChange={(e) => handleChange(e)} />
        <button type="submit">Search Movie</button>
      </form>
      <div>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <p>{movie.Title}</p>
            </Link>
            <img src={movie.Poster} alt="" />
            <h3>{movie.Year}</h3>
            <button
              onClick={() =>
                addMovieFavorite({
                  title: movie.Title,
                  id: movie.imdbID,
                })
              }
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.loadMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
