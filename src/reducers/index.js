import {
  ADD_NEW_FILM, SET_ID_VALUE, SET_FILM_VALUES,
} from '../actions';

const initialState = {
  id: null,
  title: null,
  overview: null,
  poster_path: null,
  films: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_FILM: {
      return {
        ...state,
        films: [
          ...state.films,
          {
            id: action.id,
            title: state.title,
            overview: state.overview,
            poster_path: action.poster_path,
          },
        ],
      };
    }
    case SET_ID_VALUE:
      return {
        ...state,
        id: action.id,
        title: action.title,
        overview: action.overview,
        poster_path: action.poster_path,
      };
    default:
      return state;
  }
};

export default reducer;
