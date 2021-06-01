import { GET_MOVIES } from ".";
require("dotenv").config();

// const apiKey = process.env.REACT_API_KEY;

export default function getMovies(title) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=d7d8e6f3&s=${title}`
    );
    const json = await response.json();
    dispatch({
      type: GET_MOVIES,
      payload: json,
    });
  };
}
