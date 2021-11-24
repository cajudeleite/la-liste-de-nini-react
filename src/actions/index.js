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
