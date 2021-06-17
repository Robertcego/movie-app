import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
// import { Link } from 'react-router-dom';
// import MovieCard from '../Movie/MovieCard';

function Search({ movies, getMovies }) {
  const [title, setTitle] = useState('');

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
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.loadMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    // addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
