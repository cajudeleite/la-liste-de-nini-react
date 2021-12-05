import {
  ADD_NEW_FILM, SET_ID_VALUE, SET_SEARCH_FILM, SET_SEARCH_NEW_VALUE, CLEAN_SEARCH_FILM, CLEAN_VAR, SET_DATA
} from '../actions';

const initialState = {
  id: null,
  title: null,
  overview: null,
  poster_path: null,
  films: [],
  searchFilms: [],
  search_value: '',
  data: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_FILM: {
      return {
        ...state,
        searchFilms: [
          ...state.searchFilms,
          {
            id: action.id,
            title: action.title,
            overview: action.overview,
            poster_path: action.poster_path,
          },
        ],
      };
    }
    case ADD_NEW_FILM: {
      return {
        ...state,
        films: [
          ...state.films,
          {
            id: action.id,
            title: action.title,
            overview: action.overview,
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
    case SET_SEARCH_NEW_VALUE:
      return {
        ...state,
        search_value: action.search_value,
      };
    case CLEAN_SEARCH_FILM:
      return {
        ...state,
        searchFilms: [],
      };
    case CLEAN_VAR:
      return {
        ...state,
        id: null,
        title: null,
        overview: null,
        poster_path: null,
      };
    case SET_DATA:
      return {
        ...state,
        id: action.data.id,
        title: action.data.title,
        overview: action.data.overview,
        poster_path: action.data.poster_path,
        films: action.data.films,
        searchFilms: action.data.searchFilms,
        search_value: action.data.search_value,
      };
    default:
      return state;
  }
};

export default reducer;
