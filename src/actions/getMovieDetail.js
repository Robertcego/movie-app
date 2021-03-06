import { GET_MOVIE_DETAIL } from '../actions';

// require("dotenv").config();
// const apiKey = process.env.REACT_API_KEY;

export default function getMovieDetail(id) {
  return async function (dispatch) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=d7d8e6f3&i=${id}`);

    const json = await response.json();
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: json,
    });
    console.log(json);
  };
}
