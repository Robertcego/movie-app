import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import { useParams } from "react-router-dom";

function Movie({ getMovieDetail, movieDetail }) {
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, movieDetail, id]);

  return (
    <div>
      {movieDetail ? (
        <div>
          <h1>Title:</h1>
          <p>{movieDetail.Title}</p>
          <p>{movieDetail.Year}</p>
          <img src={movieDetail.Poster} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const mapStateToProps = ({ movieDetail }) => ({ movieDetail });

export default connect(mapStateToProps, { getMovieDetail })(Movie);
