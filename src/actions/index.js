export const ADD_NEW_FILM = 'ADD_NEW_FILM';

export const addNewFilm = (id, title, overview, poster_path) => ({
  type: ADD_NEW_FILM,
  id,
  title,
  overview,
  poster_path,
});

export const SET_ID_VALUE = 'SET_ID_VALUE';

export const setIDValue = (id, title, overview, poster_path) => ({
  type: SET_ID_VALUE,
  id,
  title,
  overview,
  poster_path,
});

export const SET_SEARCH_FILM = 'SET_SEARCH_FILM';

export const setSearchFilm = (id, title, overview, poster_path) => ({
  type: SET_SEARCH_FILM,
  id,
  title,
  overview,
  poster_path,
});

export const SET_SEARCH_NEW_VALUE = 'SET_SEARCH_NEW_VALUE';

export const setSearchNewValue = (search_value) => ({
  type: SET_SEARCH_NEW_VALUE,
  search_value,
});

export const CLEAN_SEARCH_FILM = 'CLEAN_SEARCH_FILM';

export const cleanSearchFilm = () => ({
  type: CLEAN_SEARCH_FILM,
});

export const CLEAN_VAR = 'CLEAN_VAR';

export const cleanVar= () => ({
  type: CLEAN_VAR,
});

export const GET_DATA = 'GET_DATA';

export const getData = () => ({
  type: GET_DATA,
});

export const SET_DATA = 'SET_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  data,
});
