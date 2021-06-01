import { ADD_MOVIE_FAVORITE } from ".";

export default function addMovieFavorite(payload) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload,
  };
}
