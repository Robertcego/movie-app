import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieFavorite, getMovies } from '../../actions';
import { Link } from 'react-router-dom';
import MovieCard from '../Movie/MovieCard';

function Search({ movies, getMovies, addMovieFavorite }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(title);
  };

  return (
    <div style={{ width: '100vw' }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Search</label>
        <input type="text" value={title} onChange={(e) => handleChange(e)} />
        <button type="submit">Search Movie</button>
      </form>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <div
              style={{
                padding: '0.15rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Link to={`/movie/${movie.imdbID}`}>
                <MovieCard
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                />
              </Link>
              <button
                onClick={() =>
                  addMovieFavorite({
                    title: movie.Title,
                    id: movie.imdbID,
                  })
                }
              >
                Add Favorite
              </button>
            </div>
          </div>
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
