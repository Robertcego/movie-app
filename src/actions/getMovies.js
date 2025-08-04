import { GET_MOVIES } from '.';

const apiKey = process.env.REACT_APP_API_KEY;

export default function getMovies(title) {
  return async function (dispatch) {
    console.log('API Key:', apiKey);
    console.log('Searching for:', title);
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`);
    const json = await response.json();
    console.log('API Response:', json);
    dispatch({
      type: GET_MOVIES,
      payload: json,
    });
  };
}
