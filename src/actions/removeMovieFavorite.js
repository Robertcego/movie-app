import { REMOVE_MOVIE_FAVORITE } from ".";

export default function removeMovieFavorite(payload) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload,
  };
}
