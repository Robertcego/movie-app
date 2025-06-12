import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { addMovieFavorite } from '../../actions';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import './Movies.component.css';

function Movies({ movies, addMovieFavorite, favorites }) {
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
            <div className='container'>
              <Link to={`/movie/${movie.imdbID}`}>
                <MovieCard
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                />
              </Link>
              <div
                className='btn'
                onClick={() =>
                  addMovieFavorite({
                    title: movie.Title,
                    id: movie.imdbID,
                  })
                }
              >
                {favorites.some((fav) => fav.id === movie.imdbID) ? (
                  <BsFillStarFill
                    size='1.5em'
                    color='#ffe100'
                    className='fav-icon'
                  />
                ) : (
                  <BsStar
                    size='1.5em'
                    color='#ffe100'
                    className='fav-icon'
                  />
                )}
              </div>
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
    favorites: state.favoriteMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
