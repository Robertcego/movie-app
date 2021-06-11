import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { addMovieFavorite } from '../../actions';

function Movies({ movies, addMovieFavorite }) {
  return (
    <div>
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

const mapStateToProps = (state) => {
  return {
    movies: state.loadMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
