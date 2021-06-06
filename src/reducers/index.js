import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  GET_MOVIES,
  REMOVE_MOVIE_FAVORITE,
} from '../actions';

const initialState = {
  favoriteMovies: [],
  loadMovies: [],
  movieDetail: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE: {
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.concat(action.payload),
      };
    }
    case GET_MOVIE_DETAIL: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case GET_MOVIES: {
      return {
        ...state,
        loadMovies: action.payload.Search,
      };
    }
    case REMOVE_MOVIE_FAVORITE: {
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter((movie) => movie.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
