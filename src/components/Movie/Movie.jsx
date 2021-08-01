import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import { useParams } from 'react-router-dom';

function Movie({ getMovieDetail, movieDetail }) {
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, id]);

  return (
    <div>
      {movieDetail ? (
        <div>
          <h1>Title:</h1>
          <p>{movieDetail.Title}</p>
          <p>{movieDetail.Year}</p>
          <img src={movieDetail.Poster} alt='' />
          <p>{movieDetail.Rated}</p>
          <p>{movieDetail.Released}</p>
          <p>{movieDetail.Runtime}</p>
          <p>{movieDetail.Director}</p>
          <p>{movieDetail.Plot}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = ({ movieDetail }) => ({ movieDetail });

export default connect(mapStateToProps, { getMovieDetail })(Movie);
